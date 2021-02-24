import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import _ from 'lodash';

export default function CrudSelectEdit(props) {

    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        Axios.get(props.field.options.getUrl)
            .then((response) => {

                var newFetchedData = [];

                response.data.results.forEach(result => {

                    newFetchedData.push({

                        value: _.get(result, `selectData.data.id`, 0),
                        label: _.get(result, `selectData.value`, 0),

                    });

                });

                setFetchedData(newFetchedData);

                setLoading(false);

            });

        console.log("abba");

    }, []);

    function isDisabled() {

        return loading || isNull();

    }

    function getValue() {

        var modelValue = _.get(props.state,`${props.modelAssoc}.${props.field.assoc}`,null);

        return modelValue ?

            _.get(fetchedData, _.findIndex(fetchedData,(data)=>{

                return data.value === modelValue;

            }),null)

        : null;

    }

    function changeHandler(data) {

        if (data === null) {

            props.setState(props.modelAssoc, _.omit(

                _.get(props.state, props.modelAssoc, {})

                , props.field.assoc));


        } else {

            props.setState(`${props.modelAssoc}.${props.field.assoc}`, data.value);


        }


    }

    function getPlaceholder() {

        var tooltip = _.get(props.field.options,"tooltip",null);

        var fetchedValue = _.get(props.state, `${props.modelFetched}.${props.field.assoc}.value`, null);

        return fetchedValue ?? tooltip ?? "Pole wyboru";

    }

    function isNull() {

        return _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, false) === null;

    }

    return (

        <Select options={fetchedData} isLoading={loading} value={getValue()} isDisabled={isDisabled()} placeholder={getPlaceholder()} onChange={changeHandler} isClearable={true} />

    );

}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';


export default function CrudMultiSelectEdit(props){

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

    }, []);


    function changeHandler(data) {

        if (data === null) {

            props.setState(props.modelAssoc, _.omit(

                _.get(props.state, props.modelAssoc, {})

                , props.field.assoc));


        } else {

            var valuesArray = [];

            data.forEach((data)=>{

                valuesArray.push(data.value);
                
            })


            props.setState(`${props.modelAssoc}.${props.field.assoc}`, valuesArray);


        }


    }


    function getValue() {

        var modelArray = _.get(props.state,`${props.modelAssoc}.${props.field.assoc}`,[]);


        var matchingFetchArray = [];


        modelArray.forEach((value)=>{

            matchingFetchArray.push(_.get(fetchedData, _.findIndex(fetchedData,(data)=>{

                return data.value === value;

            }),null));

        });

        return matchingFetchArray.length > 0 ? matchingFetchArray : null;

    }



    return(

        <Select options={ fetchedData } isMulti={true} isLoading={loading} isDisabled={loading} value={getValue()} onChange={changeHandler}/>

    );


}
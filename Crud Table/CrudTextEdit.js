import React from 'react';


export default function CrudTextEdit(props) {


    function changeHandler(e) {

        if (e.target.value.length > 0) {

            props.setState(`${props.modelAssoc}.${props.field.assoc}`, e.target.value);

        } else {

            props.setState(props.modelAssoc, _.omit(

                _.get(props.state, props.modelAssoc, {})

                , props.field.assoc));

        }

    }

    function getValue() {

        var value = _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, null);

        return value ?? "";

    }

    function getPlaceholder() {

        var tooltip = _.get(props.field.options,"tooltip",null);

        var fetchedValue = _.get(props.state, `${props.modelFetched}.${props.field.assoc}.value`, null);

        return fetchedValue ?? tooltip ?? "Pole tekstowe";

    }

    function isNull() {

        return _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, false) === null;

    }


    return (

        <input type="text" class="form-control form-control-sm text-nowrap" disabled={isNull()} placeholder={getPlaceholder()} onChange={changeHandler} value={getValue()}/>

    );


}
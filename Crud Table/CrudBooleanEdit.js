import React from 'react';


export default function CrudBooleanEdit(props) {

    function clickHandler(value) {


        var modelValue = _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, null);

        if (modelValue !== null && modelValue === value) {

            props.setState(props.modelAssoc, _.omit(

                _.get(props.state, props.modelAssoc, {})

                , props.field.assoc));


        } else {

            props.setState(`${props.modelAssoc}.${props.field.assoc}`, value);

        }

    }

    function getValue() {

        var modelValue = _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, null);

        return modelValue;

    }
    
    function isNull() {

        return _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, false) === null;

    }

    return (

        <>

            <div class="btn-group btn-group-sm">

                <button type="button" disabled={props.disabled || isNull()} onClick={() => { clickHandler(false) }} className={`btn ${getValue() === false ? "btn-danger" : "btn-outline-danger"}`}>Nie</button>
                <button type="button" disabled={props.disabled || isNull()} onClick={() => { clickHandler(true) }} className={`btn ${getValue() === true ? "btn-success" : "btn-outline-success"}`}>Tak</button>

            </div>

        </>
    );


}
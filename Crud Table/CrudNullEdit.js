import React from 'react';

export default function CrudNullEdit(props) {


    function isNull() {

        return _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, false) === null;

    }

    function clickHandler() {

        if (isNull()) {

            props.setState(props.modelAssoc, _.omit(

                _.get(props.state, props.modelAssoc, {})

                , props.field.assoc));

        } else {

            props.setState(`${props.modelAssoc}.${props.field.assoc}`, null);

        }


    }


    return (


        <button className={`btn btn-sm text-nowrap ${isNull() ? "btn-danger" : "btn-outline-danger"}`} onClick={clickHandler}>Brak wartości</button>

    );


}
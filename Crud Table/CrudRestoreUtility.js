import React from 'react';

export default function CrudRestoreUtility(props){


    function isDisabled(){

        return props.disabled;

    }

    function clickHandler(){

        props.functions.onClick();

    }

    return(

        <button class="btn btn-sm btn-primary" disabled={isDisabled()} onClick={clickHandler}>Przywróć</button>

    );


}
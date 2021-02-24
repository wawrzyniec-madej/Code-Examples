import React from 'react';

export default function CrudButtonUtility(props){

    function clickHandler(){

        props.mappedObject.functions.onClick();

    }

    function isDisabled(){

        return props.disabled || props.mappedObject.options.disabled;

    }

    return(

        <button type="button" class="btn btn-sm btn-primary text-capitalize" onClick={clickHandler} disabled={isDisabled()}>{props.utility.name}</button>

    );

}
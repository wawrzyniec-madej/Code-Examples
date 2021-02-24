import React from 'react';

export default function CrudLinkUtility(props){

    function isDisabled(){

        return props.disabled || props.mappedObject.options.disabled;

    }

    

    return(

        <a href={`${props.utility.url}${props.mappedObject.options.slug}`} className={`btn btn-sm btn-success text-capitalize ${isDisabled() ? "disabled" : ""}`}>{props.utility.name}</a>

    );

}
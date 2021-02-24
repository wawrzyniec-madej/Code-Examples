import React from 'react';


export default function CrudGoUtility(props) {


    console.error(props);


    return (

        <a href={props.utility.options.slug+`/${props.data.id.value}` } type="button" class="btn btn-sm btn-outline-primary">

            {props.mappedObject.options.icon}

        </a>

    );


}
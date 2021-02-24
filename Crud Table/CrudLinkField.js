import React from 'react';

export default function CrudLinkField(props){

    return(

        <a href={`${props.field.options.url}/${props.data.data.id}`} class="btn btn-sm btn-outline-primary text-capitalize text-nowrap">

            <div class="row flex-nowrap gx-2">

                <div class="col overflow-hidden">{props.data.value.substr(0,10)}</div>
                <div class="col-auto"><i class="fas fa-external-link-alt"></i></div>

            </div>


        </a>

    );

}
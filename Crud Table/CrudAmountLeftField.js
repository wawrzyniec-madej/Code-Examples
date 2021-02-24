import React from 'react';


export default function CrudAmountLeftField(props){


    return(

        <span class="text-nowrap">

            {props.data.value === 0 ? "Spłacono" : props.data.value > 0 ? "Do spłaty" : "Nadpłata"}

        </span>

    );

}
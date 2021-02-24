import React from 'react';


export default function CrudMoneyField(props){


    console.log(props.data);

    return(

        <span class="text-nowrap">{props.data.value}%</span>

    );

}
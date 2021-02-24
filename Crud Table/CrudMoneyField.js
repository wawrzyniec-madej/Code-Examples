import React from 'react';


export default function CrudMoneyField(props){


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
    }

    return(

        <span class="text-nowrap">{numberWithCommas(props.data.value)} zł</span>

    );

}
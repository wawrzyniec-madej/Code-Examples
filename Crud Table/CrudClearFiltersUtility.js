import React from 'react';

export default function CrudClearFiltersUtility(props){

    function filterClickHandler(){

        props.mappedObject.functions.onFilterClick();

    }

    function sortClickHandler(){

        props.mappedObject.functions.onSortClick();

    }


    return(

        <div class="btn-group btn-group-sm">

            <button class="btn btn-outline-danger" disabled={props.disabled} onClick={filterClickHandler}>filtry</button>
            <button class="btn btn-outline-danger" disabled={props.disabled} onClick={sortClickHandler}>sortowania</button>
            <div class="btn btn-danger disabled"><i class="fas fa-trash-alt"></i></div>


        </div>

    );


}
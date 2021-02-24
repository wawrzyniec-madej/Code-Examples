import React from 'react';

export default function CrudRefreshUtility(props) {


    function clickHandler() {

        props.mappedObject.functions.onClick();

    }

    function isDisabled() {

        return props.disabled;

    }


    return (

        <button class="btn btn-sm btn-outline-primary" onClick={clickHandler} disabled={isDisabled()}>

            {isDisabled() ? <i class="fas fa-sync-alt spin"></i> : <i class="fas fa-sync-alt"></i>}

        </button>


    );


}
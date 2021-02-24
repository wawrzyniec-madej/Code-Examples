import React from 'react';


export default function CrudSettingsUtility(props){


    function isDisabled() {

        return props.disabled;

    }


    return(

        <button disabled={isDisabled()} class="btn btn-sm btn-outline-primary"><i class="fas fa-cog"></i></button>

    );


}
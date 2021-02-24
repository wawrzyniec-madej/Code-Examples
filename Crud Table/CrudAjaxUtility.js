import axios from 'axios';
import React, { useState } from 'react';

export default function CrudAjaxUtility(props) {

    const [loading, setLoading] = useState(false);

    function isDisabled() {

        return props.disabled || loading || props.mappedObject.options.disabled;

    }

    function clickHandler(){

        setLoading(true);
        props.mappedObject.functions.onClick();


        axios.post(props.utility.postUrl, props.mappedObject.functions.requestFormat(1,props.model))
        .then((response)=>{

            setLoading(false);
            props.mappedObject.functions.onSuccess(response.data);

        })
        .catch((error)=>{

            setLoading(false);
            props.mappedObject.functions.onFailure();

        });

    }


    return (

        <button class="btn btn-sm btn-success text-capitalize" disabled={isDisabled()} onClick={clickHandler}>

            <div class="row gx-2 align-middle">

                <div class="col">{loading ? props.utility.nameLoading : props.utility.name}</div>

                {loading ? (

                    <div class="col-auto"><i class="fas fa-sync-alt fa-sm spin"></i></div>

                ) : null}


            </div>

        </button>

    );

}
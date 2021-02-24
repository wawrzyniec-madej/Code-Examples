import React, { useEffect, useState } from 'react';

export default function CrudSaveUtility(props) {


    const [loading, setLoading] = useState(false);

    function isDisabled() {

        return props.disabled || loading;

    }

    function clickHandler() {

        setLoading(true);

    }



    return (

        <button class="btn btn-sm btn-success" disabled={isDisabled()} onClick={clickHandler}>

            <div class="row gx-2 align-middle">

                <div class="col">{loading ? "Zapisuję" : "Zapisz"}</div>

                {loading ? (

                    <div class="col-auto"><i class="fas fa-sync-alt fa-sm spin"></i></div>

                ) : null}


            </div>

        </button>

    );



}
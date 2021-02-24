import Axios from 'axios';
import React, { useState } from 'react';


/**
 * Designed to be used with CrudTable
 * Uses mapped functions and options from CrudTable
 * @param {*} props
 * @author Lawrence Madej
 */

export default function CrudDeleteUtility(props) {

    console.log(props);

    const [loading, setLoading] = useState(false);

    function getId() {

        return _.get(props.data,"id.value",null) ?? _.get(props.mappedObject,"options.id");

    }

    function clickHandler() {

        setLoading(true);
        props.mappedObject.functions.onClick();
        Axios.post(`/api/crud/delete/${props.options.entity}/${getId()}`)
            .then((response) => {

                props.mappedObject.functions.onSuccess();
                setLoading(false);

            })
            .catch((error) => {

                props.mappedObject.functions.onFailure();
                setLoading(false);

            })

    }

    function isDisabled(){

        return props.mappedObject.options.disabled || loading;

    }


    return (

        <button class="btn btn-sm btn-outline-danger" disabled={isDisabled()} onClick={clickHandler}>

            {loading ? (

                <i class="fas fa-sync-alt spin"></i>

            ) : (

                    <i class="fas fa-trash-alt"></i>

                )}

        </button>

    );


}
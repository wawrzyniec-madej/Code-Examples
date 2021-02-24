import React from 'react';

export default function CrudBooleanField(props){

    return(

        <div className={`btn btn-sm disabled ${props.data.value ? "btn-success" : "btn-danger"}`}>

            {props.data.value ? "Tak" : "Nie"}

        </div>

    );


}
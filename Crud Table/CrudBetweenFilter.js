import React, { useEffect, useRef, useState } from 'react';

export default function CrudBetweenFilter(props) {

    const [reloadCounter, setReloadCounter] = useState(0);

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    function changeHandler(e, which) {

        var parsedValue = parseFloat(e.target.value);

        if (which === "from") {

            setFrom( isNaN(parsedValue) ? null : parsedValue );

        } else {

            setTo( isNaN(parsedValue) ? null : parsedValue );

        }

        setReloadCounter(reloadCounter+1);


    }

    useEffect(()=>{

        if(from !== null && to !== null){
            
            props.setState(`dataFilters.between.${props.field.assoc}`, [from,to]);

        }else{

            clearStateEntry();

        }

    },[reloadCounter]);

    function clearStateEntry(){

        props.setState("dataFilters.between", _.omit(

            _.get(props.state, "dataFilters.between", {})

            , props.field.assoc));

    }



    return (

        <div class="row gx-2 align-items-center">

            <div class="col">
                <input type="number" class="form-control form-control-sm" placeholder="od" value={from} onChange={(e) => { changeHandler(e, "from") }} />
            </div>

            <div class="col-auto"><i class="fas fa-angle-right text-muted"></i></div>

            <div class="col">
                <input type="number" class="form-control form-control-sm" placeholder="do" value={to} onChange={(e) => { changeHandler(e, "to") }} />
            </div>

        </div>
    );


}
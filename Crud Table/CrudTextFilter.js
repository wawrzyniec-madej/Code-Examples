import React, { useRef, useState } from 'react';

export default function CrudTextFilter(props) {


    const inputRef = useRef(null);

    const modes = [

        {label:"wynosi",assoc:"equals"},
        {label:"zawiera",assoc:"like"},

    ];

    const[currentMode,setCurrentMode] = useState(getCurrentMode());

    function changeMode(mode){

        
        props.clearFilter(currentMode.assoc);
        setCurrentMode(mode);
        changeValue(mode.assoc,inputRef.current.value);

    }


    function getCurrentMode(){


        var result = modes[0];

        var dataFilters = _.get(props.state,"dataFilters",{});

        _.forEach(dataFilters,(aValue,aKey)=>{

            _.forEach(aValue,(bValue,bKey)=>{

                if(bKey === props.field.assoc){

                    result = _.find(modes,(mode)=>{

                        return mode.assoc === aKey;

                    });

                }

            });

        });

        return result;

    }

    function onChangeHandler(e){

        changeValue(currentMode.assoc,e.target.value);

    }


    function changeValue(mode,value){

        if(value.length > 0){

            props.setFilter(mode,value);

        }else{

            props.clearFilter(mode);

        }

    }

    return (
        <>
            <div class="btn-group w-100 mb-3">

                {modes.map((mode)=>{return(
                    <button type="button" onClick={()=>{changeMode(mode)}} className={`btn btn-sm btn-outline-primary text-capitalize ${mode.label === currentMode.label ? "active" : ""}`}>{mode.label}</button>
                )})}

            </div>

            <div>
                <input type="text" value={props.getCurrentFilterValue()} ref={inputRef} onChange={onChangeHandler} class="form-control" id="exampleFormControlInput1" placeholder={`${props.field.name} ${currentMode.label}`}/>
            </div>
        </>
    );


}
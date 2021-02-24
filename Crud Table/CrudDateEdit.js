import React from 'react';
import ReactDatePicker, { registerLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from 'date-fns/locale/pl';
import moment from 'moment';

export default function CrudDateEdit(props){

    registerLocale("pl",pl);



    function getValue(){

        var modelValue = _.get(props.state,`${props.modelAssoc}.${props.field.assoc}`,null);

        return modelValue ?

            moment(modelValue,"DD.MM.YYYY",true).toDate()

        : null;

    }

    function changeHandler(date){

        var modelValue = _.get(props.state,`${props.modelAssoc}.${props.field.assoc}`,null);
        var date = moment(date).format("DD.MM.YYYY");

        if(modelValue && modelValue == date){

            props.setState(props.modelAssoc, _.omit(

                _.get(props.state, props.modelAssoc, {})

                , props.field.assoc));


        }else{

            props.setState(`${props.modelAssoc}.${props.field.assoc}`, date);

        }


    }

    function isValue(){

        var modelValue = _.get(props.state,`${props.modelAssoc}.${props.field.assoc}`,null);

        return modelValue ? true : false;


    }


    function isNull() {

        return _.get(props.state, `${props.modelAssoc}.${props.field.assoc}`, false) === null;

    }

    return(

        <ReactDatePicker
        
        locale="pl"

        customInput={<CustomInput/>}

        selected={getValue()}

        onSelect={changeHandler}
        
        dateFormat={"dd.MM.Y"}

        value={isValue() ? null : "Wybierz datę"}

        disabled={isNull()}
        
        />
        
    );


}

function CustomInput(props){return(

    <button className={`btn btn-sm text-nowrap ${props.value.length > 0 ? "btn-outline-primary" : "btn-outline-secondary"}`} disabled={props.disabled} onClick={props.onClick}>

        <div class="row gx-2">

            <div class="col">{props.value}</div>
            <div class="col-auto">

                <i class="far fa-calendar-alt"></i>

            </div>

        </div>


    </button>

)}
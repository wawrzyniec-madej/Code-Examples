import React, { useEffect, useReducer } from 'react';
import _ from 'lodash';
import CrudLoading from './CrudLoading';
import CrudNullEdit from '../../CrudNullEdit';

export default function CrudCreate(props) {

    const initialState = _.merge({

        dataModel: {},
        loading: false,

    }, props.initialState);


    function reducer(state, action) {

        let newState = { ...state };

        switch (action.type) {


            case 'set':

                _.set(newState, action.path, action.value);

                break;

            case 'merge':

                _.merge(newState, action.state);

                break;

            case 'reset':

                newState = initialState;

                break;

                case 'default':

                    _.set(newState,action.path,_.get(initialState,action.path));
    
                    break;

        }

        return newState;


    }

    const [state, dispatch] = useReducer(reducer, initialState);


    function setState(path, value) {
        dispatch({ type: "set", path: path, value: value });
    }

    function mergeState(state) {
        dispatch({ type: "merge", state: state });
    }

    function resetState() {

        dispatch({ type: "reset" });

    }

    function defaultState(path) {
    
        dispatch({ type: "default", path: path });

    }


    useEffect(() => {

        console.log(state);

    });



    function areAllFieldsFilled(){

        var fieldsAssoc = props.fields.map((requiredField)=>{

            return requiredField.assoc;

        });

        var filledModelFieldAssoc = Object.keys(state.dataModel);

        return _.every(fieldsAssoc,(fieldAssoc)=>{

            return _.includes(filledModelFieldAssoc,fieldAssoc);

        })

    }


    function isModelDifferentFromInitial(){

        return !_.isMatch(initialState.dataModel,state.dataModel);

    }



    const utilitiesObjectMaps = {

        create: {

            functions:{

                onSuccess: (responseData)=>{

                    setState("loading",false);

                    if(props.options.redirectUrl){

                        if(_.get(props.options,"redirectToList",false)){

                            window.location.replace(`${props.options.redirectUrl}`);

                        }else{

                            window.location.replace(`${props.options.redirectUrl}/${responseData.createdId}`);

                        }
                        
                    }else{

                        window.location.reload();

                    }

    
                },
                onFailure: ()=>{ setState("loading",false) },
                onClick: ()=>{ setState("loading",true) },

                requestFormat: ($id,$data)=>{

                    return {

                        id:$id,
                        data:$data

                    };

                } 

            },

            options: {

                disabled: !areAllFieldsFilled()

            }


        },

        restore: {

            functions:{

                onClick: () => {

                    defaultState("dataModel");

                }

            },
            
            options: {

                disabled: !isModelDifferentFromInitial()

            }


        },

        showAll: {

            functions:{},
            
            options: {

                slug: ""

            }


        },

    };


    function getUtilityMappedObject(map) {

        return _.get(utilitiesObjectMaps, map, null);

    }


    return (


        <div class="card shadow-sm">

            <div class="card-header">

                <span class="fw-bold">{props.options.label}</span>

            </div>


            <ul class="list-group list-group-flush">

                <li class="list-group-item">

                    <div class="row gx-2">

                        <div class="col"></div>

                        {_.get(props, "utilities.top", []).map((utility, utilityIndex) => {
                            return (

                                <div class="col-auto">
                                    <utility.init model={state.dataModel} utility={utility} disabled={state.loading} options={props.options} mappedObject={getUtilityMappedObject(utility.map)}/>
                                </div>

                            )
                        })}


                    </div>

                </li>

                {state.loading ? (

                    <CrudLoading />

                ) : (


                        <li class="list-group-item py-3">

                            <table class="table mb-0 table-bordered">
                                <tbody>

                                    {props.fields.map((field, fieldIndex) => {
                                        return (

                                            <tr class="align-middle">
                                                <th scope="row" class="table-light w-50">{field.name}</th>
                                                <td>

                                                    <div class="row gx-2 align-items-center">

                                                        <div class="col">

                                                            <field.init modelAssoc="dataModel" modelFetched="dataFetched" setState={setState} state={state} field={field} />

                                                        </div>

                                                        {(field.options && field.options.nullable) ? (

                                                            <div class="col-auto">

                                                                <CrudNullEdit modelAssoc="dataModel" modelFetched="dataFetched" setState={setState} state={state} field={field} />

                                                            </div>

                                                        ) : null}


                                                    </div>

                                                </td>
                                            </tr>

                                        )
                                    })}

                                </tbody>
                            </table>

                        </li>

                    )}



            </ul>


        </div >

    );

}
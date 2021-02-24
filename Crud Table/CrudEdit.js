import axios from 'axios';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import CrudNullEdit from './CrudNullEdit';
import CrudLoading from './react/crud/CrudLoading';
import CrudNotFound from './react/crud/CrudNotFound';


export default function CrudEdit(props) {


    const initialState = {

        dataFetched: {},
        dataModel: {},
        loading: true,
        reloadCounter: 0

    };


    function reducer(state, action) {

        let newState = { ...state };

        switch (action.type) {
            case 'set':

                _.set(newState, action.path, action.value);

                break;

            case 'default':

                _.set(newState, action.path, _.get(initialState, action.path));

                break;
        }

        return newState;
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    function defaultState(path) {

        dispatch({ type: "default", path: path });

    }


    function setState(path, value) {
        dispatch({ type: "set", path: path, value: value });
    }


    useEffect(() => {

        setState('loading', true);
        axios.post(props.options.getUrl, {

            "criteria":{

                "equals":{

                    "id":props.id

                }


            }

        })
            .then((response) => {

                console.log(response);

                setState('dataFetched', response.data.results);
                setState('loading', false);

            })
            .catch((error) => {

                console.error("ajax failed");

            });

    }, [state.reloadCounter]);

    useEffect(() => {

        console.log(state);

    });


    function isModelDifferentFromInitial() {

        return !_.isMatch(initialState.dataModel, state.dataModel);

    }

    function isFetchedDataFilled() {

        return _.get(state, "dataFetched", []).length > 0;

    }



    const utilitiesObjectMaps = {

        save: {

            functions: {

                onSuccess: (responseData) => {

                    defaultState("dataModel");
                    setState("reloadCounter", state.reloadCounter + 1);

                },
                onFailure: () => { setState("loading", false) },
                onClick: () => { setState("loading", true) },

                requestFormat: ($id, $data) => {

                    return {

                        id: props.id,
                        data: $data

                    };

                }

            },

            options: {

                disabled: !isModelDifferentFromInitial() || !isFetchedDataFilled()

            }


        },

        restore: {

            functions: {

                onClick: () => {

                    defaultState("dataModel");

                }

            },

            options: {

                disabled: !isModelDifferentFromInitial() || !isFetchedDataFilled()

            }


        },

        showAll: {

            functions: {},

            options: {

                slug: ""

            }


        },

        show: {

            functions: {},

            options: {

                slug: `/${props.id}`,
                disabled: !isFetchedDataFilled()

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
                                    <utility.init model={state.dataModel} utility={utility} disabled={state.loading} options={props.options} mappedObject={getUtilityMappedObject(utility.map)} />
                                </div>

                            )
                        })}


                    </div>

                </li>

                {state.loading ? (

                    <CrudLoading />

                ) : (

                        <>
                            {isFetchedDataFilled() ? (

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

                                                                    <field.init modelAssoc="dataModel" modelFetched="dataFetched[0]" setState={setState} state={state} field={field} />

                                                                </div>

                                                                {(field.options && field.options.nullable) ? (

                                                                    <div class="col-auto">

                                                                        <CrudNullEdit modelAssoc="dataModel" modelFetched="dataFetched[0]" setState={setState} state={state} field={field} />

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

                            ) : <CrudNotFound label={props.options.label} />}
                        </>

                    )}



            </ul>


        </div >

    );

}
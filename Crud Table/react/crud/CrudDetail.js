import React, { useEffect, useReducer } from 'react';
import _ from 'lodash';
import CrudLoading from './CrudLoading';
import CrudNotFound from './CrudNotFound';
import CrudNullEdit from '../../CrudNullEdit';
import Axios from 'axios';

export default function CrudDetail(props) {

    const initialState = _.merge({

        dataModel: {},
        loading: true,
        reloadCounter: 0,
        dataFetched: [],

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


    useEffect(() => {

        console.log(state);

    });


    const utilitiesObjectMaps = {

        showAll: {

            functions: {},
            options: {

                slug: ""

            }

        },
        restore: {

            functions: {

                onClick: () => { resetState() }

            },

            options: {}


        },

        delete: {

            functions: {

                onClick: ()=>{

                    setState("loading",true);

                },

                onSuccess: ()=>{

                    setState("reloadCounter",state.reloadCounter+1);

                },

                onFailure: ()=>{

                    console.log("Błąd w CrudDetail - delete");
                    setState("loading",false);

                },

            },

            options: {

                disabled: state.loading,
                id: props.id

            }


        },

        settlements: {

            functions: {},
            options: {

                slug: `/${props.id}`

            }

        },
        refresh: {

            functions: {

                onClick: () => { setState("reloadCounter", state.reloadCounter + 1) }

            },

            options: {}


        },

        annex: {

            functions: {},

            options: {

                slug: "",
                disabled: !isFetchedDataFilled()

            }


        },

        edit: {

            functions: {},

            options: {

                slug: `/${_.get(state.dataFetched[0], "id.value", "")}`,
                disabled: !isFetchedDataFilled()

            }


        }

    };

    function getUtilityMappedObject(map) {

        return _.find(utilitiesObjectMaps,(value,key)=>{

            return key === map;

        });

    }

    function getAssociatedFieldData(dataIndex, fieldAssoc) {

        return _.get(state.dataFetched[dataIndex], fieldAssoc, null);

    }

    function isAssociatedFieldData(dataIndex, fieldAssoc) {

        return _.get(state.dataFetched[dataIndex], fieldAssoc, null) !== null;

    }

    function isFetchedDataFilled() {

        return _.get(state, "dataFetched", []).length > 0;

    }


    useEffect(() => {

        setState("loading", true);


        Axios.post(`${props.options.getUrl}`,{

            "criteria":{

                "equals":{

                    "id":props.id

                }


            }

        })
            .then((response) => {

                setState("dataFetched", response.data.results);
                setState("loading", false);

            })
            .catch((error) => {

                console.error("Błąd w CrudTable, ajax zwrócił bład: ", error);

            })

    }, [state.reloadCounter]);

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

                                                        {isAssociatedFieldData(0, field.assoc) ? (
                                                            <td>

                                                                <field.init data={getAssociatedFieldData(0, field.assoc)} field={field} />

                                                            </td>
                                                        ) : (

                                                                <td className="text-muted">Brak</td>

                                                            )}
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

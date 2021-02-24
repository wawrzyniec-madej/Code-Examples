import Axios from 'axios';
import { isNull } from 'lodash';
import React, { useEffect, useReducer } from 'react';
import CrudFilter from './CrudFilter';
import CrudLoading from './react/crud/CrudLoading';

export default function CrudTable(props) {

    const initialState = _.merge({

        loading: true,
        dataFilters: {},
        dataSort: {},
        reloadCounter: 0,
        dataFetched: [],
        currentPage: 1,
        totalPages: 0,
        totalResults: 0,

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

    function getAssociatedFieldData(dataIndex, fieldAssoc) {

        return _.get(state.dataFetched[dataIndex], fieldAssoc, null);

    }

    function isAssociatedFieldData(dataIndex, fieldAssoc) {

        return _.get(state.dataFetched[dataIndex], fieldAssoc, null) !== null;

    }

    function refetchData() {

        setState("reloadCounter", state.reloadCounter + 1);

    }

    function isLoading(){

        return state.loading;

    }

    const utilitiesObjectMaps = {

        create: {

            functions: {},

            options: {

                slug: ""

            }


        },

        repay: {

            options: {},
            functions: {

                onSuccess: () => {

                    refetchData();

                },

                onError: () => {

                    console.log("error!");

                }


            }

        },

        detail: {

            options: {

                icon:<i class="fas fa-arrow-right"></i>,

            },
            functions: {}


        },

        settings:{

            options: {},
            functions: {}

        },

        edit: {

            options: {

                icon:<i class="fas fa-pencil-alt"></i>,

            },
            functions: {}


        },

        refresh: {

            functions: {

                onClick: () => { refetchData() }

            },

            options: {}


        },

        clearFilters: {

            functions: {

                onFilterClick: clearFilters,
                onSortClick: clearSort

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

                    console.error("Błąd w CrudTable - delete");

                },

            },

            options: {}


        }

    };



    function getUtilityMappedObject(map) {

        return _.find(utilitiesObjectMaps,(value,key)=>{

            return key === map;

        });

    }

    function isFilterSetActive(filterSet) {

        return _.isMatch(state.dataFilters, filterSet.dataFilters);

    }

    function toggleFilterSet(filterSet) {

        if (isFilterSetActive(filterSet)) {

            setState("dataFilters",

                _.omit(
                    _.get(state, "dataFilters", {}),
                    Object.keys(filterSet.dataFilters)
                )

            )

        } else {


            setState("dataFilters",

                _.merge(
                    _.get(state, "dataFilters", {}),
                    filterSet.dataFilters
                )

            );


        }

        refetchData();



    }

    function clearFilters() {

        setState("dataFilters", {});
        refetchData();

    }


    function clearSort() {

        setState("dataSort", {});
        refetchData();

    }


    useEffect(() => {

        console.log(state);

    });

    useEffect(() => {

        setState("loading", true);

        Axios.post(`/api/crud/read/${props.options.entity}`, {

            "page": state.currentPage,
            "criteria": { ...state.dataFilters },
            "sort": { ...state.dataSort }

        })
            .then((response) => {

                setState("dataFetched", response.data.results);
                setState("totalResults", response.data.totalResults);
                setState("totalPages", response.data.totalPages);
                setState("loading", false);

            })
            .catch((error) => {

                console.error("Błąd w CrudTable, ajax zwrócił bład: ", error);

            })

    }, [state.reloadCounter]);

    function setPage(number) {

        if (number > 0 && number <= state.totalPages) {

            setState("currentPage", number);
            refetchData();

        }

    }



    return (


        <div class="card shadow-sm">

            <div class="card-header">

                <span class="fw-bold">{props.options.label}</span>

            </div>


            <ul class="list-group list-group-flush">

                {_.get(props.options, "header", true) ? (

                    <li class="list-group-item">

                        <div class="row gx-2">

                            <div class="col">

                                <div class="btn-group">

                                    {props.filterSets.map((filterSet, filterSetIndex) => {
                                        return (

                                            <button className={`btn btn-sm ${isFilterSetActive(filterSet) ? "btn-primary" : "btn-outline-primary"}`} disabled={state.loading} onClick={() => { toggleFilterSet(filterSet) }}>{filterSet.name}</button>

                                        )
                                    })}

                                </div>


                            </div>

                            {_.get(props, "utilities.top", []).map((utility, utilityIndex) => {
                                return (

                                    <div class="col-auto">
                                        <utility.init model={state.dataFilters} utility={utility} disabled={state.loading} options={props.options} mappedObject={getUtilityMappedObject(utility.map)} />
                                    </div>

                                )
                            })}


                        </div>


                    </li>

                ) : null}

                {!state.loading ? (
                    <>

                        {state.dataFetched.length > 0 ? (

                            <li className={`list-group-item mx-3 p-0 mb-3 mt-1`}>
                                <div className={ _.get(state.options,"small",false) ? "table-responsive" : ""}>
                                    <table class="table mb-0">


                                        <thead>
                                            <tr>
                                                {props.fields.map((field, fieldIndex) => {
                                                    return (

                                                        <td scope="col" className={`text-nowrap ${fieldIndex === 0 ? "ps-0" : ""} ${(fieldIndex === props.fields.length - 1 && _.get(props, "utilities.bottom", []).length === 0) ? "pe-0" : ""}`}>

                                                            { _.get(field, "filter", false) || _.get(field, "sort", false) ? (

                                                                <CrudFilter field={field} filter={field.filter} state={state} setState={setState} refetchData={refetchData} />

                                                            ) : (

                                                                    <button disabled={true} class="btn btn-sm btn-outline-secondary">{field.name}</button>

                                                                )}

                                                        </td>

                                                    )
                                                })}

                                                {_.get(props, "utilities.bottom", []).length > 0 ? (

                                                    <td scope="col" class="pe-0" style={{ width: "0.1%" }}></td>

                                                ) : null}


                                            </tr>
                                        </thead>


                                        <tbody>

                                            {state.dataFetched.map((data, dataIndex) => {
                                                return (

                                                    <tr class="align-middle">

                                                        {props.fields.map((field, fieldIndex) => {
                                                            return isAssociatedFieldData(dataIndex, field.assoc) ? (

                                                                <td className={`${fieldIndex === 0 ? "ps-0" : ""} ${(fieldIndex === props.fields.length - 1 && _.get(props, "utilities.bottom", []).length === 0) ? "pe-0" : ""}`}>
                                                                    <field.init data={getAssociatedFieldData(dataIndex, field.assoc)} field={field} />
                                                                </td>

                                                            ) : (

                                                                    <td className={`${fieldIndex === 0 ? "ps-0" : ""} ${(fieldIndex === props.fields.length - 1 && _.get(props, "utilities.bottom", []).length === 0) ? "pe-0" : ""} text-muted`}>Brak</td>

                                                                );
                                                        })}


                                                        {_.get(props, "utilities.bottom", []).length > 0 ? (

                                                            <td class="pe-0">
                                                                <div class="row gx-1 justify-content-end flex-nowrap">

                                                                    {_.get(props, "utilities.bottom", []).map((utility, utilityIndex) => {
                                                                        return (

                                                                            <div class="col-auto">

                                                                                <utility.init data={data} model={state.dataFilters} utility={utility} disabled={state.loading} options={props.options} mappedObject={getUtilityMappedObject(utility.map)} />

                                                                            </div>

                                                                        )
                                                                    })}
                                                                </div>
                                                            </td>

                                                        ) : null}

                                                    </tr>

                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>

                            </li>

                        ) : (

                                <li class="list-group-item">

                                    <div class="py-5 d-flex align-items-center justify-content-center flex-column">

                                        <h5 class="fw-bold">Brak wyników</h5>
                                        <h6>dla podanych kryteriów wyszukiwania</h6>

                                    </div>

                                </li>

                            )}
                    </>
                ) : (

                        <CrudLoading />

                    )}

            </ul>

            {!state.loading && _.get(props.options, "footer", true) ? (

                <div class="card-footer">

                    <div class="row gx-2 align-items-center">

                        <div class="col">

                            <mark class="fw-bold">{state.totalResults}</mark> wyników na <mark class="fw-bold">{state.totalPages}</mark> stronach

                    </div>
                        <div class="col-auto">

                            <div class="btn-group">

                                <button class="btn btn-sm btn-primary" disabled={state.currentPage === 1} onClick={() => { setPage(1) }}><i class="fas fa-angle-double-left"></i></button>
                                <button class="btn btn-sm btn-primary" disabled={state.currentPage === 1} onClick={() => { setPage(state.currentPage - 1) }}><i class="fas fa-angle-left"></i></button>
                                <button class="btn btn-sm btn-primary disabled">{state.currentPage}/{state.totalPages}</button>
                                <button class="btn btn-sm btn-primary" disabled={state.currentPage >= state.totalPages} onClick={() => { setPage(state.currentPage + 1) }}><i class="fas fa-angle-right"></i></button>
                                <button class="btn btn-sm btn-primary" disabled={state.currentPage === state.totalPages || state.totalPages === 0} onClick={() => { setPage(state.totalPages) }}><i class="fas fa-angle-double-right"></i></button>

                            </div>



                        </div>

                    </div>

                </div>

            ) : null}


        </div >

    );


}

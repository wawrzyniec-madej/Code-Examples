import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import Select from 'react-select';

export default function CrudFilter(props) {


    const uniqueId = _.uniqueId("filter-");


    const [modal, setModal] = useState(null);
    const modalRef = useRef(null);




    function getCurrentFilterValue() {

        var result = null;

        var dataFilters = _.get(props.state, "dataFilters", {});

        _.forEach(dataFilters, (aValue, aKey) => {

            _.forEach(aValue, (bValue, bKey) => {

                if (bKey === props.field.assoc) {

                    result = bValue;

                }

            });

        });

        return result;

    }

    function setFilter(mode, value) {


        props.setState(`dataFilters.${mode}.${props.field.assoc}`, value);

    }

    function clearFilter(mode) {

        props.setState(`dataFilters.${mode}`, _.omit(

            _.get(props.state, `dataFilters.${mode}`, {})

            , props.field.assoc));

    }


    useEffect(() => {

        setModal(new Modal(modalRef.current));

    }, []);

    function toggleModal() {

        modal.toggle();

    }

    function applyChanges(){

        toggleModal();
        props.refetchData();

    }




    //<props.filter.init field={props.field} filter={props.filter} state={props.state} setState={props.setState}/>

    function getSort() {

        return _.get(props.state, `dataSort.${props.field.assoc}`, null);

    }

    function toggleSort(sortName) {

        if (getSort() === sortName) {

            clearSort();

        } else {

            props.setState(`dataSort.${props.field.assoc}`, sortName);

        }

    }

    function clearSort() {

        props.setState(`dataSort`, _.omit(

            _.get(props.state, `dataSort`, {})

            , props.field.assoc));

    }



    const filterBundle = {

        field: props.field,
        state: props.state,
        setState: props.setState,
        getCurrentFilterValue: getCurrentFilterValue,
        clearFilter: clearFilter,
        setFilter: setFilter

    };


    return (

        <>

            <button type="button" className={`btn btn-outline-success btn-sm`} onClick={toggleModal}>

                <div class="row gx-1">

                    <div class="col">

                        {getCurrentFilterValue() !== null ? (

                        <span class="fw-bold">"{getCurrentFilterValue()}"</span>

                        ) : (

                        <span>{props.field.name}</span>

                        )}

                    </div>

                    {getSort() ? (
                        <div class="col-auto d-flex align-items-center">

                            { getSort() === "asc" ? (

                                <i class="fas fa-caret-up"></i>

                            ) : getSort() === "desc" ? (

                                <i class="fas fa-caret-down"></i>

                            ) : null}

                        </div>
                    ) : null}

                </div>

            </button>

            <div class="modal fade" tabindex="-1" ref={modalRef}>
                <div class="modal-dialog  modal-dialog-centered modal-sm">
                    <div class="modal-content">

                        <div class="modal-header text-center">
                            Ustawienia pola {props.field.name}
                        </div>

                        <div class="modal-body">
                            <div>

                                {props.field.sort ? (
                                <>
                                <div class="mb-3">

                                    <span class="text-muted">Sortowanie</span>

                                </div>

                                <div class="btn-group w-100 mb-3">

                                    <button type="button" className={`btn ${getSort() === "asc" ? "btn-primary" : "btn-outline-primary"} btn-sm`} onClick={() => { toggleSort("asc") }}>Rosnąco</button>
                                    <button type="button" className={`btn ${getSort() === "desc" ? "btn-primary" : "btn-outline-primary"} btn-sm`} onClick={() => { toggleSort("desc") }}>Malejąco</button>

                                </div>
                                </>
                                ) : null}

                                {props.field.filter ? (
                                    <>

                                <div class="mb-3">

                                    <span class="text-muted">Filtrowanie</span>

                                </div>

                                <div class="mb-3">

                                    <props.filter.init {...filterBundle} />

                                </div>
                                </>
                                ) : null}

                            </div>
                        </div>

                        <div class="modal-footer">

                            <div class="row gx-2 w-100">

                                <div class="col">
                                    <button type="button" disabled={getCurrentFilterValue() === null && getSort() === null} class="btn btn-outline-primary btn-sm w-100" onClick={applyChanges}>Zastosuj</button>
                                </div>

                                <div class="col">
                                    <button type="button" class="btn btn-outline-secondary btn-sm w-100" onClick={toggleModal}>Zamknij</button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </>

    );


}
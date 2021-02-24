import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';

export default function CrudMultiField(props) {

    const [modal, setModal] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {

        setModal(new Modal(modalRef.current));

    }, []);

    function modalToggle() {

        modal.toggle();

    }


    return (

        <>
            <button type="button" class="btn btn-sm btn-outline-primary text-nowrap" onClick={modalToggle}>

                <div class="row flex-nowrap align-items-center gx-2">

                    <div class="col overflow-hidden">({props.data.length}) Zobacz</div>
                    <div class="col-auto"><i class="fas fa-list"></i></div>

                </div>

            </button>

            <div class="modal fade" ref={modalRef} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Lista ({props.data.length})</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <ul class="list-group list-group-flush">
                                {props.data.length > 0 ? (
                                    <>


                                        {props.data.map((data, dataIndex) => {
                                            return (

                                                <>

                                                    {_.get(props.field, "options.url", null) ? (

                                                        <a href={`${props.field.options.url}/${data.data.id}`} target="_blank" class="list-group-item list-group-item-action">
                                                            <div class="row">

                                                                <div class="col">{data.value}</div>
                                                                <div class="col-auto">

                                                                    <span class="fw-bold">{dataIndex + 1}</span>

                                                                </div>


                                                            </div>

                                                        </a>


                                                    ) : (
                                                            <li class="list-group-item">
                                                                <div class="row">

                                                                    <div class="col">{data.value}</div>
                                                                    <div class="col-auto">

                                                                        <span class="fw-bold">{dataIndex + 1}</span>

                                                                    </div>


                                                                </div>

                                                            </li>

                                                        )
                                                    }

                                                </>

                                            )
                                        })}

                                    </>

                                ) : (

                                        <li class="list-group-item">Brak wyników</li>

                                    )}

                            </ul>


                        </div>
                    </div>
                </div>
            </div>

        </>

    );


}
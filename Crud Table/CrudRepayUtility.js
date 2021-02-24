import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import Axios from 'axios';



export default function CrudRepayUtility(props) {


    const uniqueId = _.uniqueId("repay-");

    const [modal, setModal] = useState(null);
    const modalRef = useRef(null);

    const [amount, setAmount] = useState(null);

    const [repayFromExcess, setRepayFromExcess] = useState(false);

    const [sending, setSending] = useState(false);


    useEffect(() => {

        setModal(new Modal(modalRef.current));

    }, []);

    function modalToggle() {

        modal.toggle();

    }

    function changeHandler(e) {

        setAmount(e.target.value);

    }


    function switchChangeHandler(e) {

        setRepayFromExcess(e.target.checked);

    }

    function isRepayDisabled() {

        if (sending) {

            return true;

        } else {

            if (repayFromExcess) {

                return false;

            } else {

                if (amount !== null) {

                    return false;

                } else {

                    return true;

                }

            }

        }

    }

    function repayHandler() {


        var parsedAmount = parseInt(amount);

        if (!isNaN(amount)) {

            setSending(true);
            Axios.post("/api/post/repay", {

                "id": props.data.id.value,
                "data": {

                    "amount": parsedAmount,
                    "fromExcess": repayFromExcess

                }

            })
                .then((response) => {

                    setSending(false);
                    modal.hide();
                    props.mappedObject.functions.onSuccess();

                })
                .catch((error) => {

                    console.error(error);
                    props.mappedObject.functions.onError();

                })

        }


    }



    return (
        <>
            <button class="btn btn-sm btn-success" onClick={modalToggle}>Rozlicz</button>

            <div class="modal fade" ref={modalRef} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Rozliczanie</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">



                            <div class="mb-3">
                                <label for={uniqueId} class="form-label">Kwota</label>
                                <input type="number" disabled={repayFromExcess} value={amount} onChange={changeHandler} class="form-control" id={uniqueId} placeholder="kwota" />
                            </div>

                            {props.data.amountLeft.value < 0 ? (
                                <div class="form-check form-switch mb-3">
                                    <input value={repayFromExcess} onChange={switchChangeHandler} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Rozlicz z sumy nadpłat ({Math.abs(props.data.amountLeft.value)} zł)</label>
                                </div>
                            ) : (

                                    <div class="mb-3">Brak nadpłat do rozliczenia</div>

                                )}


                        </div>
                        <div class="modal-footer">

                            <button type="button" disabled={isRepayDisabled()} onClick={repayHandler} class="btn btn-success">

                                <div class="row gx-2 align-items-center">

                                    <div class="col">{sending ? "Rozliczam" : "Rozlicz"}</div>

                                    {sending ? (
                                        <div class="col-auto"><i class="fas fa-sync-alt spin"></i></div>
                                    ) : null}


                                </div>



                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}
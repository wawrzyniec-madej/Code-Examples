import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';

export default function CrudModalField(props) {

    const [modal, setModal] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {

        setModal(new Modal(modalRef.current));

    }, []);

    function modalToggle() {

        modal.toggle();

    }

    console.log(props);


    return (

        <>
            <button type="button" class="btn btn-sm btn-outline-primary text-nowrap" onClick={modalToggle}>

                <div class="row flex-nowrap align-items-center gx-2">

                    <div class="col overflow-hidden">Pokaż</div>
                    <div class="col-auto"><i class="fas fa-folder-open"></i></div>

                </div>

            </button>

            <div class="modal fade" ref={modalRef} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{props.field.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {props.data.value}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );


}
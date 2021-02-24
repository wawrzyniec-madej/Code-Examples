import React from 'react';

export default function CrudLoading(props) {

    return (

        <li class="list-group-item">

            <div class="py-5 d-flex align-items-center justify-content-center flex-column">

                <h5 class="fw-bold">Pobieram dane</h5>
                <h6 class="mb-4">proszę o chwilę cierpliwości</h6>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

            </div>

        </li>


    );

}
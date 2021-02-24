import React from 'react';

export default function CrudNotFound(props) {

    return (

        <li class="list-group-item">

            <div class="py-5 d-flex align-items-center justify-content-center flex-column">

                <h5 class="fw-bold">Nie znaleziono</h5>
                <h6 class="mb-4">obiekt nie istnieje</h6>
                <i class="fas fa-heart-broken fa-lg text-danger"></i>

            </div>

        </li>


    );

}
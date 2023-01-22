import React from 'react'
import { BsThreeDots, BsFillCheckCircleFill } from "react-icons/bs";

export default function Menu() {
    return (
            <div class="dropdown">
                <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <a className='iconcentang mb-3'><BsThreeDots /></a>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
    )
}

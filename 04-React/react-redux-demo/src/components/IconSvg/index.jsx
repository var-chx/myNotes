import React from 'react'

export default function FnComponent (props) {
    return (
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlinkHref={`#${props.type}`}></use>
            </svg>
        </div>
    )
}
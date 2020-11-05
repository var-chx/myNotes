import React from 'react'
export default function FnComponent (props) {
    console.log(props)
    return (
        <div>
            fnc
            {
                props.nav.map((item, index) => <p key={index}>{item}</p>)
            }
        </div>
    )
}
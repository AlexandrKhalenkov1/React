import React from 'react'

const Button = ({ text, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            &nbsp;{text}&nbsp;
        </button>
    )
}
export default Button;
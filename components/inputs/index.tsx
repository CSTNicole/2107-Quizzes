import {useState} from 'react';

export default function Clickbtn(props) {
    const handleClick = (event) => {
        console.log('click successful')
    }

    return (
        <div>
            <Clickbtn button
            handleClick = {handleClick} />
        </div>
    )
}
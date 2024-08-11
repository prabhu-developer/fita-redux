import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHomeData, clearHomeData, removeHomeData } from '../redux/slicers/homeSlicer';

export default function MyList() {
    const data = useSelector((state) => state.home)
    const dispatch = useDispatch()
    const inputRef = useRef();

    const handleClick = () => {
        dispatch(addHomeData(inputRef.current.value))
        inputRef.current.value = ''
    }

    const handleRemove = (currentList) => {
        dispatch(removeHomeData(currentList))
    }

    const handleClear = () => {
        dispatch(clearHomeData())
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>+</button>
            <button onClick={handleClear}>Clear</button>
            <ol>
                {
                    data.map((item, i) => (
                        <li key={i}>{item} ---  <button onClick={() => handleRemove(item)}>X</button></li>
                    ))
                }
            </ol>
        </div>
    )
}

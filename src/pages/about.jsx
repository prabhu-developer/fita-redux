import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeHomeData } from '../redux/slicers/homeSlicer'

export default function About() {
    const data = useSelector((state) => state.home)
    const dispatch = useDispatch()

    const handleRemove = (currentList) => {
        dispatch(removeHomeData(currentList))
    }

    return (
        <div>

            <Link to={'/'}>home</Link>
            About

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

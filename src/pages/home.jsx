import React from 'react'
import { Link } from 'react-router-dom'
import MyList from '../components/MyList'

export default function Home() {
    return (
        <div>
            <Link to={'/about'}>about</Link>
            <MyList />
        </div>
    )
}

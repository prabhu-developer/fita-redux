import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import { store } from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index Component={Home} />
          <Route path='/about' Component={About} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

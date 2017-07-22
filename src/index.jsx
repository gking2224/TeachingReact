/* globals document */
import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './MyComponent'

const body = document.body

const render = () => {
  ReactDOM.render(
    <div>
      <MyComponent />
    </div>
    , body)
}

render()

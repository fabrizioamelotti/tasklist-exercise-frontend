import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MainWrapper from './components/MainWrapper'
import { TaskContextProvider } from './context/TaskContext'

function App() {
  return (
    <TaskContextProvider>
      <main className='container'>
        <h1 className='text-center mb-5'>Task List Exercise - For TrueNorth</h1>
        <MainWrapper />
      </main>
    </TaskContextProvider>
  )
}

export default App

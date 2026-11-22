import { React } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AddMenuForm from './components/AddMenuForm'
import './App.css'

function App () {

  return (
    <>git 
     <BrowserRouter>
     <Route path="/add-menu" element={<AddMenuForm />} />
     </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import AddProduct from './components/AddProduct'
import './App.css'

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddProduct />} />
          <Route path="/add-menu" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App

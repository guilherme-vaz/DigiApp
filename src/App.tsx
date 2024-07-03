import { Cart } from './components/Cart/Cart.tsx'
import { DigimonList } from './components/DigimonList/DigimonList.tsx'
import { Routes, Route } from 'react-router-dom'
import { UserPage } from './components/UserPage/UserPage.tsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DigimonList />}/>
        <Route path='/cart' element={<Cart showCart={false} cart={[]} />}/>
        <Route path='/user' element={<UserPage />}/>
      </Routes>
    </>
  )
}

export default App

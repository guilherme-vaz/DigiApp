import { DigimonList } from './components/DigimonList/DigimonList.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


function App() {
  return (
    <Provider store={store}>
      <DigimonList />
    </Provider>
  )
}

export default App

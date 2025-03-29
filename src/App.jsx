import { Provider } from 'react-redux'
import Pokemon from '../components/Pokemon'
import { store } from '../components/Posts/store'
import './App.css'

function App() {



  return (
    <Provider store={store}>
    <Pokemon/>
    </Provider>
  )
}

export default App

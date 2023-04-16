import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/Router'
import { NotificationProvider } from './context/NotificationCtx'

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  )
}

export default App

import './App.css'
import { AppRouter } from './components/Router'
import { NotificationProvider } from './context/NotificationCtx'

function App() {
  return (
    <NotificationProvider>
        <AppRouter />
    </NotificationProvider>
  )
}

export default App

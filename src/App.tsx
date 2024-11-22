import * as dotenv from 'dotenv';
dotenv.config();

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@constants/router/routes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

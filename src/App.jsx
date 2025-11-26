import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router'
import CharacterPage from './pages/CharacterPage'
import CharacterDetailPage from './pages/CharacterDetailPage'
import ChatPage from './pages/ChatPage'
import HomePage from './pages/HomePage'
import RootLayout from './layouts/RootLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './routes/homepage/homepage.jsx'
import CreatePage from './routes/createPage/createPage.jsx'
import AuthPage from './routes/authPage/authPage.jsx'
import SearchPage from './routes/searchPage/searchPage.jsx'
import UserProfile from './routes/userProfile/userProfile.jsx'
import MainLayout from './routes/layouts/mainLayout.jsx'
import PostPage from './routes/postpage/postpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/pin/:id' element={<PostPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/:username' element={<UserProfile />} />
        </Route>  
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

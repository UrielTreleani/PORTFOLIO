import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseScrollSpyContextProvider from './Contexts/UseScrollSpyContext/UseScrollSpyContext.jsx'
import MenuMobileContextProvider from './Contexts/MobileMenuContext/MobileMenuContext.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UseScrollSpyContextProvider>
      <MenuMobileContextProvider>
        <App/>
      </MenuMobileContextProvider>
    </UseScrollSpyContextProvider>
  </StrictMode>,
    )

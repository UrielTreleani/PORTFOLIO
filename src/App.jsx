import { useContext } from 'react'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './Styles/global.css'
import { MenuMobileContext } from './Contexts/MobileMenuContext/MobileMenuContext'


function App() {

  const {isOpen} = useContext(MenuMobileContext)

  return (
    <div>
      <div className="app__mobile-menu">
      <MobileMenu />
      </div>
      <HomeScreen />
    </div>
  )
}

export default App

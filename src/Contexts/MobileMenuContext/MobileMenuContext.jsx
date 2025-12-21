import { createContext, useState } from "react";



export const MenuMobileContext = createContext()

const MenuMobileContextProvider = (props) =>{

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <MenuMobileContext.Provider value={{isOpen, toggleMenu}}>
            {props.children}
        </MenuMobileContext.Provider>
    )
}

export default MenuMobileContextProvider
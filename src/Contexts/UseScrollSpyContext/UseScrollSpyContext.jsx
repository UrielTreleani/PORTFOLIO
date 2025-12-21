import { createContext } from "react";
import useScrollSpy from "../../Components/useScrollSpy/useScrollSpy";


export const UseScrollSpyContext = createContext()

const UseScrollSpyContextProvider = (props) => {

    const options = { rootMargin: "-50% 0px -50% 0px" }
    const sections = ["#Inicio", "#Proyectos", "#Sobre-mí", "#Contacto"]

    const activeSection = useScrollSpy(sections, options)

    return(
        <UseScrollSpyContext.Provider value={{activeSection, sections}}>
            {props.children}
        </UseScrollSpyContext.Provider>
    )
}

export default UseScrollSpyContextProvider
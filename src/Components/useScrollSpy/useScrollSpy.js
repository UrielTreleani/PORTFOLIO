import { useEffect, useState } from "react"

export default function useScrollSpy(selectors, options) {

    const [activeId, setActiveId] = useState("")


    useEffect(() => {

        const callback = (entries) =>{
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setActiveId(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(callback, options)

        
        selectors.forEach((selector) =>{
            const section = document.querySelector(selector)
            if(section){
                observer.observe(section)
            }
        })

        return () => observer.disconnect()
    }, 
    [selectors, options])


    return activeId
}

import { createContext, useState} from "react";


export const ToggleContext = createContext()


export const ToggleProvider = ({children}) => {
    const [open,setOpen] = useState(false)


    return (
        <ToggleContext.Provider value = {{open,setOpen}}>
                {children}
        </ToggleContext.Provider>
    )
}





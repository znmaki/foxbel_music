import { createContext, useState } from "react";

const HOptionContext = createContext()

const HOptionProvider = ({ children }) => {
    const [pos, setPos] = useState(0)
    const [hamburIdenti, setHamburIdenti] = useState(false)

    const changePos = (posi) => {
        setPos(posi)
    }

    const changeIdenti = () => {
        setHamburIdenti(!hamburIdenti)
    }

    return (
        <HOptionContext.Provider
            value={{
                changePos,
                pos,
                changeIdenti,
                hamburIdenti
            }}
        >
            {children}
        </HOptionContext.Provider>
    )
}

export {
    HOptionProvider
}

export default HOptionContext
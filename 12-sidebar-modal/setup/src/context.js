import React, { useState, useContext } from 'react' 

const appContext = React.createContext();

const AppProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    function openModal() {
        setModal(true);
    }
    function closeModal() {
        setModal(false)
    }
    function openSidebar() {
        setSidebar(true);
    }
     function closeSidebar() {
        setSidebar(false);
    }

    return (
        <appContext.Provider
        value={{closeModal,openModal,openSidebar,closeSidebar,modal,sidebar}}
        >
            {children}
        </appContext.Provider>
    )
    
}

export function useGlobalContext() {
    return useContext(appContext);
}
export default AppProvider;
import { createContext, useEffect, useState } from "react";

const NovigationContext = createContext();

function NavigationProvider({ children }) {

    // handle forward and back buttons
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    });

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return (
        <NovigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NovigationContext.Provider>
    );
}

export { NavigationProvider };

export default NovigationContext;
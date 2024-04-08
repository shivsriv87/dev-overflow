"use client"
import React,{ useState, useContext,createContext,useEffect } from 'react';

interface ThemeContextType{
    Mode : string;
    setMode : (Mode: string) =>void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({children}:{children : React.ReactNode}){
    const [Mode, setMode] = useState('');
     
    const handleThemeChange = () => {
        if(Mode == 'dark'){
            setMode('light');
            document.documentElement.classList.add('light');
        }
        else{
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    }
    useEffect(()=>{
        handleThemeChange();
    },[Mode]);

        return(
            <ThemeContext.Provider  value={{Mode,setMode}}>
                {children}
                 
            </ThemeContext.Provider>
        )
    
} 


export function useTheme(){
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
import React ,{ createContext, useContext, useEffect, useState } from "react";

const AuthContext=createContext()
export const useAuth = () => useContext(AuthContext);

export const AuthProvider=({children})=>{
      const [user,setUser]=useState(null)
      useEffect(()=>{
        const storeddata=localStorage.getItem("user")
        if(storeddata) setUser(JSON.parse(storeddata))
      },[])
     const login=(userdata)=>{
           setUser(userdata)
           localStorage.setItem("user",JSON.stringify(userdata))
     }

     const logout=()=>{
            setUser(null)
            localStorage.removeItem("user")
     }
     return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
     )
       
}
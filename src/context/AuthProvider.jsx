<<<<<<< HEAD
// import React ,{ createContext, useContext, useEffect, useState } from "react";

// const AuthContext=createContext()
// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider=({children})=>{
//       const [user,setUser]=useState(null)
//       useEffect(()=>{
//         const storeddata=localStorage.getItem("user")
//         if(storeddata) setUser(JSON.parse(storeddata))
//       },[])
//      const login=(userdata)=>{
//            setUser(userdata)
//            localStorage.setItem("user",JSON.stringify(userdata))
//      }

//      const logout=()=>{
//             setUser(null)
//             localStorage.removeItem("user")
//      }
//      return(
//         <AuthContext.Provider value={{user,login,logout}}>
//             {children}
//         </AuthContext.Provider>
//      )
       
// }








// import React, { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // 🔧 NEW

//   useEffect(() => {
//     const storeddata = localStorage.getItem("user");
//     if (storeddata) {
//       setUser(JSON.parse(storeddata));
//     }
//     setLoading(false); // ✅ Done loading after checking localStorage
//   }, []);

//   const login = (userdata) => {
//     setUser(userdata);
//     localStorage.setItem("user", JSON.stringify(userdata));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ NEW: Track loading state

  useEffect(() => {
    const storeddata = localStorage.getItem("user");
    if (storeddata) {
      setUser(JSON.parse(storeddata));
    }
    setLoading(false); // ✅ Finish loading after reading localStorage
  }, []);

  const login = (userdata) => {
    setUser(userdata);
    localStorage.setItem("user", JSON.stringify(userdata));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
=======
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
>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119

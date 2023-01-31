import { createContext } from "react";

const UserContext=createContext({
    user:{
      name:"Sarang Sharma",
      email:"sarangchamp2004@gmail.com"  
    },
});

export default UserContext;
import React, {useContext, useEffect} from "react";
import { DataContext } from "./Components/DataProvider/DataProvider";
import Routing from "./Router";
import {Type} from './Utility/action.type'
import {auth} from './Utility/firebase'

function App() {
    const [{ user }, dispatch] = useContext(DataContext);
    
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        // console.log(authUser)
        if(authUser){
          dispatch({
            type: Type.SET_USER,
            user: authUser
          })
        }else{
          dispatch({
            type: Type.SET_USER,
            user: authUser
        })
      }
      })
    }, []);




  return (
    <>
      <Routing />
    </>
  );
}

export default App;

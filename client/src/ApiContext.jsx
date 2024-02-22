import React from 'react'

const ApiContext = React.createContext()


function ApiContextProvider(props){
const [user, setUser] = React.useState({
    user: localStorage.getItem('login')? JSON.parse(localStorage.getItem('login')) : "",
    token: localStorage.getItem('token')? localStorage.getItem('token'): ""
})


    return(
        <ApiContext.Provider value={{
            user
        }}>{props.children} </ApiContext.Provider>
    )
}


export {ApiContext, ApiContextProvider}
import React from 'react'
import axios from 'axios'

const ApiContext = React.createContext()


function ApiContextProvider(props){
const [user, setUser] = React.useState({
    user: localStorage.getItem('login')? JSON.parse(localStorage.getItem('login')) : "",
    token: localStorage.getItem('JeToken')? localStorage.getItem('JeToken'): ""
})
console.log(user,'user')

const [login, setLogin] = React.useState({
    username:"",
    password:""
})

function updateState(setState, name, value){
 setState(prevState => {
    return{
        ...prevState,
        [name]: value
    }
 })
}

function handleState(event, state){
    const {name,value} = event.target 
    if(state === "login"){
        updateState(setLogin, name, value)
    }
}

function signIn(event){
    event.preventDefault()
    if(login.username && login.password != ""){
        axios.post("/api/login", login)
            .then(res => setUser(prevState => {
                localStorage.setItem('TokenJe', res.data.token)
                localStorage.setItem('JeUser', JSON.stringify(res.data.user))
                return{
                    ...prevState,
                    user: res.data.user,
                    token: res.data.token
                }
            }))
            .catch(err => setUser(prevState => {
                return{
                    ...prevState,
                    errMsg: err.res.data.errMsg
                }
            }))
    }
}

function logOut(){
    localStorage.removeItem("TokenJe")
    localStorage.removeItem("JeUser")
    setUser(prevState => {
        return{
            ...prevState,
            user: "",
            token: ""
        }
    })
}


    return(
        <ApiContext.Provider value={{
            user,
            handleState,
            logOut,
            signIn

        }}>{props.children} </ApiContext.Provider>
    )
}


export {ApiContext, ApiContextProvider}
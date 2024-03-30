import React from 'react'
import axios from 'axios'

const ApiContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config=>{
    const token = localStorage.getItem('TokenJe')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function ApiContextProvider(props){
const [user, setUser] = React.useState({
    user: localStorage.getItem('login')? JSON.parse(localStorage.getItem('login')) : "",
    token: localStorage.getItem('TokenJe')? localStorage.getItem('TokenJe'): ""
})


const [login, setLogin] = React.useState({
    username:"",
    password:""
})

const [file, setFile] = React.useState(null)

function updateState(setState, name, value){
 setState(prevState => {
    return{
        ...prevState,
        [name]: value
    }
 })
}

function handleFile(event){
    const {files} = event.target
  
    setFile(files[0])
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
            .catch(err => console.log(err))
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
console.log(file)
function updatePhoto(event){
    event.preventDefault()
    if(file != null){
        const formData = new FormData()
            formData.append('photo', file)
        userAxios.post("/api/auth/updateImg", formData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    }
}


    return(
        <ApiContext.Provider value={{
            user,
            handleState,
            logOut,
            signIn,
            updatePhoto,
            handleFile

        }}>{props.children} </ApiContext.Provider>
    )
}


export {ApiContext, ApiContextProvider}
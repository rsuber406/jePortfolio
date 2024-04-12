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
    user: localStorage.getItem('JeUser')? JSON.parse(localStorage.getItem('JeUser')) : "",
    token: localStorage.getItem('TokenJe')? localStorage.getItem('TokenJe'): ""
})


const [login, setLogin] = React.useState({
    username:"",
    password:""
})

const [video, setVideo] = React.useState({
    src: ""
})

const [file, setFile] = React.useState(null)

const [createdVideo, setCreatedVideo] = React.useState([])

const [mailObj, setMailObj] = React.useState({
    name: '',
    email: '',
    phone: ''
})

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
   if(state === "video"){
    updateState(setVideo, name, value)
   }

   if(state == "mail"){
    updateState(setMailObj, name, value)
   }
}

function handleVideo(input){
    setVideo(prevState => {
        return{
            ...prevState,
            src: input
        }
    })
}
function getVideos(){
    axios.get("/api/allVideos")
        .then(res => setCreatedVideo(res.data))
        .catch(err => console.log(err))
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
            
            user: "",
            token: ""
        }
    })
}

function checkPng(input){
 const split = input.split(".")
 console.log(split)
 if(split[1] === "png"){
    return true
 }
}

function addVideo(event){
    event.preventDefault()
    userAxios.post("/api/auth/newVideo", video)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
}

function updatePhoto(event){
    event.preventDefault()
    if(file != null && checkPng(file.name)){
        console.log("is true")
        const formData = new FormData()
            formData.append('photo', file)
        userAxios.post("/api/auth/updateImg", formData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    }
}

function sendEmail(){
    axios.post("api/sendMail", mailObj)
    .then(res => console.log(res.status))
    .catch(err => console.log(err.res.data))
}

function acquirePin(details){
    if(details.email){
        axios.post("/api/resetemail", details)
        .then(res => console.log(res))
        .catch(err => console.log(err.res.data))
        return true
    }
}

function finishReset(data){

   
        console.log("it worked")
        axios.post("/api/resetPass", data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.res.data))
        return true
    
}



React.useEffect(()=>{
    getVideos()
},[])

    return(
        <ApiContext.Provider value={{
            user,
            handleState,
            logOut,
            signIn,
            updatePhoto,
            handleFile,
            handleVideo,
            addVideo,
            createdVideo,
            sendEmail,
            acquirePin,
            finishReset

        }}>{props.children} </ApiContext.Provider>
    )
}


export {ApiContext, ApiContextProvider}
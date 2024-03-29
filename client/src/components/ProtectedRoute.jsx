import React from "react"
import { Navigate } from "react-router-dom"


export default function ProtectedRoute(props){
    const {token} = props

    return token? props.children : <Navigate to="/signin" />
}
import React from "react"
import { ApiContext } from "../ApiContext"

export default function Admin(props){

const {user, handleState, updatePhoto, handleFile} = React.useContext(ApiContext)







return(<>
<div>
    <div>
        <h1>Welcome {user.user.username}</h1>
    </div>

    <div>
        <h2>If you would like to add a video please fill out the form below.</h2>
        <form>
            <textarea name="src" placeholder="embedded youtube code" />
            <button>Submit</button>
        </form>
    </div>
    <div>
        <h2>If you would like to change your picture, please fill out the form below.</h2>
        <form onSubmit={updatePhoto} encType="multipart/form-data">
            <input type="text" name="type" onChange={(event) => handleState(event, "file")} placeholder="file type, jpeg,png,svg. Please try to use jpeg." />
            <input type="file" name="photo" onChange={handleFile} />
            <button>Submit</button>
        </form>
    </div>
</div>

</>)


}
import React from 'react'


export default function ModelTemplate(props){
    const{img, name, description, selectedModel, filePath } = props




    return(
      <div onClick={()=> selectedModel(filePath)} style={{width: "10%"}} className='modelTemplate'>
        <img width={"100%"} height={"100%"} src={img} />
        <h2>{name} </h2>
        <h2>{description} </h2>
      </div>
    )



}
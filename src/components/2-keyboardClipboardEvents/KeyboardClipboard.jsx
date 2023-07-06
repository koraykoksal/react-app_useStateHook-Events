import { useState } from "react"



const KeyboardClipboard = () => {

  const [content, setContent] = useState("")

  const handleKeyDown=(e)=>{

    if(e.keyCode >= 48 && e.keyCode <= 57){
      alert("Please dont enter a number")

      //e.preventDefault ile rakam yazması engellenir
      e.preventDefault()
    }
  }

  return (
    <div className="container mt-4">

      <p className="text-center">(on copy-cut-paste vb.) gibi örnekler için kullanılır.</p>

      <h2 className="text-center">KeyboardClipboard</h2>

      <input type="text" name="" id="" className="form-control" onChange={(e)=>{
        setContent(e.target.value)
      }} 
      value={content.toLocaleUpperCase()} 
      
      onKeyDown={handleKeyDown}
      />

      <div className="mt-4">
          <h3>Copied Content</h3>
          <p>{content.toLocaleUpperCase()}</p>
      </div>


    </div>
  )
}

export default KeyboardClipboard
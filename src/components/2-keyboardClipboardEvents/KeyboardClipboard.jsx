import { useState } from "react"



const KeyboardClipboard = () => {

  const [content, setContent] = useState("")


  return (
    <div className="container mt-4">

      <p className="text-center">(on copy-cut-paste vb.) gibi örnekler için kullanılır.</p>

      <h2 className="text-center">KeyboardClipboard</h2>

      <input type="text" name="" id="" className="form-control" onChange={(e)=>setContent(e.target.value)} />

      <div className="mt-4">
          <h3>Copied Content</h3>
          <p>{content}</p>
      </div>


    </div>
  )
}

export default KeyboardClipboard
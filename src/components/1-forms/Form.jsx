import { useState } from "react"


const Form = () => {
  const [username, setUsername] = useState("")

  const hadleUsername=(e)=>{

    setUsername(e.target.value)

  }

  return <div className="container mt-3">
    
    <h2 className="text-center text-success">FORM IN REACT</h2>
    <form>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1">Hello : {username}</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Name"
          value={username}
          onChange={hadleUsername}
        />

      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      
    </form>


  </div>
}

export default Form

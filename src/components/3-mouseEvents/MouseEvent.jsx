import { useState } from "react"


const MouseEvent = () => {

  const [visible, setVisible] = useState(false)

  const [coodX, setCoordX] = useState("")
  const [coodY, setCoordY] = useState("")

  const handleEnter=()=>{
    alert('mouse enterrr')
  }

  const handleMove=(e)=>{

    console.log("X : ",e.pageX);
    console.log("Y : ",e.pageY);
  }

  const handleMove2=(e)=>{

    setCoordX(e.pageX)
    setCoordY(e.pageY)
  }


  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4" onMouseMove={handleMove2}>
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div id="todo-1" className="bg-success text-light w-50 p-4" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}  >
        todo item 1

        {/* shor circuit yönetmi ile visible default değeri değişirse "ve" şartını uygular */}
        {/* short circuit yöntemi */}
        {visible && <div>Hint</div>}  

      </div>

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4"  onMouseMove={handleMove}  >
        todo item 2
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3
      </div>

      <p>X : {coodX} and Y : {coodY}</p>
    </div>
  )
}

export default MouseEvent

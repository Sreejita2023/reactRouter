import React from 'react'
import { useNavigate } from 'react-router-dom'
function Support() {
    const navigate=useNavigate()
  function clickHandler(){
        navigate("/about")
  }
  function backHandler(){
     navigate(-1)
  }
  return (
    <div>
        <div>Support</div>
        <button onClick={clickHandler}>Move to about page</button>
        <button onClick={backHandler}>Go back</button>
    </div>
  )
}
export default Support
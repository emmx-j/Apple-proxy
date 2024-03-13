import { useState } from "react"

const Forgetpas = () => {
    const [inputValEmail, setinputvalEmail] = useState("")

    const submithaduler = () => {
        console.log(inputValEmail)
    }

  return (
     <>
        <div className="section">
            <form onSubmit={submithaduler}>
                    <div>  
                        <h3>Email</h3>
                        <input type='Email' name="" id="inpuName" value={inputValEmail} onChange={(e) => setinputvalEmail(e.target.value)} placeholder="Email"  /> 
                    </div>
            </form>
        </div>
    </>
  )
}

export default Forgetpas
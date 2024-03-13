import { useState } from "react"
import { Link } from "react-router-dom"
import  {useNavigate}  from "react-router-dom"





export const Signup = () => {
    const [inputValEmail, setinputvalEmail] = useState("")
    const [inputValpassword, setinputvalpassword] = useState("")
    const [inputValpasswordC, setinputvalpasswordC] = useState("")
    const [inputValName, setinputvalName] = useState("")
    const history = useNavigate()


    const submithaduler = (e) =>{
        e.preventDefault()
        if (inputValpasswordC.length < 8 ){
            const erro = document.getElementById("erropass")
            erro.innerHTML = "password length most be more than 8"
        }else if(inputValpassword !== inputValpasswordC){
           const erro = document.getElementById("erropass")
            erro.innerHTML = "password do not mach"
        }else if (inputValEmail && inputValName === ""){
            const erro = document.getElementById("erropass")
            erro.innerHTML = "conferm Name or Email"
        }else{
            const data = {inputValEmail, inputValName, inputValpassword}
            fetch('http://localhost:8000/dataInfo', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }).then(() =>{
                history("/Account")
            })
            
        }
     }
  return (<>
        <div className="section">
            <h2 className='signHeading'>Sign up</h2>
                <form onSubmit={submithaduler}>
                <div>  
                        <h3>Name</h3>
                        <input type='text' name="" id="inpuName" value={inputValName} onChange={(e) => setinputvalName(e.target.value)} placeholder="Email"  /> 
                    </div>
                    <div>  
                        <h3>Email</h3>
                        <input type='Email' name="" id="inpuName" value={inputValEmail} onChange={(e) => setinputvalEmail(e.target.value)} placeholder="Email"  /> 
                    </div>

                    <div>  
                        <h3>password</h3>
                        <input type='password' name="" id="inpuName" value={inputValpassword} onChange={(e) => setinputvalpassword(e.target.value)} placeholder="password"  /> 
                    </div>

                    <div  className="last">  
                        <h3>Repeat Password</h3>
                        <input type='password' name="" id="inpuName"  value={inputValpasswordC} onChange={(e) => setinputvalpasswordC(e.target.value)} placeholder="password"  /> 
                    </div>
                    <p id="erropass"></p>
                    <div className="submet">
                        <input type="submit" className="submetBTN"></input>
                        <Link to="Login" className="loginL">Alredy Registered</Link>
                    </div>
                </form>
            </div>
        </>        
  )
}

import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"


 interface dataporp {
  DataFile : never[],
  isloging: (item: boolean) => void
 }


export const Login = ({DataFile, isloging}: dataporp) => {
     
    const [inputValEmail, setinputValEmail ] = useState("")
    const [inputValpassword, setinputValpassword ] = useState("")
    const [dataFetch, setdataFetch] = useState([])
    const history = useNavigate()
    
    const confremEmail = dataFetch.some((constentEmail) => {
      const ConEmail =  inputValEmail 
      return  constentEmail.Email === ConEmail
      })

      const confremPassword  = dataFetch.some((constentEmail) => {
        const ConEmail =  inputValpassword 
        return  constentEmail.password === ConEmail
        })

    const submithaduler = (e) =>{ 
      e.preventDefault()  
      setdataFetch(DataFile)

      

      {if(confremEmail && confremPassword) {
        history("/Account")
        isloging(true)
      }};
      if(confremEmail === true && confremPassword === false){
        const erro = document.getElementById("erropass")
        erro.innerHTML = "ID name or passowrd incorrect"
      }
        }
    
  return (<>
   <div className="section">
     <h2 className='signHeading'>Login</h2>
        <form onSubmit={submithaduler}>
            <div>  
                <h3>Email</h3>
                <input type='Email' name="" id="inpuName" value={inputValEmail} onChange={(e) => setinputValEmail(e.target.value)} placeholder="Email"  /> 
            </div>

            <div>  
                <h3>password</h3>
                <input type='password' name="" id="inpuName" value={inputValpassword} onChange={(e) => setinputValpassword(e.target.value)} placeholder="password"  /> 
            </div>
            <p id="erropass"></p>
            <input type="submit" className="submetBTN"></input>
            <div className="submet">
            <button className="forgetPas">forget password</button>   
            <Link to="/" className="loginL">Signup</Link>
            </div>
        </form>
    </div>   
    </>
  )}

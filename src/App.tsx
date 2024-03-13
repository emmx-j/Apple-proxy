import {Signup} from "../components/Signup"
import {Login} from "../components/Login"
import Forgetpas from "../components/Forgetpas"
import Header from "../components/Header"
import { Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import ProHeadOne from "../components/ProHeadOne"
import ScreapApiList from "../components/ScreapApiList"
import SearchProx from "../components/SearchProx"
import Balance from "../components/Balance"
import OnlineProxy from "../components/OnlineProxy"
import { useEffect, useState } from "react"
import PaymentInfo from "../components/PaymentInfo"
import ContactUs from "../components/pache/ContactUs"


const DataURL = "http://localhost:9000/dataInfo" 

function App() {
   const [passFile, setPassFile] = useState([])
   const [showpricelistOutcom, setshowpriceOutcom] = useState(false)
   const [isloging , setisloging] = useState(false)


   const handuliconclick = (item: boolean) => {
      setshowpriceOutcom(item)
   }

   const handulisloging = (item: boolean) => {
      setisloging(item)
      console.log("you are loging")
   }
   
   useEffect(() => {
      fetch(DataURL).then(response => response.json())
      .then(data => setPassFile(data))
      .catch(erro => console.log(erro)) 
   }, [])

return (<>
<Header />
{showpricelistOutcom && <PaymentInfo closepriceList={handuliconclick} />}
<Routes>
   <Route path="/OnlineProxy" element={<OnlineProxy paymentOut={handuliconclick} /> } />
   <Route path="/Login" element={<Login  DataFile={passFile} isloging={handulisloging}/>} />
   <Route path="/Forgetpas" element={<Forgetpas />} />
   <Route path="*" element={<Signup />}/>
   <Route path="/PREMIUM_INFO" element={<ProHeadOne  paymetOutfile={handuliconclick}/>}/>
   <Route path="/ScreaperList" element={<ScreapApiList />}/>
   <Route path="/SearchProx" element={<ContactUs/>}/>
   <Route path="new" element={isloging? <SearchProx /> : <Signup />} />
   <Route path="/Account" element={<Balance balance="$0.00" outmoney="$0.00"/>} />
</Routes>


   <Footer />     
   </>
)
}

export default App

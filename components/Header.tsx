import videobg  from "/backgruond.mp4"
import { Link } from "react-router-dom" 

const Header = () => {
  return (
    <>
     <div className="backgrundvidoe">
           <video src={videobg} autoPlay loop muted />
             <h1 className="heading">ApplePay proxy</h1>
              <div className="headListConaner">
                    <ul className="navList">                   
                      <li className="linkName"><Link to="/PREMIUM_INFO"  className="navL">PREMIUM PROXY LIST INFO</Link></li>
                      <li className="linkName"><Link to="/OnlineProxy"  className="navL">PROXY CHECKER</Link></li>
                      <li className="linkName"><Link to="/ScreaperList"  className="navL"> SCRAPE AIP LIST</Link></li>
                      <li className="linkName"><Link to="/new"  className="navL"> ONLINE PROXY CHECKER</Link></li>
                      <li className="linkName"><Link to="/SearchProx"  className="navL ss">CLIENT AREA</Link></li>
                    </ul>
                </div>
     </div>
    </>
  )
}

export default Header
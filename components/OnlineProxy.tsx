import Contact  from "../components/pache/ContactUs"
import { Link } from 'react-router-dom'
interface paymentporp {
    paymentOut: (item: boolean) => void
}

const OnlineProxy = ({paymentOut}: paymentporp) => {
  return (<>
    <div>
        <div className='newh2'> proxy dayly Screap And checker </div>
        <div className="centerN">Features of our proxy Screap And checker:</div>
        <div className='content-textP'>
            <p>
                scrape proxies from defined source checker <b>socks4</b>,<b>socks5</b> and <b>HTTP</b> proxies 
            </p>
            <p>
                export proxies to <b>file</b>,by <b>web upload</b>,by <b>ftp</b>,by <b>ssh</b> or by <b>Email</b>
            </p>
            <p>
            export proxies in formats:<b>ip</b>:<b>port</b>,<b>csv</b>,<b>HTTP</b>
            </p>
            <p>
                add custom proxy sources with many parsing parameters and many more
            </p>
            <div className='buttonP'>
                 <Link to="" className='buttonP-LInk' onClick={() => {paymentOut(true)}}>Buy ApplyPAY proxy list</Link>
            </div>
        </div>
        <div className="centerN">
            if you choose to purchase licence, you will get the following features:
        </div>
        <div className='content-textP'>
            <p>
                unlimited sourpin and checking threads Ability to download fresh proxy source  
            </p>
             <p>
                which are refreshed daily ability to create custom export job schedules
            </p>
            <p>
                current lifetime licence price per computer: $1620
            </p>
            <div className='buttonP'>
                 <Link to="/Login" className='New-buttonP-LInk'>use licence key</Link>
            </div>
        </div>
        
    </div>
    <div className="endlist">
        <Contact />
    </div>
    </>
  )
}

export default OnlineProxy

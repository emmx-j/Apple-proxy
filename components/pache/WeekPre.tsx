import React from 'react'
import { Link } from 'react-router-dom'

interface paymentOut{
    paymetOutfile: (item:boolean) => void
}

const WeekPre = ({paymetOutfile}: paymentOut) => {
  return (<>
    <div className='newh2'>Premium ApplyPAY proxy Service $369/weekly</div>
    <div className='content-textP'>
    <p>We offer elite public proxy list on $369 per week subscription basis.</p>
    <p>We are using several paid proxy scraper programs worth hundreds of dollars, and running them on an server 24/7.</p>
    <p>After purchase you will be given access to api with which you automaticaly sort and scrape proxies by country, google passed, ssl, socks4, socks5, http and more.</p>
    </div>
<div className="centerN">Current Number Of ApplyPAY Proxies Available to Premium Users:</div>
<div className="Active">
    <div className="Aitmes ATNW">
        Alive Proxies:
        <p className="pTage">20763</p>
    </div>
    <div className="Aitmes">
        Http/Https:
        <p>5376</p>
    </div>
    <div className="Aitmes">
         Socks4:
        <p>10163</p>
    </div>
    <div className="Aitmes">
          Socks5:
        <p>5763</p>
    </div>
    <div className="Aitmes ANT ">
        Alive US Proxies:
        <p className="pTage">7963</p>
    </div>
</div>
    <p className='pTageT'>Premium proxies were last updated: 8 hours ago</p>
    <div className='buttonP'>
    <Link to ="" className='buttonP-LInk'onClick={() => {paymetOutfile(true)}}>Buy ApplyPAY proxy list</Link>
    </div>
  </>
  )
}

export default WeekPre
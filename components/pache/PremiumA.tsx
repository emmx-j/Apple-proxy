import { Link } from "react-router-dom"


const PremiumA = () => {
  return (<>
    <div className='newh2'>ApplyPay Premium Screaper Api</div>
        <p className='pTageT'>Api url: https://applyPay_proxy-daily.com/api/getproxylist</p>
            <div className="preminoHeading">
                    <div className="premcont">
                        <div className="prmName">
                            <h4>Parameter</h4>
                        </div>
                        <div className="premcontent">
                            <h4>Description</h4>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmNameTwo">
                            <h4>apikey</h4>
                            (required)
                        </div>
                        <div className="premcontentTwo">
                            <h4>Your api key that you have received after purchase of premium.</h4>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmName">
                            <h4>format </h4>
                            (required)
                        </div>
                        <div className="premcontent">
                        <p>Format in which to return proxies:</p>
                        <p><b>ipport</b> - Return proxies in standard ip:port format.</p>
                        <p><b>json</b> - Return proxies in json format.</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmNameTwo">
                            <h4>type</h4>
                        </div>
                        <div className="premcontentTwo">
                            <p>	Filter proxy by type, valid values are:</p>
                            <p><b>http</b></p>
                            <p><b>socks4</b></p>
                            <p><b>socks5</b></p>
                            <p>If you want to get multiple types, separate them by comma.</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmName">
                            <h4>speed</h4>
                        </div>
                        <div className="premcontent">
                            <p>Filter proxy by speed, only return proxies with speed in seconds lower than this parameter.</p>
                            <p>Speed must be defined in seconds and can be int or float.</p>

                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmNameTwo">
                            <h4>tags</h4>
                        </div>
                        <div className="premcontentTwo">
                        <p>	Filter proxy by type, valid values are:</p>
                            <p><b>ssl</b></p>
                            <p><b>google</b></p>
                            <p><b>bing</b></p>
                            <p>If you want to get multiple types, separate them by comma.</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmName">
                            <h4>ports</h4>
                        </div>
                        <div className="premcontent">
                            <p>only get porxiese with specified port.</p>
                            <p>if you want to mulitple ports,separate them by comma</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmNameTwo">
                            <h4>lastchecked</h4>
                        </div>
                        <div className="premcontentTwo">
                            <p>only return porxies that were checked X seconds ago.</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmName">
                            <h4>anonymity</h4>
                        </div>
                        <div className="premcontent">
                        <p>	Filter proxy by type, valid values are:</p>
                            <p><b>transprent</b></p>
                            <p><b>anonymous</b></p>
                            <p><b>elite</b></p>
                            <p>If you want to get multiple types, separate them by comma.</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmNameTwo">
                            <h4>countrys</h4>
                        </div>
                        <div className="premcontentTwo">
                        <p>	Filter proxy by type, valid values are:</p>
                        <p>If you want to get multiple types, separate them by comma.</p>
                        <Link to=''>Click here to view all possible country codes.</Link>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmName">
                            <h4>alive</h4>
                        </div>
                        <div className="premcontent">
                            <p>Filter proxy by type, valid values are:</p>
                            <p>This can be either 1 or 0.</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmNameTwo">
                            <h4>maxage</h4>
                        </div>
                        <div className="premcontentTwo">
                            <p>max age of proxies in seconds. </p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmName">
                            <h4>limit</h4>
                        </div>
                        <div className="premcontent">
                            <p>Limited numbres of proxies to be returned</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmNameTwo">
                            <h4>randomize</h4>
                        </div>
                        <div className="premcontentTwo">
                            <p>Randomize returned proxies</p>
                            <p>set this parameter to if you want to randomize proxies.</p>
                        </div>
                    </div>
                    <div className="premcont">
                        <div className="prmName">
                            <h4>reliability</h4>
                        </div>
                        <div className="premcontent">
                            <p>Reliability of proxy in percent.</p>
                            <p>set this parameter to any number in range 0-100. </p>
                        </div>
                    </div>
            </div>
</>
  )
}

export default PremiumA
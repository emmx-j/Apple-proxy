import ContactUs from "./pache/ContactUs"

const SearchProx = () => {
  return (
    <><div className="contentHead">
        <div className="new-heading">
            <h1>Manual Api Request</h1>
            <div className="contaner">
                <div className="firstContaner">
                    <div className="searchSelectionOne">
                        <div className="contentOne">
                            <p>select fromat:</p>
                            <p>select Anonymity:</p>
                        </div>
                        <div className="actinSection">
                            <button className="actionOne">selected:I  section:I</button>
                        </div>
                        <div className="inputListOne">
                            <p>Timeout in ms:</p>
                            <input type='numbers' className="inputconten" placeholder='5000'></input>
                        </div>
                        <div className="inputListOne">
                            <p>Last checkmax seconds ago:</p>
                            <input type='numbers' className="inputconten" placeholder='86000'></input>
                        </div>
                        <div className="inputListOne">
                            <p>ports:</p>
                            <input type='numbers' className="inputconten" placeholder='example: 8080,34'></input>
                        </div>
                        <div className="inputListOne">
                            <p>Countries:</p>
                            <input type='numbers' className="inputconten" placeholder='example: US, DS'></input>
                        </div>
                    </div>
                    <select  className='selectorHead'>
                        <option selected>Get porxy</option>
                        <option className='selectorItemsList'>HTTPS</option>
                        <option className='selectorItemsList'>socks4</option>
                        <option className='selectorItemsList'>socks5</option>
                    </select>
                </div>
                <div className="secondcontaner">
                    <p> ! no subcription found</p>
                    <div  className='bgInnput'  /> 
                </div>
            </div>
        </div>
    </div>
    <ContactUs />
    </>
  )
}

export default SearchProx

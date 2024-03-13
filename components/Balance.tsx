import { FcApproval } from "react-icons/fc";

interface userinfoProps{
    balance: string,
    outmoney: string
}
const Balance = ({balance, outmoney} : userinfoProps) => {
  return (
    <>
      <h1 className="welcomeHeading">Hi {name} Glad to have you joined us.</h1>
      <div className="compliteContext">
        <div className="alingcon">
          <div className="goodIcon">
              < FcApproval className="iconGod" />
          </div>
            <p className="secondText">You're all set</p>
            <p>your account is ready for business</p>
        </div>
      </div>
      <section className="amoutsection">
        <div className="compliteContext">
          <div className="alingconT">
            <div className="balanceSection">
                <b className="textB">Balance:</b>
                    <p className="balanceOutput">{balance} USD</p>
            </div>
            </div>
        </div>
      <div className="insights">
        <b>insights:</b>
      </div>
      <div className="compliteContextT">
          <div className="alingconT">
            <div className="balanceSection">
                <b className="textB">Money out:</b>
                    <p className="balanceOutput">{outmoney} </p>
                <p>no transection found !</p>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Balance

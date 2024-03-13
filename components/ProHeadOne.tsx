import WeekPre     from "../components/pache/WeekPre" 
import PremiumA   from '../components/pache/PremiumA'
import ContactUs   from '../components/pache/ContactUs'


interface paymentOut{
  paymetOutfile: (item:boolean) => void
}


const ProHeadOne = ({paymetOutfile}: paymentOut ) => {
  return (
    <>
        <div className="endlist">
         <WeekPre paymetOutfile={paymetOutfile} />
         </div>
         <div className="endlist">
        <PremiumA />
        </div>
        <ContactUs />
    </>
  )
}

export default ProHeadOne
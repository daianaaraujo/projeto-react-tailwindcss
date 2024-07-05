
import Logo01 from './img/Logo01.svg'
import Logo02 from './img/Logo02.svg'
import Logo03 from './img/Logo03.svg'
import Logo04 from './img/Logo04.svg'

export default function Info(){
    return(
        <>
           <section className="min-h-72 w-full flex flex-wrap">
            <div className="min-h-screen w-full flex-col">
              <div className="w-1/5 flex justify-center items-center">
                <img src={Logo01} alt="" className="h-11 w-44"/>
              </div>
              <div className="w-1/5 flex justify-center items-center">
                <img src={Logo02} alt="" className="h-11 w-44"/>
              </div>
              <div className="w-1/5 flex justify-center items-center">
                <img src={Logo03} alt="" className="h-11 w-44"/>
              </div>
              <div className="w-1/5 flex justify-center items-center">
                <img src={Logo04} alt="" className="h-11 w-44"/>
              </div>
              </div>
    
           </section>
        </>
    )
}
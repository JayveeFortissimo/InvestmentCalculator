
const Inputs = ( {Triggereds, controls} ) => {

  return (
   <section>
    <div className='Children'>
        <form action="">
            <div className='FirstDiv'>
                <div>
                <label htmlFor="">INITIAL INVESTMENT</label>
                <input 
                type="number" 
                required 
                value={controls.initialInvestment}
                onChange={(e)=> Triggereds('initialInvestment',e.target.value)}/>
                </div>
               <div>
               <label htmlFor="">ANNUAL INVESTMENT</label>
                <input type="number" 
                required
                value={controls.annualInvestment}
                onChange={(e)=> Triggereds('annualInvestment',e.target.value)}/>
               </div>
                
            </div>

            <div className='FirstDiv'>
                <div>
                <label htmlFor="">EXPECTED RETURN</label>
                <input type="number"
                 required
                 value={controls.expectedReturn}
                 onChange={(e)=> Triggereds('expectedReturn',e.target.value)}/>
                </div>
              <div>
              <label htmlFor="">DURATION</label>
                <input type="number" 
                required
                value={controls.duration}
                onChange={(e)=> Triggereds('duration',e.target.value)}/>
              </div>
            
            </div>
           
        </form>

    </div>
   </section>
  )
}

export default Inputs
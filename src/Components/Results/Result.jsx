import { calculatedInvestmentResult,formatter } from "../Function/Function"


const Result = ({input,...props}) => {

const results = calculatedInvestmentResult(input);

const initial = results[0].valueEndOfYear -  results[0].interest - results[0].annualInvestment;

  return (
    <div {...props}>
      <table>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>Value End of the Year</th>
          <th>Total Interest</th>
          
        </tr>

        <tbody>
     
           {results.map((element,index)=>{
            const TotalInterest = element.valueEndOfYear - element.annualInvestment*element.year - initial;
            return(
              <tr key={element.year}>
         <td>{element.year}</td>
         <td>{formatter.format(element.valueEndOfYear)}</td>
         <td>{formatter.format(element.interest)}</td>
         <td>{formatter.format(TotalInterest)}</td>
                </tr>
            )
           })}
        
        </tbody>
      </table>
    </div>
  )
}

export default Result
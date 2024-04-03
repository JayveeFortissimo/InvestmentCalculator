
export function calculatedInvestmentResult({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
}){

    const annualData = [];
    let investmentValue = initialInvestment;


    for(let i=0; i<duration; i++){

        const interest = investmentValue * (expectedReturn / 100);
        investmentValue += interest + annualInvestment;
annualData.push({
  year: i + 1,
  interest: interest,
  valueEndOfYear: investmentValue,
  annualInvestment : annualInvestment
})

    }

    return annualData

}


export const formatter = new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits:0,
    maximumFractionDigits:0
})
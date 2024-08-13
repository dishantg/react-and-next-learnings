import {
  calculateInvestmentResults,
  formatterIndia,
} from "../util/investment.js";

export default function Results({ userInput }) {
  let data = calculateInvestmentResults(userInput);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatterIndia.format(yearData.valueEndOfYear)}</td>
                <td>{formatterIndia.format(yearData.interest)}</td>
                <td>{formatterIndia.format(totalInterest)}</td>
                <td>{formatterIndia.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

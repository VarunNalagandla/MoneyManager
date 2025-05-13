// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="detail-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="detail-icon"
        />
        <div>
          <p className="detail-title">Your Balance</p>
          <p className="detail-amount" data-testid="balanceAmount">
            ₹ {balanceAmount}
          </p>
        </div>
      </div>

      <div className="detail-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="detail-icon"
        />
        <div>
          <p className="detail-title">Your Income</p>
          <p className="detail-amount" data-testid="incomeAmount">
            ₹ {incomeAmount}
          </p>
        </div>
      </div>

      <div className="detail-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="detail-icon"
        />
        <div>
          <p className="detail-title">Your Expenses</p>
          <p className="detail-amount" data-testid="expensesAmount">
            ₹ {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

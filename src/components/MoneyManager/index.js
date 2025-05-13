import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  getTotals = () => {
    const {transactionsList} = this.state
    let income = 0
    let expenses = 0

    transactionsList.forEach(each => {
      if (each.type === 'INCOME') {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })

    return {
      income,
      expenses,
      balance: income - expenses,
    }
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state

    if (titleInput === '' || amountInput === '') {
      return
    }

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeInput,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        each => each.id !== id,
      ),
    }))
  }

  render() {
    const {transactionsList, titleInput, amountInput, typeInput} = this.state
    const {income, expenses, balance} = this.getTotals()

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="header">
            <h1 className="title">Hi, Richard</h1>
            <p className="description">
              Welcome back to your{' '}
              <span className="highlight">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balance}
            incomeAmount={income}
            expensesAmount={expenses}
          />

          <div className="bottom-container">
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <h1 className="form-title">Add Transaction</h1>

              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                className="input"
                placeholder="Title"
                value={titleInput}
                onChange={this.onChangeTitle}
              />

              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                className="input"
                placeholder="Amount"
                value={amountInput}
                onChange={this.onChangeAmount}
              />

              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                className="input"
                value={typeInput}
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="add-btn">
                Add
              </button>
            </form>

            <div className="transactions-container">
              <h1 className="form-title">History</h1>
              <ul className="transactions-list">
                <li className="transaction-header">
                  <p className="column">Title</p>
                  <p className="column">Amount</p>
                  <p className="column">Type</p>
                  <p className="column"> </p>
                </li>
                {transactionsList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transaction={each}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

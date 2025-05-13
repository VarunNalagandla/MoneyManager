import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction, transactionTypeOptions} = props
  const {id, title, amount, type} = transaction

  // Find the displayText for the given transaction type
  const transactionType = transactionTypeOptions.find(
    each => each.optionId === type,
  ).displayText

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{transactionType}</p>{' '}
      {/* Displaying displayText */}
      <button
        type="button"
        className="delete-btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem

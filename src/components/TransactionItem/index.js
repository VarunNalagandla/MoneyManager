// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction} = props
  const {id, title, amount, type} = transaction

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">₹ {amount}</p>
      <p className="transaction-text">{type}</p>
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

import {AiFillFire} from 'react-icons/ai'
import {GiCycle} from 'react-icons/gi'
import {GoPrimitiveDot} from 'react-icons/go'

import './index.css'

const VirtualCard = props => {
  const {cardDetails} = props
  const {
    name,
    budgetName,
    subscriber,
    spent,
    availableToSpend,
    expiry,
    limit,
    cardType,
  } = cardDetails

  return (
    <li className="virtual-card-container">
      <div className="name-logo-container">
        <div className="name-container">
          <h1 className="name-heading">{name}</h1>
          <p className="budget-name">
            {subscriber} <GoPrimitiveDot /> {budgetName}
          </p>
        </div>
        <div className="logo-container">
          {cardType === 'burner' ? <AiFillFire /> : <GiCycle />}
        </div>
      </div>
      <div className="card-type-container">
        <div className="card-type">
          {cardType === 'burner' ? (
            <p className="type-container">Burner</p>
          ) : (
            <p className="type-container">Subscription</p>
          )}
        </div>
        <div className="limit-expiry">
          {cardType === 'burner' ? (
            <p>{`Expires: ${expiry}`}</p>
          ) : (
            <p>{`Limit: ${limit}`}</p>
          )}
        </div>
      </div>
      <div className="bar-line">
        <hr className="horizontal-line" />
      </div>
      <div className="spent-container">
        <div className="spent-name">
          <GoPrimitiveDot className="spent-dot" />
          <p>Spent</p>
        </div>
        <div className="value-container">
          {`${spent.value} ${spent.currency}`}
        </div>
      </div>
      <div className="spent-container">
        <div className="spent-name">
          <GoPrimitiveDot className="available-dot" />
          <p>Available to spend</p>
        </div>
        <div className="value-container">
          {`${availableToSpend.value} ${availableToSpend.currency}`}
        </div>
      </div>
    </li>
  )
}

export default VirtualCard

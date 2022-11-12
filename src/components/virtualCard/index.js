import {AiFillFire} from 'react-icons/ai'
import {GiCycle} from 'react-icons/gi'

import './index.css'

const virtualCard = props => {
  const {
    name,
    budgetName,
    subscriber,
    spent,
    availableToSpend,
    expiry,
    limit,
    status,
    cardType,
  } = props

  return (
    <div className="virtual-card-container">
      <div className="name-logo-container">
        <div className="name-container">
          <h1 className="name-heading">{name}</h1>
          <p className="budget-name">
            {subscriber}-{budgetName}
          </p>
        </div>
        <div className="logo-container">
          {cardType === 'burner' ? <AiFillFire /> : <GiCycle />}
        </div>
      </div>
      <div className="card-type-container">
        <div className="card-type">
          {cardType === 'burner' ? <p>Burner</p> : <p>Subscription</p>}
        </div>
        <div className="limit-expiry">
          {cardType === 'burner' ? (
            <p>{`Expires: ${expiry}`}</p>
          ) : (
            <p>{`Limit: ${limit}`}</p>
          )}
        </div>
      </div>
    </div>
  )
}

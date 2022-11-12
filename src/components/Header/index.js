import {BiPlus} from 'react-icons/bi'

import './index.css'

const Header = () => (
  <nav className="virtual-cards-header">
    <h1 className="virtual-cards-main-heading">Virtual Cards</h1>
    <div className="new-card-item">
      <BiPlus />
      <p className="new-card-text">Virtual card</p>
    </div>
  </nav>
)

export default Header

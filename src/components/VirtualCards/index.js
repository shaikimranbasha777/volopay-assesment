import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {AiFillAppstore, AiOutlineSearch} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgSortAz} from 'react-icons/cg'

import Header from '../Header'
import TabItem from '../TabItem'
import VirtualCard from '../VirtualCard'

import './index.css'

const tabsList = [
  {tabId: 'YOUR', displayText: 'Your'},
  {tabId: 'ALL', displayText: 'All'},
  {tabId: 'BLOCkED', displayText: 'Blocked'},
]

const data = [
  {
    name: 'Minmax',
    budgetName: 'Software Subscription',
    subscriber: 'Imran',
    ownerId: 1,
    spent: {
      value: 100,
      currency: 'SGD',
    },
    availableToSpend: {
      value: 1000,
      currency: 'SGD',
    },
    expiry: '9 FEB',
    limit: 100,
    cardType: 'burner',
    category: 'ALL',
  },
  {
    name: 'Motion',
    budgetName: 'Software Subscription',
    subscriber: 'Mahaboob',
    ownerId: 2,
    spent: {
      value: 0,
      currency: 'SGD',
    },
    availableToSpend: {
      value: 15,
      currency: 'SGD',
    },
    expiry: '9 FEB',
    limit: 5,
    cardType: 'subscription',
    category: 'YOUR',
  },
]

class VirtualCards extends Component {
  state = {
    activeTabId: tabsList[1].tabId,
    subscriptionInput: false,
    burnerInput: false,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  renderFilterSection = () => {
    const {subscriptionInput, burnerInput} = this.state

    return (
      <div className="filters-container">
        <h3 className="filter-heading"> Filters</h3>
        <div className="type-and-card-holder-container">
          <h4 className="type-heading">Type</h4>
          <div className="input-container">
            <div className="input-container">
              <input
                type="checkbox"
                id="subscription"
                value={subscriptionInput}
              />
              <label htmlFor="subscription">Subscription</label>
            </div>
            <div className="input-container">
              <input type="checkbox" id="burner" value={burnerInput} />
              <label htmlFor="burner">Burner</label>
            </div>
          </div>
          <h4 className="card-holder-heading">Cardholder</h4>
          <select>
            <option>Select Cardholder</option>
          </select>
          <div className="apply-clear-buttons">
            <button type="button" className="apply-button">
              Apply
            </button>
            <button type="button" className="clear-button">
              Clear
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {activeTabId} = this.state

    return (
      <div className="virtual-cards-container">
        <Header />
        <div className="tab-item-section">
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <div className="icons-container">
            <AiFillAppstore />
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="filter-section">
          <AiOutlineSearch />
          <div className="popup-container">
            <Popup
              trigger={
                <button type="button" className="trigger-button">
                  <CgSortAz />
                  Filter
                </button>
              }
              position="bottom right"
            >
              {this.renderFilterSection}
            </Popup>
          </div>
        </div>
        <div className="virtual-cards-list">
          {data.map(eachCard => (
            <VirtualCard key={eachCard.ownerId} cardDetails={eachCard} />
          ))}
        </div>
      </div>
    )
  }
}

export default VirtualCards

/* eslint-disable no-unused-vars */
import {Component} from 'react'

import Popup from 'reactjs-popup'
import InfiniteScroll from 'react-infinite-scroller'

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

class VirtualCards extends Component {
  state = {
    activeTabId: tabsList[1].tabId,
    subscriptionInput: false,
    burnerInput: false,
    cardsList: [],
    startIndex: 0,
    endIndex: 10,
  }

  componentDidMount() {
    this.getVirtualCardsData()
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

  getVirtualCardsData = async () => {
    const response = await fetch(
      'https://636e5755b567eed48ada91f0.mockapi.io/Cards',
    )
    const data = await response.json()
    console.log(response)
    console.log(data)

    const formattedData = data.map(each => ({
      id: each.id,
      ownerId: each.owner_id,
      name: each.name,
      budgetName: each.budget_name,
      subscriber: each.subscriber,
      spent: each.spent,
      availableToSpend: each.available_to_spend,
      limit: each.limit,
      status: each.status,
      cardType: each.card_type,
    }))
    this.setState({cardsList: formattedData})
  }

  loadingCardsList = () => {
    const {cardsList, startIndex, endIndex} = this.state

    this.setState({cardsList: cardsList.slice(startIndex + 10, endIndex + 10)})
  }

  render() {
    const {activeTabId, cardsList} = this.state

    console.log(cardsList)

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
        <div>
          <InfiniteScroll
            dataLength={cardsList.length}
            next={this.loadingCardsList}
            hasMore
            loader={<h4>Loading...</h4>}
            className="virtual-cards-list"
          >
            {cardsList.map(eachCard => (
              <VirtualCard key={eachCard.ownerId} cardDetails={eachCard} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default VirtualCards

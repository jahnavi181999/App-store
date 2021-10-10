import './index.css'

const TabItem = props => {
  const {tabDetails, filterCategory, isActive} = props
  const {tabId, displayText} = tabDetails
  const getCategory = () => {
    filterCategory(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tabs-category">
      {' '}
      <button
        className={`categoryBtn ${activeTabBtnClassName}`}
        type="button"
        onClick={getCategory}
      >
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem

const Tab = props => {
  const {each, sorting} = props
  const {tabId, displayText} = each
  const sort = () => {
    sorting(tabId)
  }
  return (
    <li>
      <button type="button" onClick={sort}>
        {displayText}
      </button>
    </li>
  )
}

export default Tab

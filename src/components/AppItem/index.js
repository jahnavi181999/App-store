import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <div className="app">
      <li>
        <img className="app-img" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  )
}
export default AppItem

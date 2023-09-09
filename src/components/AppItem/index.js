import './index.css'

const Apps = props => {
  const {item} = props
  const {appId, appName, imageUrl, category} = item
  console.log(appId)
  console.log(category)
  return (
    <li>
      <img src={imageUrl} className="image" alt="appName" />
      <p>{appName}</p>
    </li>
  )
}

export default Apps

import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails

  return (
    <li className="liItem">
      <img src={imgUrl} className="img2" alt={name} />
      <p className="itemP">{name}</p>
    </li>
  )
}

export default DestinationItem

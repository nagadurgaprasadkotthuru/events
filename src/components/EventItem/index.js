// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, onEventClick} = props
  const {imageUrl, name, location, registrationStatus} = eventItemDetails
  const eventClick = () => onEventClick(registrationStatus)
  return (
    <li className="list-item">
      <button className="list-button" type="button" onClick={eventClick}>
        <img className="event-image" alt="event" src={imageUrl} />
        <p className="event-heading">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem

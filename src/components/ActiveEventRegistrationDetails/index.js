// Write your code here
import './index.css'

const registrationStatuses = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventStatus} = props

  const renderNoActiveEvent = () => (
    <p className="description">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-image"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="yet-to-register-container">
      <img
        className="registered-image"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h4 className="registered-description">
        You have already registered for the event
      </h4>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="yet-to-register-container">
      <img
        className="registrations-closed-image"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h4 className="registered-description">Registrations Are Closed Now!</h4>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (activeEventStatus) {
    case registrationStatuses.initial:
      return renderNoActiveEvent()
    case registrationStatuses.yetToRegister:
      return renderYetToRegister()
    case registrationStatuses.registered:
      return renderRegistered()
    case registrationStatuses.registrationsClosed:
      return renderRegistrationsClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails

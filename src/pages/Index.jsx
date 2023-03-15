import { React } from "react"
import { Link } from 'react-router-dom'

function Index(props) {
  // const [form, setNewForm] = useState({
  //   event_title: "",
  //   image: "",
  //   description: ""
  // })

  const loaded = (dragEvent) => {
    return props.dragEvents.map((dragEvent) => (
      <div key={dragEvent.id} className="dragEvent">

        <Link to={`/events/${dragEvent.id}`}>
          <h1>{dragEvent.event_title}</h1>
        </Link>

        <img src={dragEvent.image} alt={dragEvent.event_title} className="dragEvent-image" />
        <h3>{dragEvent.description}</h3>
      </div>
    ))
  }

  // const handleChange = (event) => {
  //   setNewForm((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }))
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   props.createDragEvents(setNewForm)
  //   setNewForm({
  //     event_title: "",
  //     image: "",
  //     description: "",
  //   })
  // }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      {props.dragEvents ? loaded() : loading()}
    </section>
  )
}

export default Index
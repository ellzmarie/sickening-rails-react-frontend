import { React, useState } from "react"
import { Link } from 'react-router-dom'

function Index(props) {
  // const [newForm, setNewForm] = useState({
  //   event_title: "",
  //   image: "",
  //   description: ""
  // })

  const loaded = () => {
    return props.dragEvents.map((dragEvent) => (
      <div key={dragEvent.id} className="dragEvent">

        <Link to={`/event/${dragEvent.id}`}>
          <h1>{dragEvent.event_title}</h1>
        </Link>

        <img className="dragEvent-image" src={dragEvent.image} alt=""/>
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
  //   props.createDragEvents(newForm)
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
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.event_title}
          name="event_title"
          placeholder="event title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Create Event" />
      </form> */}
      {props.dragEvents ? loaded() : loading()}
    </section>
  )
}

export default Index
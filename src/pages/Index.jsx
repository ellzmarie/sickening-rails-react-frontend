import { useState } from "react"
import { Link } from 'react-router-dom'

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: ""
  })

  const loaded = () => {
    return props.dragEvent.map((dragEvent) => (
      <div key={dragEvent._id} className="dragEvent">

        <Link to={`/dragEvent/${dragEvent._id}`}>
          <h1>{dragEvent.name}</h1>
        </Link>

        <img src={dragEvent.image} alt={dragEvent.name} />
        <h3>{dragEvent.title}</h3>
      </div>
    ))
  }
  
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createDragEvents(newForm)
    setNewForm({
      name: "",
      image: "",
      description: "",
    })
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
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
      </form>
      {props.dragEvents ? loaded() : loading()}
    </section>
  )
}

export default Index
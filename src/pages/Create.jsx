import { React, useState } from "react"
// import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom"

function Create(props) {
    const [newForm, setNewForm] = useState({
        event_title: "",
        image: "",
        description:"",
    })
    
    let navigate = useNavigate();

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
            event_title: "",
            image: "",
            description:"",
        })
        navigate("/");
    }

    return (
        <section className="create-page">
             <form onSubmit={handleSubmit}>
                Event title: <input
                    type="text"
                    value={newForm.event_title}
                    name="event_title"
                    placeholder="event title"
                    required
                    onChange={handleChange}
                />
                Image url:<input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    required
                    onChange={handleChange}
                />
                Description: <input
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="description"
                    required
                    onChange={handleChange}
                />

               <input type="submit" value="create event"  />
            </form>
 
        </section>
    )
}

export default Create;
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

function Show(props) {
  const { id } = useParams();
  console.log(props.dragEvents)
  const dragEvent = props.dragEvents.find((dragEvent) => parseInt(dragEvent.id) === parseInt(id))
  
  let navigate = useNavigate();

  const [editForm, setEditForm] = useState(dragEvent);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateDragEvents(editForm,dragEvent.id);
    // redirect people back to index
    navigate("/");
  };

  const removeDragEvents = () => {
    props.deleteDragEvents(dragEvent.id);
    // redirect back to index
    navigate("/")
  };

  return (
    <div className='dragEvent-show'>
      <div className="show-info">
        <p><h1>{dragEvent?.event_title}</h1></p>
        
        <br><img className="dragEvent-image-show" src={dragEvent?.image} alt={dragEvent?.event_title} /></br>
        <br><h3>{dragEvent?.description}</h3></br>
        <p></p>
        <p><button id="delete" onClick={removeDragEvents}>DELETE</button>
        </p>
      </div>
      <hr />
      <p></p>
      {/* <img className="dragEvent-image-show" src={dragEvent?.image} alt={dragEvent?.event_title} /> */}
      <form className="show-form" onSubmit={handleSubmit}>
        Name: <input
          type="text"
          value={editForm.event_title}
          name="event_title"
          placeholder="event title"
          onChange={handleChange}
        />
        Image URL: <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
       Description: <input
          className="textBox"
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Update Event" />
      </form>
    </div>
  );
}

export default Show;
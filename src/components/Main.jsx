import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Create from "../pages/Create";

function Main(props) {
  const [dragEvents, setDragEvents] = useState([])
  const URL = "http://localhost:3002/events"

  const getDragEvents = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setDragEvents(data.events)
  }

  const createDragEvents = async (dragEvent) => {
    // POST
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(dragEvent)
    })

    // GET
    getDragEvents()
  }

  const updateDragEvents = async (dragEvent, id) => {
    await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(dragEvent)
    })

    getDragEvents()
  }

  const deleteDragEvents = async (id) => {
    await fetch(URL + "/" + id, {
      method: "DELETE"
    })

    getDragEvents()
  }

  useEffect(() => {
    getDragEvents()
  }, [])

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={<Index dragEvents={dragEvents} />} />
        <Route
          path="/create"
          element={<Create createDragEvents={createDragEvents}/>}
          />
        <Route
          path="/events/:id"
          element={
            <Show
              dragEvents={dragEvents}
              updateDragEvents={updateDragEvents}
              deleteDragEvents={deleteDragEvents}
            />
          } />
      </Routes>
    </main>
  )
}

export default Main
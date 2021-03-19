// Import all the react goodness!
import React, { useState } from 'react'

// Add Event Page component
const AddEvent = () => {

    // State for adding an event to the Log Event database
    const [newEvent, setNewEvent] = useState();

    // On change to set the value of the form to state
    const onChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    // On Submit to prevent default behavior of the form
    const onSubmit = (e) => {
        // Gotta prevent the default!
        e.preventDefault()

    };

    // Save Event function to save an event to the LogEvent database
    const saveEvent = (newEvent) => {
        // Set the event to an object and parse int the numbers
        newEvent = {
            name: newEvent.title,
            description: newEvent.description,
            location: [{ latitude: parseFloat(newEvent.latitude), longitude: parseFloat(newEvent.longitude) }],
            date: newEvent.date,
            timestamps: true,
        }
        console.log(newEvent)

        // Send fetch request to post it to the database
        fetch(`/api/location/`, {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: { "Content-Type": "application/json" }
        })
            // json that response and let the user know that it was saved
            .then((response) => response.json())
            .then((data) => {
                console.log(`${newEvent.name} saved`)
            })
    }

    // Return the component
    return (
        // Div to center the content
        <div className="container text-center justify-content-center">
            {/* Title of page */}
            <h1>Add An Event</h1>
            {/* Set up the form and prevent defualt behavior*/}
            <form className="border-dark"
                onSubmit={onSubmit}
            >
                <div className="form-group">
                    <div >
                        {/* Input forms to add the event */}
                        {/* Input for title */}
                        <input
                            onChange={onChange}
                            name="title"
                            type="text"
                            placeholder="Event Title"
                            className="form-control text-center border border-dark"
                        />
                        {/* Input for description */}
                        <input
                            onChange={onChange}
                            name="description"
                            type="text"
                            placeholder="description"
                            className="form-control text-center border border-dark"
                        />
                        {/* Input for latitude */}
                        <input
                            onChange={onChange}
                            name="latitude"
                            type="number"
                            step="0.00001"
                            placeholder="latitude"
                            className="form-control text-center border border-dark"
                        />
                        {/* Input for longitude */}
                        <input
                            onChange={onChange}
                            name="longitude"
                            type="number"
                            step="0.00001"
                            placeholder="longitude"
                            className="form-control text-center border border-dark"
                        />
                        {/* Input for date */}
                        <input
                            onChange={onChange}
                            name="date"
                            type="date"
                            placeholder="date of event"
                            className="form-control text-center border border-dark"
                        />

                        {/* Button to save the event */}
                        <button
                            onClick={() => saveEvent(newEvent)}
                            className="btn btn-primary">
                            Save Event
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddEvent

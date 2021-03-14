import React, { useState, useEffect } from 'react'

// Function to Edit the event from the database by ID
const editEvent = (newEditEvent) => {
    console.log(newEditEvent)

    fetch(`/api/location/${newEditEvent._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEditEvent),
        // Json that response
    })
        .then((response) => response.json())
        .then((data) => {
            // Console log the data
            // console.log(data)


            //SWITCH ALERT TO TOAST HERE FOR EVENT UPDATE
            alert(`${newEditEvent.name} Event Updated`)

        })

}

// Edit event Component using props
const EditEvent = (props) => {

    // Set up state
    const [newEditEvent, setNewEditEvent] = useState();
    // console.log(props.location.editEventProps)
    // console.log(props.location.editEventProps.dashboardEvent.name)

    // On edit change to update state
    const onEditChange = (e) => {
        setNewEditEvent({ ...newEditEvent, [e.target.name]: e.target.value });
    };

    // Set it to a variable
    let editEventForm = ""
    editEventForm = props.location.editEventProps.event
    // console.log(editEventForm)

    // On Submit to prevent default behavior of the form
    const onSubmit = (e) => {
        // Gotta prevent the default!
        e.preventDefault()
        // console.log(newEditEvent)
    };

    // UseEffect to call the function when the page loads
    useEffect(() => {
        setNewEditEvent(editEventForm)
    }, []);

    // Return the component
    return (
        // Div to center the content
        <div className="container text-center justify-content-center">
            {/* Title of page */}
            <h1>Edit Event</h1>

            <form className="border-dark"
                onSubmit={onSubmit}
            >
                <div className="form-group">

                    {/* Input forms to add the event */}
                    {/* Input for title */}
                    <input
                        onChange={onEditChange}
                        name="name"
                        type="text"
                        placeholder={editEventForm.name}
                        className="form-control text-center border border-dark"
                    />
                    {/* Input for description */}
                    <input
                        onChange={onEditChange}
                        name="description"
                        type="text"
                        placeholder={editEventForm.description}
                        className="form-control text-center border border-dark"
                    />
                    {/* Input for latitude */}
                    <input
                        onChange={onEditChange}
                        name="latitude"
                        type="number"
                        step="0.00001"
                        placeholder={editEventForm.location[0].latitude}
                        className="form-control text-center border border-dark"
                    />
                    {/* Input for longitude */}
                    <input
                        onChange={onEditChange}
                        name="longitude"
                        type="number"
                        step="0.00001"
                        placeholder={editEventForm.location[0].longitude}
                        className="form-control text-center border border-dark"
                    />
                    {/* Input for date */}
                    <input
                        onChange={onEditChange}
                        name="date"
                        type="date"
                        placeholder={editEventForm.date}
                        className="form-control text-center border border-dark"
                    />

                    {/* Button to save the event */}
                    < button
                        onClick={() => editEvent(newEditEvent)}
                        className="btn btn-primary">
                        Save Edits
                    </button>
                </div>
            </form>
        </div >
    )
}

export default EditEvent

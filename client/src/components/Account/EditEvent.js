import React, { useState, useEffect } from 'react'



// Function to Edit the event from the database by ID
const editEvent = (newEditEvent) => {
    console.log(newEditEvent)
    // fetch(`/api/location/${newEditEvent._id}`, {
    //     method: 'PUT'
    //     // Json that response
    // })


    fetch(`/api/location/${newEditEvent._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEditEvent),
        // Json that response
    })
        //   // Json the response
        .then((response) => response.json())
        .then((data) => {
            // Console log the data
            console.log(data)

            alert(`${newEditEvent.name} Updated`)
            //TOAST HERE FOR EVENT UPDATE
        })
    // Refresh the page so that the event is no longer shown
    // window.location.reload()

}








const EditEvent = (props) => {


    const [newEditEvent, setNewEditEvent] = useState();
    // console.log(props.location.editEventProps)
    // console.log(props.location.editEventProps.dashboardEvent.name)


    const onEditChange = (e) => {
        setNewEditEvent({ ...newEditEvent, [e.target.name]: e.target.value });
    };


    let editEventForm = ""
    editEventForm = props.location.editEventProps.dashboardEvent
    // console.log(editEventForm)

    // State for adding an event to the Log Event database
    // const [editEvent, setEditEvent] = useState();

    // On change to set the value of the form to state
    // const onChange = (e) => {
    //     setEditEvent({ ...editEvent, [e.target.name]: e.target.value });
    // };

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
                    // value={editEventForm.description}
                    />
                    {/* Input for latitude */}
                    <input
                        onChange={onEditChange}
                        name="latitude"
                        type="number"
                        step="0.00001"
                        placeholder={editEventForm.location[0].latitude}
                        className="form-control text-center border border-dark"
                    // value={editEventForm.location[0].latitude}
                    />
                    {/* Input for longitude */}
                    <input
                        onChange={onEditChange}
                        name="longitude"
                        type="number"
                        step="0.00001"
                        placeholder={editEventForm.location[0].longitude}
                        className="form-control text-center border border-dark"
                    // value={editEventForm.location[0].longitude}
                    />
                    {/* Input for date */}
                    <input
                        onChange={onEditChange}
                        name="date"
                        type="date"
                        placeholder={editEventForm.date}
                        className="form-control text-center border border-dark"
                    // value={editEventForm.date}
                    />

                    {/* Button to save the event */}
                    < button
                        // onClick={() => saveEvent(newEvent)}
                        onClick={() => editEvent(newEditEvent)}
                        // onClick={() => console.log("edits")}
                        className="btn btn-primary">

                        Save Edits
                    </button>




                </div>



            </form>


        </div >
    )
}

export default EditEvent

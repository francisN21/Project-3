import React, { useState } from 'react'

const EditEvent = () => {

    // State for adding an event to the Log Event database
    const [editEvent, setEditEvent] = useState();

    // On change to set the value of the form to state
    const onChange = (e) => {
        setEditEvent({ ...editEvent, [e.target.name]: e.target.value });
    };


    return (
        // Div to center the content
        <div className="container text-center justify-content-center">
            {/* Title of page */}
            <h1>Hi from Edit Event</h1>

            <form className="border-dark">
                <div className="form-group">

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
                        // onClick={() => saveEvent(newEvent)}
                        className="btn btn-primary">
                        Save Edits
                        </button>


                </div>



            </form>


        </div>
    )
}

export default EditEvent

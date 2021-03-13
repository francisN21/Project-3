import React, { useState } from 'react'

const AddEvent = () => {

    const [newEvent, setNewEvent] = useState();

    const onChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    // // When the form is submitted, search the API for the value of `this.state.search`
    const onSubmit = (e) => {
        // Gotta prevent the default!
        e.preventDefault()

    };
    const saveEvent = (newEvent) => {
        console.log(newEvent)
        newEvent = {
            title: newEvent.title,
            description: newEvent.description,
            latitude: parseInt(newEvent.latitude),
            longitude: parseInt(newEvent.longitude),
            date: newEvent.date,
            timestamps: true,
        }
        console.log(newEvent)
        // Send fetch request to post it to the database
        fetch(`/api/events`, {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: { "Content-Type": "application/json" }
        })
            // json that response and let the user know that it was saved
            .then((response) => response.json())
            .then((data) => {

                console.log(`${newEvent.title} saved`)
            })
    }

    return (
        <div className="container text-center justify-content-center">
            <h1>Hi from the Add Event Page</h1>
            <form className="border-dark"
                onSubmit={onSubmit}
            >
                {/* Header Component here */}

                <div className="form-group">
                    <div className="col-md-9">
                        {/* Input form for searching the GoogleBooksAPI */}
                        <input
                            onChange={onChange}
                            // value={props.search}
                            name="title"
                            type="text"
                            placeholder="Event Title"
                            className="form-control text-center border border-dark"
                        // id="search"
                        />
                        <input
                            onChange={onChange}
                            // value={props.search}
                            name="description"
                            type="text"
                            placeholder="description"
                            className="form-control text-center border border-dark"
                        // id="search"
                        />

                        <input
                            onChange={onChange}
                            // value={props.search}
                            name="latitude"
                            type="number"
                            step="0.00001"
                            placeholder="latitude"
                            className="form-control text-center border border-dark"
                        // id="search"
                        />
                        <input
                            // onChange={props.handleInputChange}
                            onChange={onChange}
                            // value={props.search}
                            name="longitude"
                            type="number"
                            step="0.00001"
                            placeholder="longitude"
                            className="form-control text-center border border-dark"
                        // id="search"
                        />
                        <input
                            // onChange={props.handleInputChange}
                            // value={props.search}
                            onChange={onChange}
                            name="date"
                            type="date"
                            placeholder="date of event"
                            className="form-control text-center border border-dark"
                        // id="search"
                        />

                        {/* Button to start the search */}
                        <button
                            onClick={() => saveEvent(newEvent)}
                            className="btn btn-outline-primary">
                            Add Event
                         </button>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default AddEvent

import React, { useState } from "react";



const ModPost = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')

    const handleOnChange =(event) => {
        const changed = event.target.id
        if (changed === 'title'){
            setTitle(event.target.value)
            console.log(title, 'title')
        }
        if (changed === 'description') {
            setDescription(event.target.value)
            console.log(description, "description")
        }
        if (changed === 'price') {
            setPrice(event.target.value)
            console.log(price, 'i am the price')
        }
        if (changed === 'location') {
            setLocation(event.target.value)
            console.log(location, 'location')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token')
    

        

    }


    return(
        <div className="newPostBox">
            <form onSubmit={handleSubmit}>
                <div className="formProp">
                <label>Title: </label>
                <input 
                    // className="title"
                    id="title"
                    onChange={handleOnChange}
                    placeholder="what's for sale"
                    value={title}
                />
                </div>
               
                <div className="formProp">
                  <label>Description:  </label>
                <input
                    // className="description"
                    id="description"
                    onChange={handleOnChange}
                    placeholder="what's it like?"
                    value={description}
                />   
                </div>
               <div className="formProp">
                 <label>Price: </label>
                <input
                    // className="price"
                    id="price"
                    onChange={handleOnChange}
                    placeholder="what's it cost?"
                    value={price}
                />
               </div>
               <div className="formProp">
                 <label>Location: </label>
                <input
                // className="location"
                id="location"
                onChange={handleOnChange}
                placeholder="where is it?"
                value={location}
                />
               </div>
               <button type="submit">Post It</button>
            </form>
        </div>
        
    )
}

export default ModPost
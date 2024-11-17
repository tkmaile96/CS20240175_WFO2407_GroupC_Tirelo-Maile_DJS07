import React from 'react'

// Define a functional component named "Meme"
export default function Meme() {
    // state to manage the properties of the current state
    const [meme, setMeme] = React.useState({
        topText: "",  // top text of the meme
        bottomText: "", // bottom text of the meme
        randomImage: "http://i.imgflip.com/1bij.jpg"  // random meme image
    })
    // state to manage the list of all meme images
    const [allMemes, setAllMemes] = React.useState([]) 

    // useEffect hook to fetch all meme images from the API
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") // fetch all meme images from the API
            .then(res => res.json()) // convert the response to JSON
            .then(data => setAllMemes(data.data.memes)) // update the state with the list of all meme images
    }, []) // empty dependency array to run the effect only once
}
// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then(data => setImage(data.message))


    }, [])

    if (!image) {
        return <h2 style={{ color: "red" }}> Loading... </h2>
    }

    return (
        <img src={image} alt="A Random Dog" />
    )
}

export default App
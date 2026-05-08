import { useEffect, useState } from "react"

export default function Gallery(props) {

    const imageList = props.imageList;

    const [index, setIndex] = useState(0);

    useEffect(() => {console.log(index)}, [index]);
    return (
        <div className="gallery">
        <img src={imageList[index]} />
        <div className="galleryButtons">
        <button onClick=
        {   
            () => {
            if (index - 1 == -1) {
                setIndex(imageList.length - 1);
            } else {
                setIndex(index - 1);
            }
        }
        }
        >Previous</button>
        <p>Image: {index + 1}/{imageList.length}</p>
        <button onClick=
        {   
            () => {
            if (index + 1 == imageList.length) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }
        }
        >Next</button>
        </div>
        </div>
    )
}
import { useEffect, useRef } from 'react'
import camera from '../assets/camera.svg'

// https://cloudinary.com/documentation/upload_widget?utm_content=upload_widget_react&utm_medium=video&utm_source=youtube&utm_campaign=devhints#how_to_set_up_and_integrate_the_upload_widget_into_your_site_or_app

function UploadWidget({ setImageList, imageList }) {

    const cloudinaryRef = useRef()
    const widgetRef = useRef()


    useEffect(() => {
        console.log("use effect")
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dmjqozd2x',
            uploadPreset: 'Cohiba'
        }, function (error, result) {
            if (result.event == "success") {
                console.log(result.info.url)
                // 
                fetch('http://localhost:3000/images', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "url": result.info.url
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        setImageList(prevImageList => [...prevImageList, data.url])
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
            else {
                console.log(result)
            }
        })

    }, [])

    return (
        <div>
            <div className=" mx-auto w-28 bg-black">
                <button className="" onClick={() => widgetRef.current.open()}>
                    <img  className="w-28 h-28"  src={camera} />
                </button>
            </div>
        </div>
    )
}

export default UploadWidget
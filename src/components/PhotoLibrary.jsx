import React, { useEffect } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';




export default function PhotoLibrary({ imageList }) {
    const cld = new Cloudinary({ cloud: { cloudName: 'dmjqozd2x' } });
    useEffect(() => {
        console.log(imageList)

    }, [imageList])

    const imagesToDisplay = imageList.map((image) => (
        <img style={{ width: '500px', height: '500px' }} key={image} src={image}></img>
    ))
    return (
        <>
        <div>
            {imagesToDisplay}
        </div>
            
        </>
    )
}

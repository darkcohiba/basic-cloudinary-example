import React, { useEffect } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
// https://cloudinary.com/documentation/advanced_image_components_tutorial
import { AdvancedImage } from '@cloudinary/react';




export default function PhotoLibrary({ imageList }) {
    const cld = new Cloudinary({ cloud: { cloudName: 'dmjqozd2x' } });
    useEffect(() => {
        console.log(imageList)

    }, [imageList])

    const imagesToDisplay = imageList.map((image) => (
        <img className="w-96 h-96"   key={image} src={image}></img>
    ))
    return (
        <>
        <div>
            {imagesToDisplay}
        </div>
            
        </>
    )
}

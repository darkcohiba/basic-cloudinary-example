import React, { useEffect } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
// https://cloudinary.com/documentation/advanced_image_components_tutorial
import { AdvancedImage } from '@cloudinary/react';
import { pixelate } from '@cloudinary/url-gen/actions/effect';




export default function PhotoLibrary({ imageList }) {
    const cld = new Cloudinary({ cloud: { cloudName: 'dmjqozd2x' } });
    // rendered as img elements
    const imagesToDisplay = imageList.map((image) => (
        <img className="max-w-md h-auto mx-auto my-2" key={image} src={image}></img>
    ))

    // rendered as cloudinary advanced image components
    const advancedImagesToDisplay = imageList.map((image) => {
        return (
            <AdvancedImage
                className="max-w-md h-auto mx-auto my-2"
                cldImg={cld.image(image)}
                key={image}
            />
        )
    })
    return (
        <>
            <div>
                {advancedImagesToDisplay}
            </div>

        </>
    )
}

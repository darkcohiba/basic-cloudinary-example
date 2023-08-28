import { useEffect, useState } from 'react'
import './App.css'
import UploadWidget from './components/UploadWidget'
import PhotoLibrary from './components/PhotoLibrary'

function App() {
  const [imageList, setImageList] = useState([])
  

  useEffect(()=>{
    fetch('http://localhost:3000/images')
    .then(response=> response.json())
    .then(allImages => allImages.forEach((image)=>{
      setImageList(prevImageList => [...prevImageList, image.publicId])
    }))
  },[])
  
  return (
    <>
      <div>
        <p className='text-3xl border-2 border-red-600 my-2 mx-auto w-1/2 text-center'>Hello</p>
        <p className='text-xl border-2 border-red-600 my-2 mx-auto w-1/2 text-center'> This is an example site for how to use cloudinary on your project to upload photos to the cloud and store the url in a database or in this example a db.json!</p>
        <p className='text-xl border-2 border-red-600 my-2 mx-auto w-1/2 text-center'>Below this text is a camera icon that will open a cloudinary widget for uploading files, the code for this widget is on the components/UploadWidget.</p>
        <UploadWidget imageList={imageList} setImageList={setImageList} />
        <p className='text-xl border-2 border-red-600 my-2 mx-auto w-1/2 text-center'>After you upload a photo to cloudinary the url will sent to our db.json and the response from the database will be used to add a photo below this text. The code for this is in components/PhotoLibrary.</p>
        <PhotoLibrary imageList={imageList} />
      </div>

    </>
  )
}

export default App

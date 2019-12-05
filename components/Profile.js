import { useState, useEffect } from 'react'
import Dashboard from "../components/Dashboard";
import { useAuth } from "../lib/db";

const profile = () => {

  const auth = useAuth()

  const [uploadState, setUploadState] = useState({ image: null, progress: 0, url: "" })

  const handleFileChange = event => {
    if (event.target.files[0]) {
      const image = event.target.files[0]
      setUploadState({ ...uploadState, image: image })
    }
  }

  const handleUpload = () => {
    const uploadImage = auth.uploadImage(uploadState.image)
    
    // setUploadState({ ...uploadState, progress: uploadImage.progress, url: uploadImage.url })
  }
  return (
    <Dashboard>
      <>
        <img
          src={uploadState.url || 'https://via.placeholder.com/400x300'}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
        <div>
          <input type="file" name="profile" onChange={handleFileChange} />
          <button onClick={handleUpload}>upload</button>
        </div>

      </>
    </Dashboard>
  )
}

export default profile
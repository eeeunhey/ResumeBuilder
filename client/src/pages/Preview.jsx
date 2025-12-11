import React, { useEffect } from 'react'
import { useParams, useState } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'

const Preview = () => {
  const {resumeId} = useParams()

  const [resumeData, setResumeData] = useState(null)

  const loadResume = () => {
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null))
  }

  useEffect(()=> {
    loadResume()
  },[])
  
  return (
    <div></div>
  )
}

export default Preview
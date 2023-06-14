import React from 'react'
import Gallery from '../components/gallery/Gallery'
import NewsLetter from '../components/newsletter/NewsLetter'
import ReUse from '../components/reUse/ReUse'

const GalleryPage = () => {
  return (
    <>
    <Gallery/>
    <ReUse name='explore school'/>
    <NewsLetter/>
    </>
  )
}

export default GalleryPage
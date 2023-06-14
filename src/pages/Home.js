import React from 'react'
import NewsLetter from '../components/newsletter/NewsLetter'
import AdmissionOne from '../components/admission/admissionhomepage/AdmissionOne'
import Intro from '../components/intro/Intro'
import Message from '../components/message/Message'
import ReUse from '../components/reUse/ReUse'
import WhyUs from '../components/whyUs/WhyUs'
import SchoolInspectionService from '../components/SIS/SchoolInspectionService'
import TrustedBy from '../components/trustedby/TrustedBy'
import Display from '../components/display/Display'
import { Posters } from '../components'

const Home = () => {
  return (
    <>
      <Display/>
      <Intro/>
      <Posters/>
      <AdmissionOne/>
      <SchoolInspectionService/>
      <Message/>
      <ReUse name='castle rock'/>
      <WhyUs/>
      <TrustedBy/>
      <NewsLetter/>
    </>
  )
}

export default Home
// import {  Notifications } from '@material-ui/icons';
import React,{useState} from 'react'
// import axios from 'axios';
import './newsletter.css'

const NewsLetter = () => {
    const [email, setEmail]= useState('');
    const [response, setResponse]= useState('');

    const handleChange = (e)=> {
        setEmail(e.target.value)
    };

    const handleSubmit = async (e)=> {
         e.preventDefault()
        //  let res = await axios.post('http://localhost:5000/newsletter',{email})    
        //   console.log(res.data)
        setResponse('subscription is succesfull')   
        setEmail('')
        
      };
    
  return (
    <section className='newsletter-container'>
        <p className='newsletter-title'>Subscribe to our newsletter</p>

        <form onSubmit={handleSubmit} className='newsletter'>
            <input type="email" placeholder='email@gmail.com' value={email} onChange={handleChange} name="email" className ="newsletter-email" />
            <button type='submit'  className='flc transition newsletter-btn'>Submit</button>
        </form>

        <span className=' newsletter-response'>{response}</span>
    </section>
  )
}

export default NewsLetter
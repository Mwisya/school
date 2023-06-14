import React,{useState} from 'react'
import { Avatar } from '@material-ui/core'
import { Phone } from '@material-ui/icons'
import './admission.css'
import { Link } from 'react-router-dom'
import Explore from '../explore/Explore'


const Admission = () => {
  const [inputs, setInputs] = useState({
    studentFirstName:'',
    studentmiddlename:'',
    studentLastname:'',
    class:'',
    age:'',
    
    parentFirstname:'',
    parentMiddlename:'',
    parentLastname:'',
    email:'',
    address:'',
    residence:'',
    telephone1:'',
    telephone2:'',
  })
  const [res, setRes] = useState('');

  const handleChange = (e)=>{
    var {name, value} = e.target;
    setInputs({...inputs , [name]:value})
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    setRes('thank you for choosing Castle Rock')

    setInputs({
      studentfirstname:'',
      studentmiddletname:'',
      studentlastname:'',
      class:'',
      age:'',
      
      parentfirstname:'',
      parentmiddlename:'',
      parentlastname:'',
      email:'',
      address:'',
      residence:'',
      telephone1:'',
      telephone2:'',
    })
}

  return (
    <main className='layout'>
      <aside className='layout-aside'>
        <Explore/>
      </aside>
      <div className=" layout-data transition admission-wrapper">
        <h2 className='registra-h2'>ADMISSIONS</h2>
        <p  className='registra-p'>Office of the Registra</p>

        <div className='registra-contact'>
          
        </div>

          <p className='admission-info'>As a parent we understand the hustle and tussle that parents go through tring tonfind a new school or transfer there childeren to better instituition. Castle Rock shares the pain and has made everything seemsless to enable parents secure admission to the foundation of knowledge.
          We have enabled online admission to make it easy for parents and guardians to secure spae for their children. 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt saepe nam mollitia  reprehenderit  praesentium pariatur quibusdam expedita eos eum similique voluptatum velit facilis, aspernatur impedit est quo accusamus sequi explicabo ratione veniam! </p>

        <h6 className='h6'>Contact Registra office</h6>
        <p className='telephone-title'> <Phone/> Telephone</p>
         <ul className="telephone">
            <li>
              <a href="tel:+254723341899" className="telephone-anchor">+(254)-72334-1899</a>
            </li>
            <li>
              <a href="tel:+254723341899" className="telephone-anchor">+(254)-72334-1899</a>
            </li>
            <li>
              <a href="tel:+254723341899" className="telephone-anchor">+(254)-72334-1899</a>
            </li>
          </ul>
         
        <form action="" onSubmit={handleSubmit}>

        {res &&
            <div className='res'>
              <span className='res-span'>
              {res}
              </span>
              <Link to={'/'} className ='return-home'>Go back to home</Link>
             </div>
          }
            <h5 className='student-details-h5'> <Avatar/> Student Details</h5>

            <input type="text"placeholder='firstName' value={inputs.studentfirstname}  onChange={handleChange} name="studentfisrtname"/>
            <input type="text" placeholder='middleName' value={inputs.studentmiddlename} onChange={handleChange} name="studentmiddlename"/>
            <input type="text" placeholder='lastName' value={inputs.studentlastname} onChange={handleChange} name="studentlastname"/>
            <input type="text" placeholder='class' value={inputs.class} onChange={handleChange} name="class"/>
            <input type="number" placeholder='age' value={inputs.age} onChange={handleChange} name="age" id="" />

            <h5 className='student-details-h5'> <Avatar/> First Parent/ Guardian</h5>

            <input type="text"placeholder='firstName' value={inputs.parentfirstname} onChange={handleChange} name="parentfirstname"/>
            <input type="text" placeholder='middleName' value={inputs.parentmiddlename} onChange={handleChange} name="parentmiddlename"/>
            <input type="text" placeholder='lastName' value={inputs.parentmiddlename} onChange={handleChange} name="parentlastname"/>
            <input type="email" placeholder='email@domain.ext' value={inputs.email} onChange={handleChange} name="email" id="" />         
            <input type="text" placeholder='residence' value={inputs.residence} onChange={handleChange} name="residence"/>
            <input type="text" placeholder='address' value={inputs.address} onChange={handleChange} name="address"/>
            <input type="text" placeholder='alternative telephone' value={inputs.telephone1} onChange={handleChange} name="telephone1"/>
           <input type="text" placeholder='alternative telephone' value={inputs.telephone2} onChange={handleChange} name="telephone2"/>

            

            <textarea name="" placeholder='Type here' onChange={handleChange} value={inputs.name} id="" cols="30" rows="10"></textarea>
            <button className='admission-submit-btn' type='submit'>SUBMIT</button>
        </form>
      </div>
    </main>
  )
}

export default Admission
import React from 'react'
import teacher from '../../assets/teacher.jpeg'
import './message.css'
import { Link } from 'react-router-dom'

const Message = () => {
    return (
        <div className='message'>
            <div className='message-wrapper'>
                <h3>message from the principal</h3>
                <div className='message-item'>
                    <img src={teacher} alt="" />
                    <div className='message-snippet'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, beatae officiis temporibus ipsum expedita odio maiores saepe nemo aut placeat hic itaque aspernatur deserunt fuga voluptates tenetur laborum voluptatibus distinctio.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime est, quis excepturi voluptatum quos in ut necessitatibus ullam voluptates nam vel eos deserunt culpa omnis dicta<br/><br/> magni commodi dolor numquam! Consequatur fugit impedit nisi ex blanditiis delectus quos ducimus harum inventore id placeat reprehenderit totam qui cumque commodi architecto velit molestias voluptatibus corporis, quisquam officia deleniti. Deserunt delectus veniam animi?</p>
                            <Link className='message-link' to={'/principal'}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message

import React from 'react'
import '../css/Course.css'

function Course({ course }) {

    const { id, title, description, date, price, image } = course;

    return (
        <div className='course'>

            <div className='course_container'>
                <img src={image} width={300} height={250} className='course_image' />
                <h4 className='title'>{title}</h4>
                <h5 className='description'>{description}</h5>

                <h3 className='price'>{price} $</h3>
                <h6>{date}</h6>

            </div>
        </div>
    )
}

export default Course
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { courses_data } from './Data'
import Course from './component/Course'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />


      <div className='course-main'>
        {
          courses_data?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }

      </div>


    </>
  )
}

export default App

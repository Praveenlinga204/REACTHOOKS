import React from 'react'
import { studentData } from '../../../data/dataset'
import './Student.css'
import StudentDetails from '../WithContext/StudentDetails'

function Student() {
    return (
        <div>
            <h1>Student Details without useContext Hook</h1>
            <div className='student-detail'>
             <div>
                <h3>Name</h3>
                <p>{studentData.name}</p>
                <h3>Age</h3>
                <p>{studentData.age}</p>
                <h3>Department</h3>
                <p>{studentData.deparment}</p>
             </div>
             <StudentDetails subjects = {studentData.subject} contactInfo = {studentData.ContactInfo}/>
            </div>
            
        </div>
    )
}

export default Student

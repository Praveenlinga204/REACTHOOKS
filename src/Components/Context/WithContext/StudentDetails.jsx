import React from 'react'


function StudentDetails({subject,ContactInfo}) {
    return (
        <div>
            <h3>Subject</h3>
            <ul className='subject'>
                {subject.map((subject,index)=>{
                    return <li key={index}>{subject}</li>
                })}
            </ul>
            <ContactInfo ContactInformation={ContactInfo}/>
        </div>
    )
}

export default StudentDetails

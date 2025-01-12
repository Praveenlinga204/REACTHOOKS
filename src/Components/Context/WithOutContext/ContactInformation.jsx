import React from 'react'

function ContactInformation({ContactInfo}) {
    const {phone,address}=ContactInfo;
    return (
        <div>
            <h3>Contact Information</h3>
            <p>PhoneNO {phone}</p>
            <p>Address: {address}</p>
        </div>
    )
}

export default ContactInformation

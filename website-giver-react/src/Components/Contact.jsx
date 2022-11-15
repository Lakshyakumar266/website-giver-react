import React, { useState } from 'react'
import "./Style/contact.css"

function Contact(props) {
  const [contacts, setcontacts] = useState({ name: "", email: "", subject: "", issue: "", datetime: "" })

  const date = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  const handleSubmit = (e) => {
    setcontacts({ ...contacts, datetime: date() });
    e.preventDefault()
    fetch('http://localhost:3020/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: contacts.name,
        email: contacts.email,
        subject: contacts.subject,
        issus: contacts.issue,
        datetime: contacts.datetime
      })
    })
      .then(response => response.json())
      .then((data) => console.log(data))
  }

  const onChange = (e) => {
    setcontacts({ ...contacts, [e.target.name]: e.target.value })
  }
  return (<>
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-heading">Feel Free To Contact:</h1>
        <div className="form-group flex flex-collem">
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id="name" placeholder="Enter Your Name" onChange={onChange} value={contacts.name} />
        </div>
        <div className="form-group flex flex-collem">
          <label htmlFor="email">Email:</label>
          <input type="text" name='email' id="email" placeholder="Enter Your Email" onChange={onChange} value={contacts.email} />
        </div>
        <div className="form-group flex flex-collem">
          <label htmlFor="subject">Subject:</label>
          <input type="text" name='subject' id="subject" placeholder="Enter Subject" onChange={onChange} value={contacts.subject} />
        </div>
        <div className="form-group flex flex-collem">
          <label htmlFor="issus">Writw Why You Want To Contact Me For:</label>
          <textarea name="issue" id="issus" placeholder="Describe Your issus" onChange={onChange} value={contacts.issue} ></textarea>
        </div>
        <div className="form-group flex flex-collem">
          <div id="recaptcha"></div>
        </div>
        <div className="form-group flex flex-collem">
          <b>
            <input type="submit" value="Submit Now" />
          </b>
        </div>
      </form>
    </div>
  </>)
}

export default Contact
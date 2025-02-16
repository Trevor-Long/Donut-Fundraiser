import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3499988a-7d3f-4171-930c-28c8beb03052");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }Swal.fire({
      title: "Success!",
      text: "Thank you for supporting St. Anthony's!",
      icon: "success"
    });
  };

  return (
    <section className="contact"> 
    <form onSubmit={onSubmit}>
      <h2>St. Anthony's "Digital Dozens"!</h2>
      <div className="input-box">
          <label>Full Name: </label>
          <input type="text" className="field" placeholder='Enter your name' name= 'name' required></input>
      </div>

      <div className="input-box">
          <label>Email Address: </label>
          <input type="email" className="field" placeholder='Enter your email' name= 'email' required></input>
      </div>

      <div className="input-box">
          <label>Number of dozen: </label>
          <input type="number" className="field" placeholder='How many dozen?' name= 'amount' required></input>
      </div>
      <h4>Each dozen is $14. Click <a href='https://www.paypal.me/StAnthonytheGreatRH'>this link</a> to submit payment. Be sure to put your name in the purchase memo.</h4>
      <button type="submit">Confirm donuts</button>

    </form>

    </section>
  )
}

export default Contact
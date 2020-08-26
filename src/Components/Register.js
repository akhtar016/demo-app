import React, { useState } from "react";
import Analytics from "npm-vineet";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Click Event Tracking

 

   function handleSubmit(e) {
    e.preventDefault();

  const analytics = new Analytics("07b3aaa4-f2d0-489a-be46-cf3200d0afce");

   let formData = {
      name,
      email,
     };

  //   // analytics.track({
  //   //   userId: "qweasdcxz",
  //   //   event: "Registration Button Clicked",
  //   //   name: formData.name,
  //   //   email: formData.email,
  //   // });

    analytics.identify({
      userId: 'qweasdcxz',
    traits: {
         name: formData.name,
        email: formData.email,
         plan: 'Enterprise',
        friends: 42
      }
    });

    window.alert(`Name : ${formData.name}, Email: ${formData.email}`);
  }

  return (
    <div className="my-5">
      <h1 className="text-center my-4">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

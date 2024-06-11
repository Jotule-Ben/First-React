import React, { useState } from "react";

const Form = () => {
  //  Create state for the form and error collection
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});

  const validateFn = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "password is required";
      isValid = false;
    } else if (formData.password.length < 4) {
      tempErrors.password = "Password length must be 4 or more";
      isValid = false;
    }
    setError(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFn()) {
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setError({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        {/* password */}
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

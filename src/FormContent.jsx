import { useState } from 'react';
import './assets/FormCss.css'

const MyForm = () => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button className="btn" type="submit" style={{color:'white'}}>Submit</button>
    </form>
  );
};

export default MyForm;

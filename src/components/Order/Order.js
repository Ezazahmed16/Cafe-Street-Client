import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import GoogleLocation from './GoogleLocation';

const Order = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [numOfPersons, setNumOfPersons] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Format current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    // Display form input values and formatted date
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Number of Persons:', numOfPersons);
    console.log('Email:', email);
    console.log('Date:', formattedDate);

    toast.success('Successfully Sent. We will inform you soon.')

    // Here, you can perform any additional logic, like sending data to an API


    // Reset form fields after submission
    setName('');
    setNumber('');
    setNumOfPersons('');
    setEmail('');
    setDate('');
  };

  return (
    <div className="hero min-h-screen bg-">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-5 min-w-full">
        <div className="">
          <GoogleLocation></GoogleLocation>
        </div>

        <div className="card flex-shrink-0 shadow-2xl bg-base-100 ">
          <h1 className="text-3xl md:text-5xl font-bold text-center pt-3">Book A Table</h1>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="form-control my-1">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-accent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control my-1">
                <input
                  required
                  type="text"
                  placeholder="Your Number"
                  className="input input-bordered input-accent"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <select
                required
                className="select select-accent w-full my-1"
                value={numOfPersons}
                onChange={(e) => setNumOfPersons(e.target.value)}
              >
                <option disabled value="">
                  How Many Person?
                </option>
                <option value="2 Person">2 Person</option>
                <option value="4 Person">4 Person</option>
                <option value="5+ Person">5+ Person</option>
              </select>
              <div className="form-control my-1">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-accent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control my-1">
                <input
                  required
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent max-w-xs m-auto" type="submit">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

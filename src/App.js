import React from 'react';
import './style.css';
import formik from 'formik';

export default function App() {
  return (
    <div>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>
        Registration Page
      </h1>
      <div className="container-fluid">
        <form>
          <div className="form-group">
            <label>FirstName</label>
            <input type="text" className="form-control"></input>
          </div>

          <div className="form-group">
            <label>SecondName</label>
            <input type="text" className="form-control" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="form-group">
            <label>password</label>
            <input type="password" className="form-control" />
          </div>

          <div className="form-group">
            <label>Re-enter Password</label>
            <input input type="password" className="form-control" />
          </div>
          <button
            type="submit"
            className=" btn btn-primary mt-4 ms-2 mb-6 ps-2"
          >
            signin
          </button>
          <button type="reset" className="btn btn-danger ms-2 mt-4 mb-6 ps-2">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

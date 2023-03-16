import React from 'react';
import {Form} from 'react-bootstrap';


const login = () => {
  return (
    <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Firstname</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Middlename</label>
          <input
            type="text"
            className="form-control"
            placeholder="Middle name"
          />
        </div>

        <div className="mb-3">
          <label>Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <div className="mb-3">
          <label>Birth Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="Birth date"
          />
        </div>

        <div className="mb-3">
          <label>Reference</label>
          {/* <input
            type="text"
            className="form-control"
            placeholder="Birth date"
          /> */}
          <select className="form-control" id="inputGroupSelect01">
            <option selected>Select</option>
            <option value="1">Chintan Kothari</option>
            <option value="2">Mohit Darji</option>
            <option value="3">Parag Thacker</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Mobile number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Mobile number"
          />
        </div>






        {/* <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div> */}
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
  )
}

export default login
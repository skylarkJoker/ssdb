import React from "react";
import Link from "next/link";

class Add extends React.Component {
  state = {
    fname: "",
    lname: "",
    address: "",
    phone: "",
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <p>Add a new member</p>
        <form className="form-grid">
          <input placeholder="First Name" type="text"></input>
          <input placeholder="Last Name" type="text"></input>
          <input placeholder="Address" type="text"></input>
          <input placeholder="Phone" type="text"></input>
          <input placeholder="Email" type="email"></input>

          <Link href="/classinfo">
            <button>CANCEL</button>
          </Link>
          <button>ADD</button>
        </form>
        <style jsx>{`
          .container {
            font-family: "Roboto", sans-serif;
            padding: 40px 40px 0 40px;
            text-align: center;
          }

          .form-grid {
            color: #707070;

            display: grid;
            grid-gap: 10px;
            grid-template-rows: auto auto auto;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
          }

          .form-grid input {
            padding: 10px 10px;

            border-top: none;
            border-left: none;
            border-right: none;
            border-color: #bbb;
            grid-column: 1 / span 2;
          }

          .form-grid button {
            border-radius: 4px;
            background-color: #40b1a2;
            border: none;
            padding: 20px 10px;
            color: #fff;
            max-height: 50px;
          }
        `}</style>
      </div>
    );
  }
}

export default Add;

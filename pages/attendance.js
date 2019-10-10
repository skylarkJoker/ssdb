import React from "react";

const Attendance = () => (
  <div className="grid-container">
    <div className="page-header">
      <p className="page-title">Attendance</p>
      <p className="page-subtitle">Hightlight the members who are present</p>
    </div>
    <ul className="list">
      <li className="member">
        <img className="profile" src="/pic.svg" alt="user image"></img>
        <p className="name">Andrew Aardvark</p>
        <p className="address">Vernon's Estate</p>
      </li>
      <li className="member">
        <img className="profile" src="/pic.svg" alt="user image"></img>
        <p className="name">Brandon Marks</p>
        <p className="address">Vernon's Estate</p>
      </li>
    </ul>
    <button className="done-button">DONE</button>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
      .grid-container {
        font-family: 'Roboto', sans-serif;
        color: #707070;

        display: grid;
        grid-row-gap: 10px;
        grid-template-rows: 1fr 3fr 1fr;
        grid-template-columns: 1fr 6fr 1fr;
        min-height: 100vh;
      }
      
      .list{
        grid-column: 2 / 3;
      }
      .page-header,
      .done-button {
        align-self: end;
        grid-column: 2 /  3 ;
      }
      .page-title{
        font-size: 20px;
        margin: 0;
      }
      .page-subtitle {
        font-size: 12px;
        margin-bottom: 40px;
      }

      .page-title,
      .page-subtitle {
        text-align: center;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      .member {
        background-color: #fff;
        box-shadow: 0px 3px 6px #00000029;
        margin-bottom: 10px;
        padding: 0 0 5px 40px;
        max-height: 40px;

        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 30px auto;
        grid-column-gap: 10px;
      }
      .member p {
        margin: 0;
        color: #707070;
      }

      .member .name {
        font-size: 12px;
      }

      .member .address {
        font-weight: 300;
        font-size: 10px;
      }

      .member .profile {
        width: 30px;
        margin auto 0;
        grid-row: 1 / -1;
        grid-column: 1 / 2;
      }

      button {
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

export default Attendance;

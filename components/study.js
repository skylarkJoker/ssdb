import React from "react";
import Link from "next/link";

const Study = props => (
  <div className="container">
    <div className="grid-container">
      <div className="page-header">
        <p className="page-title">Study Record</p>
        <p className="page-subtitle">Highlight the members who studied</p>
      </div>
      <ul className="list">
        {props.members
          .filter(member => {
            return member.status === "present";
          })
          .map(member => (
            <li
              key={member.id}
              className={
                props.active.includes(member.id) ? "selected member" : "member"
              }
              onClick={props.toggleStudied.bind(this, member.id)}
            >
              <img className="profile" src="/pic.svg" alt="user image"></img>
              <p className="name">{member.name}</p>
              <p className="address">{member.address}</p>
            </li>
          ))}
      </ul>
      <button className="done-button" onClick={props.prevStep}>
        PREV
      </button>
      <Link href="/classinfo">
        <button className="done-button">DONE</button>
      </Link>
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
      .container{
        padding: 40px 40px 0 40px;
      }

      .grid-container {
        font-family: 'Roboto', sans-serif;
        color: #707070;

        display: grid;
        grid-gap: 10px 50px;
        grid-template-rows: 1fr 3fr 1fr;
        grid-template-columns: 1fr 1fr;
        min-height: 600px;
      }
      .page-header, .list{
        grid-column: 1 / -1;
      }
      
      .page-header,
      .done-button {
        align-self: end;
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
        padding: 5px 0 5px 40px;
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

      .selected{
        background-color: #FFB530;
      }
      .selected p{
        color: #fff;
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

export default Study;

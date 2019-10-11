import React from "react";

const MemberInfo = props => (
  <div className="container">
    <div className="grid-container">
      <div className="member-header">
        <div className="member-letter">
          <p>A</p>
        </div>
        <p className="member-name">Andrew Aardvark</p>
        <p className="member-info">
          Vernon's Estate
          <br />
          Phone: (268)000-0000 Email: aardvark@nothing.com
        </p>
      </div>
      <div className="list">
        <p className="list-title">Attendance</p>
        <ul>
          <li className="record">
            <p className="date">Saturday 12, October 2019</p>
            <p className="study">Studied</p>
          </li>
          <li className="record">
            <p className="date">Saturday 19, October 2019</p>
            <p className="study">Absent</p>
          </li>
          <li className="record">
            <p className="date">Saturday 26, October 2019</p>
            <p className="study">Studied</p>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");
      .container {
        padding: 40px 40px 0 40px;
      }

      .grid-container {
        font-family: "Roboto", sans-serif;
        color: #707070;

        display: grid;
        grid-gap: 10px;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
        justify-content: center;
      }

      .member-header {
        text-align: center;
        grid-row: 1;
        grid-column: 1 / span 3;
      }

      .member-header .member-letter {
        background-color: #ec9800;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        margin: 0 auto;
        color: #fff;
        line-height: 70px;
      }
      .member-header .member-letter p {
        font-size: 40px;
        margin: 0;
        vertical-align: middle;
      }

      .member-header .member-name {
        font-weight: 400;
        font-size: 20px;
      }

      .member-header .member-info {
        font-weight: 300;
        font-size: 12px;
      }

      .member-header .member-info span {
        font-weight: 400;
      }
      .list {
        grid-row: 4;
        grid-column: 1 / span 3;
      }

      .list .list-title {
        font-size: 20px;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .record {
        background-color: #fff;
        box-shadow: 0px 3px 6px #00000029;
        margin-bottom: 10px;
        padding: 0 0 5px 40px;
        max-height: 40px;
      }
      .record p {
        margin: 0;
        color: #707070;
      }

      .record .date {
        font-size: 12px;
      }

      .record .study {
        font-weight: 300;
        font-size: 10px;
      }
    `}</style>
  </div>
);

export default MemberInfo;

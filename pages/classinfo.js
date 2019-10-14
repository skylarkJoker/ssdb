import React from "react";
import Link from "next/link";

class ClassInfo extends React.Component {
  state = {
    members: [
      {
        id: "1",
        name: "Andrew Aardvark",
        address: "Vernon's Estate",
        status: "absent",
        studied: "no_study"
      },
      {
        id: "2",
        name: "Brandon Marks",
        address: "Vernon's Estate",
        status: "absent",
        studied: "no_study"
      },
      {
        id: "3",
        name: "Charles King",
        address: "Vernon's Estate",
        status: "absent",
        studied: "no_study"
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <div className="grid-container">
          <div className="class-header">
            <div className="class-letter">
              <p>E</p>
            </div>
            <p className="class-name">Class Esther</p>
            <p className="class-info">
              division I | <span>12</span> members
            </p>
          </div>
          <div className="leader">
            <p className="name">Andrew Aardvark</p>
            <p className="role">Teacher</p>
          </div>
          <div className="leader">
            <p className="name">Brandon Marks</p>
            <p className="role">Secretary</p>
          </div>
          <div className="leader">
            <p className="name">Charles King</p>
            <p className="role">Care Coordinator</p>
          </div>
          <Link href="/add">
            <button>ADD MEMBER</button>
          </Link>
          <button className="report-button" disabled>
            REPORT
          </button>
          <Link href="/mark">
            <button>ATTENDANCE</button>
          </Link>
          <div className="list">
            <p className="list-title">Members</p>
            <ul>
              {this.state.members.map(member => (
                <Link key={member.id} href="/p/[id]" as="/p/memberinfo">
                  <li className="member">
                    <img
                      className="profile"
                      src="/pic.svg"
                      alt="user image"
                    ></img>
                    <p className="name">{member.name}</p>
                    <p className="address">{member.address}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");
      .container{
        padding: 40px 40px 0 40px;
      }

      .grid-container {
        font-family: "Roboto", sans-serif;
        color: #707070;

        display: grid;
        grid-gap: 10px;
        grid-template-rows: auto auto auto 4fr;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
      }

      .class-header{
        text-align: center;
        grid-row: 1;
        grid-column: 1 / span 3;
      }

      .class-header .class-letter{
        background-color: #EC9800;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        margin: 0 auto;
        color: #fff;
        line-height: 70px;
      }
      .class-header .class-letter p{
        font-size: 40px;
        margin: 0;
        vertical-align: middle;
      }

      .class-header .class-name{
        font-weight: 400;
        font-size: 20px;
      }

      .class-header .class-info{
        font-weight: 300;
        font-size: 12px;
      }

      .class-header .class-info span{
        font-weight: 400;
      }

      .leader .name{
        color: #000;
      }

      .leader .role{
        font-weight: 300;
      }

      .leader {
        font-size: 12px;
      }

      .options{
        grid-row: 3;
        grid-column: 1 / span 3;
      }

      button{
        border-radius: 4px;
        background-color: #FFC55C;
        border: none;
        padding: 0 5px;
        color: #fff;
        min-height: 30px;
        font-size: 12px;
      }

      .report-button{
        background-color: #ddd;
      }

      .list{
        grid-row: 4;
        grid-column: 1 / span 3;
      }

      .list .list-title{
        font-size: 20px;
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

    `}</style>
      </div>
    );
  }
}

export default ClassInfo;

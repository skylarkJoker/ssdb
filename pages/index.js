import React from "react";

const Home = () => (
  <div>
    <form>
      <div className="form-grid">
        <img className="logo item1" src="/ssdb.svg" alt="ssdb logo"></img>
        <input className="item2" placeholder="Username" type="text"></input>
        <input className="item3" placeholder="Password" type="password"></input>
        <button className="item4" type="submit">
          Login
        </button>
      </div>
    </form>
    <style jsx>{`
      .logo {
        max-width: 150px;
        margin: 0 auto;
      }

      .form-grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: 2fr auto auto 2fr;
        min-height: 600px;
        align-items: end;
      }

      .item1 {
        grid-row: 1 / 2;
        grid-column: 2 / 4;
      }

      .item2,
      .item3,
      .item4 {
        grid-column: 2 / 4;
      }

      .form-grid input {
        padding: 10px 10px;

        border-top: none;
        border-left: none;
        border-right: none;
        border-color: #bbb;
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

export default Home;

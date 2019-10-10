import React from "react";

const ClassInfo = () => (
  <div>
    <div>
      <div>
        <p>E</p>
      </div>
      <h3>Class Esther</h3>
      <h5>division I | 12 members</h5>
    </div>
    <div>
      <ul>
        <li>
          <p>Andrew Aardvark</p>
          <p>Teacher</p>
        </li>
        <li>
          <p>Brandon Marks</p>
          <p>Secretary</p>
        </li>
        <li>
          <p>Charles King</p>
          <p>Care Coordinator</p>
        </li>
      </ul>
      <button>ADD MEMBER</button>
      <button>GENERATE REPORT</button>
    </div>
    <div>
      <ul>
        <li className="member">
          <img></img>
          <p className="name">Andrew Aardvark</p>
          <p className="address">Vernon's Estate</p>
        </li>
        <li className="member">
          <img></img>
          <p className="name">Brandon Marks</p>
          <p className="address">Vernon's Estate</p>
        </li>
      </ul>
    </div>
  </div>
);

export default ClassInfo;

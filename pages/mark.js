import React from "react";
import Attendance from "../components/attendance";
import Missing from "../components/Missing";
import Study from "../components/Study";

class Mark extends React.Component {
  state = {
    step: 1,
    attn: [],
    mssn: [],
    stdy: [],
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

  toggleAttendance = id => {
    const temp = this.state.members;
    const hAct = this.state.attn;
    if (hAct.includes(id)) hAct.splice(hAct.indexOf(id), 1);
    else hAct.push(id);
    temp.forEach(member => {
      if (member.id == id) {
        if (member.status == "absent") member.status = "present";
        else member.status = "absent";
      }
    });
    this.setState({ members: temp, attn: hAct });
  };

  toggleMssnAccounted = id => {
    const temp = this.state.members;
    const hAct = this.state.mssn;
    if (hAct.includes(id)) hAct.splice(hAct.indexOf(id), 1);
    else hAct.push(id);
    temp.forEach(member => {
      if (member.id == id) {
        if (member.status == "absent") member.status = "missing_accounted";
        else member.status = "absent";
      }
    });
    this.setState({ members: temp, mssn: hAct });
  };

  toggleStudied = id => {
    const temp = this.state.members;
    const hAct = this.state.stdy;
    if (hAct.includes(id)) hAct.splice(hAct.indexOf(id), 1);
    else hAct.push(id);
    temp.forEach(member => {
      if (member.id == id) {
        if (member.studied == "no_study") member.studied = "studied";
        else member.studied = "no_study";
      }
    });
    this.setState({ members: temp, stdy: hAct });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  render() {
    const { step } = this.state;
    const { members } = this.state;

    switch (step) {
      case 1:
        return (
          <Attendance
            active={this.state.attn}
            members={this.state.members}
            toggleAttendance={this.toggleAttendance}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <Missing
            active={this.state.mssn}
            toggleMssnAccounted={this.toggleMssnAccounted}
            members={this.state.members}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Study
            active={this.state.stdy}
            toggleStudied={this.toggleStudied}
            members={this.state.members}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      default:
        return <Attendance nextStep={this.nextStep} />;
    }
  }
}

export default Mark;

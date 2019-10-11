import React from "react";
import Attendance from "../components/attendance";
import Missing from "../components/Missing";
import Study from "../components/Study";

class Mark extends React.Component {
  state = {
    step: 1,
    active: [],
    members: [
      {
        id: "1",
        name: "Andrew Aardvark",
        address: "Vernon's Estate",
        status: "present"
      },
      {
        id: "2",
        name: "Brandon Marks",
        address: "Vernon's Estate",
        status: "absent"
      },
      {
        id: "3",
        name: "Charles King",
        address: "Vernon's Estate",
        status: "absent"
      }
    ]
  };

  toggleAttendance = id => {
    const temp = this.state.members;
    const hAct = this.state.active;
    if (hAct.includes(id)) hAct.splice(hAct.indexOf(id), 1);
    else hAct.push(id);
    temp.forEach(member => {
      if (member.id == id) {
        if (member.status == "absent") member.status = "present";
        else member.status = "absent";
      }
    });
    this.setState({ members: temp, active: hAct });
  };

  toggleMssnAccounted = id => {
    const temp = this.state.members;
    temp.forEach(member => {
      if (member.id == id) {
        if (member.status == "absent") member.status = "missing_accounted";
        else member.status = "absent";
      }
    });
    console.log(temp);
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
            active={this.state.active}
            members={this.state.members}
            toggleAttendance={this.toggleAttendance}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <Missing
            members={this.state.members}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Study
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

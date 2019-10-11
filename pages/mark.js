import React from "react";
import Attendance from "../components/attendance";
import Missing from "../components/Missing";
import Study from "../components/Study";

class Mark extends React.Component {
  state = {
    step: 1,
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
          <Attendance members={this.state.members} nextStep={this.nextStep} />
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

import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Shift from "./shift";
class Day extends Component {
  state = {
    day: "Monday"
  };

  renderShift = shift => {
    const comp = <Shift shift={shift}></Shift>;
    return comp;
  };

  renderLocation = (day, location) => {
    const shifts = [];

    const comp = (
      <Grid container direction="column">
        {shifts.map(shift => {
          return <Grid item>{this.renderShift(shift)}</Grid>;
        })}
      </Grid>
    );

    return comp;
  };

  renderDay = day => {
    const locations = [];
    const comp = locations.map(location => {
      return <Grid item>{this.renderLocation(day, location)}</Grid>;
    });

    return comp;
  };

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Typography>Day Name</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            {this.renderDay(this.state.day)}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Day;

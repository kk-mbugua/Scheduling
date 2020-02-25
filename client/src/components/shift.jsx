import React, { Component } from 'react';
import {Typography} from "@material-ui/core"
class Shift extends Component {
    state = {  }

    getDivStyle = () => {
        const styleObj = {

        }

        return styleObj
    }
    render() { 
        return ( 
            <div>
                <Typography style={this.getDivStyle()}> Name </Typography>
            </div>
         );
    }
}
 
export default Shift;
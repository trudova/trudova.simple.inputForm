import React, { Component } from 'react'
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { pink100 } from 'material-ui/styles/colors';
export class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values,handelChange} = this.props;
        return (
            <div>
                <MuiThemeProvider>
            <React.Fragment>
                <TextField hintText='Enter your occupation' floatingLabelText=' occupation' onChange={handelChange('occupation')}
                defaultValue={values.occupation}/><br/>
                <TextField hintText='Enter your city' floatingLabelText='city' onChange={handelChange('city')}
                defaultValue={values.city}/><br/>
                <TextField hintText='Enter your bio ' floatingLabelText=' bio' onChange={handelChange('bio')}
                defaultValue={values.bio}/><br/>
                <RaisedButton label='continue' primary={false} style={styles.button} onClick={this.continue}/>
                <RaisedButton label='back' primary={false} style={styles.button} onClick={this.back}/>


            </React.Fragment>
         
                </MuiThemeProvider>
                
            </div>
        )
    }
}
const styles={
    button:{
        margin:15,
       
    }
}
export default FormPersonalDetails

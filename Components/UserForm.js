import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm'
export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''

    }
    // next step to the next page
    nextStep =()=>{
        const{step} = this.state;
        this.setState({
            step: step+1
        });
    }
    //go back to the previos step
    prevStep =()=>{
        const{step} = this.state;
        this.setState({
            step: step -1
        })
    }
    //handel fields change
    handelChange = input => e =>{
        this.setState({[input]: e.target.value});
    }



    render() {
        const {step} = this.state;
        const {firstName, lastName,email,occupation,city,bio} = this.state;
        const values = {firstName, lastName,email,occupation,city,bio};

        switch(step){
            case 1:
                return (
                    <FormUserDetails nextStep={this.nextStep} handelChange={this.handelChange} values={values}/>
                )
            case 2:
                return (
                    <FormPersonalDetails nextStep={this.nextStep}
                    prevStep={this.prevStep}  
                    handelChange={this.handelChange} values={values}/>
                )
            case 3:
                return (
                    < Confirm 
                    prevStep={this.prevStep}  
                     values={values}/>
                )
                                         
        }
    }
}

export default UserForm

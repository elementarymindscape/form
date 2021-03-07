import React from 'react';
import "./form-styles.css"

const initialState = {
                        prefix: '',
                        FullName: '',
                        MobileNumber: '',
                        AddressLine: '',
                        Town: '',
                        City: '',
                        PostCode: '',
                        Country: '',
                        CustomerType: '',
                        SourceLead: '',
                        Comments: '',
                        nameERROR: "",
                        mobileERROR: "",
                    }

class Form extends React.Component {
    
    state = initialState;

     Validate = () =>
     {
        let nameERROR= "";
        let mobileERROR="";
        
        if(typeof this.state.FullName !== "undefined"){
            if(!this.state.FullName.match(/^[a-zA-Z]+$/)){
               nameERROR = "Please Enter your Name (No Special Characters Allowed)";
            }        
         }
         if (typeof this.state.MobileNumber !== "undefined") {
                 var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(this.state.MobileNumber)) {
            
            mobileERROR = " Please enter only number. ";
             }
            else if(this.state.MobileNumber.length !== 10){
            mobileERROR = "Please enter valid phone number.";
            }
          }

          if (nameERROR || mobileERROR){
              this.setState({nameERROR, mobileERROR})
              return false;
          }
        return true;
    }
    handleChange = e => {
        this.setState(
        {[e.target.name]: e.target.value}
        );
    };
    onSubmit= e =>
    {
        e.preventDefault();
        const isValid = this.Validate();
        if(isValid){
            console.log ( this.state);
            alert(" Form Submitted ")
            //clear form
            this.setState(initialState);
        }
        console.log(this.state);   
    };
  
    render(){
        return(
            <form onSubmit={this.onSubmit} >
                <div>
                <input className="input-box"
                    name= 'prefix'
                    placeholder='Prefix (Mr./Mrs./Ms.)'
                    value={this.state.prefix}
                    onChange={ e => this.handleChange(e)}                
                />
                 <input className="address-box"
                name= 'AddressLine'
                    placeholder='Address'
                    value={this.state.AddressLine}
                    onChange={ e => this.handleChange(e)}                  
                />
                <br />
                <input className="input-box" 
                    name= 'FullName'
                    placeholder='Full Name'
                    value={this.state.FullName}
                    onChange={ e => this.handleChange(e)}              
                />
                <div style={{ fontSize:10, color: "red"}}> { this.state.nameERROR } </div>
                <input className="input-box"
                    name= 'MobileNumber'
                    placeholder=' Mobile Number '
                    value={this.state.MobileNumber}
                    onChange={ e => this.handleChange(e)}                
                /> 
                <div style={{ fontSize:10, color: 'red'}} >{ this.state.mobileERROR }</div>
                <input className="input-box"
                name= 'Town'
                    placeholder='Town'
                    value={this.state.Town}
                    onChange={ e => this.handleChange(e)}    
                    />
               < br />
                <input className="input-box"
                name= 'PostCode'
                    placeholder='PostCode'
                    value={this.state.PostCode}
                    onChange={ e => this.handleChange(e)}                  
                />
                <div style={{ fontSize:10, color: 'red'}} >{ this.state.pinCodeERROR }</div>
               
                <input className="input-box"
                name= 'Country'
                    placeholder='Country'
                    value={this.state.Country}
                    onChange={ e => this.handleChange(e)}                  
                />
                
                <input className="input-box"
                name= 'CustomerType'
                    placeholder='Customer Type (New/Old)'
                    value={this.state.CustomerType}
                    onChange={ e => this.handleChange(e)}                
                />
                <input className="input-box"
                name= 'City'
                    placeholder='City'
                    value={this.state.City}
                    onChange={ e => this.handleChange(e)}                   
                />
                <input className="input-box"
                    name= 'Comments' 
                    placeholder='Comments'
                    value={this.state.Comments}
                    onChange={ e => this.handleChange(e)}                
                />
              
                <button className="Submit" onClick= {e => this.onSubmit(e)}>SUBMIT</button>
                </div>
            </form>
         


           
        )
    }
}

 
export default Form;

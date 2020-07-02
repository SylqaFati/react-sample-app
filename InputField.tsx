import * as React from 'react'
import { render } from '@testing-library/react'

export class InputEmail extends React.Component<{}, IState>
{

    constructor(props: {}){
        super(props);
        this.state ={currentEmail : "",
    emails: []};
    }

    handleSubmit(e: any) {
    e.preventDefault();
    this.setState({ currentEmail:"",
    emails: [...this.state.emails, this.state.currentEmail]
    })
}
renderContact(){
    return this.state.emails.map((email: string, index:number) =>{

        return (
          <div key={index}>
            {" "}
            <table>
        <thead>
      
         <b> email is :</b>  {email}
            <tr>
              <td><b> First Name:</b> Fati</td>
            </tr>
            <tr>
              <td> <b> Last Name:</b> Sylqa</td>
              </tr>
              <tr>
              <td> <b>Contact No:</b> 777 322 214</td>
              </tr>
            <img src ="ph.png" width ="300px" height ="200 px"/>
              </thead>
              </table>

         
          </div>

          
        );
    });
}

render(){
    return (
        <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type = "text" placeholder ="enter your email"
                value ={this.state.currentEmail}
                onChange = {e => this.setState({currentEmail: e.target.value})}
                />
                <button type = "submit">Submit</button>
            </form>
            <section>{this.renderContact()}</section>
        </div>
    )
}
}

interface IState {
    currentEmail: string;
    emails: Array<string>
}
import React, { Component } from 'react';
import './Login.css';
import pet from '../images/pet.PNG'
import { Navigate, useNavigate } from 'react-router-dom';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:null,
      passworld:null,errormessage:'',
   
    }}
  connect(){
    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://petstore.swagger.io/v2/user/login?username="+this.state.username +"&password="+this.state.password, requestOptions)
  .then(response => response.json())
  .then(result =>{ if (result.success === false) {
    console.log("oups");
    this.setState({ errormessage:result.message})
    } else {

   
         this.props.history.push("/");
    }
    })
    .catch(error => console.log('error', error));}
  
  render() {
    return (
      <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
           
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <img class="img" src={pet} />
              
              <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Sign In</h3>
                  </div>
                  
                </div>
                <form class="signin-form" onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.connect();}}

>
                  <div class="form-group mb-3">
                    <label class="label" for="name">Username</label>
                    <input type="text" class="form-control" placeholder="Username" onChange={(e) => { this.setState({username: e.target.value }) }}required/>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input type="password" class="form-control" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} required/>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                  </div>
               
                  
                </form>
                <p class="text-center">Not a member? <a data-toggle="tab" href="/signup">Sign Up</a></p>
                {
                                                        this.state.errormessage !== '' ?
                                                            <div className="alert alert-danger">
                                                                {this.state.errormessage}
                                                            </div>
                                                            :
                                                            <div ></div> }
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

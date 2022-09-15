import React from "react";
import { Link } from "react-router-dom";
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Mail, Lock, Check } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from 'react-router-dom'
import swal from 'sweetalert';
import { Token } from "prismjs";

class LoginJWT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobile: "",
      password: "",
      username: "",
      _id:'',
    };
  }
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  
  checkHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() == "") {
      this.setState({
        username: e.target.value.trim(),
        mobile: "",
        email: "",
      });
      return;
    }
    if (isNaN(e.target.value.trim())) {
      if (
        /^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
          e.target.value.trim()
        ) === false
      ) {
        //invalid email
        this.setState({
          username: e.target.value.trim(),
          mobile: "",
          email: "",
          _id:'',
        });
      } else {
        // valid mail
        this.setState({
          username: e.target.value.trim(),
          mobile: "",
          email: e.target.value.trim(),
          _id:'',
        });
      }
    } else {
      //valid mobile
      this.setState({
        username: e.target.value.trim(),
        mobile: e.target.value.trim(),
        email: "",
        _id:'',
      });
    }
  };

  handleLogin = (e) => {
    e.preventDefault();
    axios
    .post("http://15.206.122.110:4000/api/user/login", this.state)
      // headers: {
      //   "Content-Type":"application/json"
      // },
    // })
    .then((response) => { 
      // console.log(response.data.user);
      console.log(response.data.data);
      if(response.data.status === 200){
      
        swal(response.data.message)
        localStorage.setItem("auth", response.data.data?._id);
        //history.push("/#/");
        window.location.replace("/#/");
      }else if(response.data.status === 401){
        swal(response.data.message)
      }
      //history.push("/");
      
    })
 
    .catch((error) => {
      console.log(error.response);
      //swal("error!", "Invalied! Please enter valied Phone No. or Password", "error");
    });
};
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form  onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                  type="text"
                  name="username"
                  placeholder="E-mail / Phone"
                  value={this.state.username}
                  onChange={this.checkHandler}
                  required
              />
                <div className="form-control-position">
                  <Mail size={15} />
                </div>
                <Label>Email / Phone</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlechange}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
                required
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Route render={({ history}) => (
                <Button.Ripple 
                  color="primary" 
                  type="submit">
                  Login
              </Button.Ripple>
            )}/>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT);
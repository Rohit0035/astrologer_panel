import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Label
} from "reactstrap"
import { history } from "../../../history"
import resetImg from "../../../assets/img/pages/reset-password.png"
import "../../../assets/scss/pages/authentication.scss"
import axios from "axios";
import { tokenize } from "prismjs"

class ResetPassword extends React.Component {
  
  state = {
    // email:"",
    password:"",
    confirm_password:""
   
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({ isError: false });
    this.setState({ [e.target.name]: e.target.value });
  };

  //  validatePhone = (text) => {
  //  if (/^[6789][0-9]{9}$/.test(text)) {
  //     return true;
  //   }
  //   return false;
  // };

  handleResetPassword = async (e) => {
    e.preventDefault();
    const {email,password,confirm_password} = this.state;
    
    //var isValid = await this.validatePhone( email)
    // if(isValid === false){
    //   this.setState({ isError: true });
    //    return true;
    // }

    var payload = {
      // email : email,
      password : password,
      confirm_password :confirm_password,
    }
     let { id } = this.props.match.params;

    axios
    .post(`http://15.206.122.110:4000/api/user/changepassadmin/629b43e4b481821324ad3006`, payload)
    .then((response) => {
      console.log(response.data);
      if(response.data.status === true){
        console.log(response.data.otp);
        this.props.history.push("/")
      }

    })
    .catch((error) => {
      console.log(error.response);
    });
};


  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-5"
              >
                <img className="px-5 mx-2" src={resetImg} alt="resetImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 py-50">
                  <CardHeader className="pb-1 pt-1">
                    <CardTitle>
                      <h4 className="mb-0">Reset Password</h4>
                    </CardTitle>
                  </CardHeader>
                  <p className="px-2 auth-title">
                    Please enter your email address and new password to
                    continue.
                  </p>
                  <CardBody className="pt-1">
                    <Form>
                      {/* <FormGroup className="form-label-group">
                        <Input type="email" name="email" placeholder="Email"
                        onChange={this.handlechange}
                         required />
                        <Label>Email</Label>
                      </FormGroup> */}
                      <FormGroup className="form-label-group">
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.handlechange}
                          required
                        />
                        <Label>Password</Label>
                      </FormGroup>
                      <FormGroup className="form-label-group">
                        <Input
                          type="password"
                          name="confirm_password"
                          placeholder="Confirm Password"
                          onChange={this.handlechange}
                          required
                        />
                        <Label>Confirm Password</Label>
                      </FormGroup>
                      <div className="d-flex justify-content-between flex-wrap flex-sm-row flex-column">
                        <Button.Ripple
                          block
                          className="btn-block"
                          color="primary"
                          outline
                          onClick={e => {
                            e.preventDefault()
                            this.props.history.push("/pages/login")
                          }}
                        >
                          Go Back to Login
                        </Button.Ripple>
                        <Button.Ripple
                          block
                          color="primary"
                          type="submit"
                          className="btn-block mt-1 mt-sm-0"
                          onClick={this.handleResetPassword}
                        >
                          Reset
                        </Button.Ripple>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default ResetPassword
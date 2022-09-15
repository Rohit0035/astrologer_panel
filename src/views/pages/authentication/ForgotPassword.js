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
import fgImg from "../../../assets/img/pages/forgot-password.png"
import { history } from "../../../history"
import "../../../assets/scss/pages/authentication.scss"
import { Route } from 'react-router-dom'
import axios from "axios";

class ForgotPassword extends React.Component {
  state = {
    mobile:"",
    errorValidation:'please enter correct mobile number',
    isError:false
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({ isError: false });
    this.setState({ [e.target.name]: e.target.value });
  };

   validatePhone = (text) => {
   if (/^[6789][0-9]{9}$/.test(text)) {
      return true;
    }
    return false;
  };

  handleOtp = async (e) => {
    e.preventDefault();
    const {mobile} = this.state;
    var isValid = await this.validatePhone(mobile)
    if(isValid === false){
      this.setState({ isError: true });

       return true;
    }
    var payload = {
      mobile : mobile
    }
    axios
    .post("http://15.206.122.110:4000/api/dealer/signupsendotp", payload)
    .then((response) => {
      console.log(response.data);
      if(response.data.status === 'success'){
        console.log('#@@@@@@@@@@@@@@@',response.data.otp);
      this.props.history.push("/pages/otp-verify/?&mobile="+mobile+"&id="+response.data._id)

        // localStorage.setItem("auth", response.data.data?._id);
        // window.location.replace("/#/");
      }

    })
    .catch((error) => {
      console.log(error.response);
    });
};

  render() {
    const {isError,errorValidation} = this.state;
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
                className="d-lg-block d-none text-center align-self-center"
              >
                <img src={fgImg} alt="fgImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 py-1">
                  <CardHeader className="pb-1">
                    <CardTitle>
                      <h4 className="mb-0">Recover your password</h4>
                    </CardTitle>
                  </CardHeader>
                  <p className="px-2 auth-title">
                    Please enter your  Mobile Number and we'll send you
                    OTP,  for  reset your password.
                  </p>
                  <CardBody className="pt-1 pb-0">
                    <Form>
                      <FormGroup className="form-label-group">
                        <Input type="number" name="mobile"
                         value={this.state.mobile}
                         onChange={this.handlechange} placeholder="Mobile Number" required />
                        <Label>Mobile Number</Label>
                        <span style={{color:'red'}}>{isError ? errorValidation: null}</span>
                      </FormGroup>
                      <div className="float-md-left d-block mb-1">
                      <Route render={({ history}) => (
                        <Button.Ripple
                          color="primary"
                          outline
                          className="px-75 btn-block"
                          onClick={() => this.props.history.push("/pages/login")}
                          // onClick={() => history.push("/pages/login")}
                        >
                          Back to Login
                        </Button.Ripple> 
                        )}
                     />
                      </div>
                      <div className="float-md-right d-block mb-1">
                        <Button.Ripple
                          color="primary"
                          type="submit"
                          className="px-75 btn-block"
                          onClick={this.handleOtp}
                        >
                          Recover Password
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
export default ForgotPassword

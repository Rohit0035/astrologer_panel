import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  // FormGroup,
  // CustomInput,
  
} from "reactstrap";
import { Route } from "react-router-dom";
import Select from "react-select"
// import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

const dealerName = []

export class AddNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: null,
      desc: "",
    };
  }

  async componentDidMount() {
    //dealer List
    //let array =[]
    //let obj ={}
    axiosConfig
      .get("/dealer/alldealers")
      .then((response) => {
        
        console.log(response);
        //this.setState({ dealerN: response.data.data });
        
        // eslint-disable-next-line no-unused-expressions
        response.data?.data?.map((dealerp) => {
         let obj = {
            label:dealerp.dealer_name,
            value:dealerp._id
          }
          dealerName.push(obj)

      })})
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (dealer) => {
    this.setState({ dealer }, () =>
      console.log(`Option selected:`, this.state.dealer)
    );
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(
        "/admin/addnotification",
        this.state
        // {
        //   headers: {
        //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/notification/notificationList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { dealer } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Notification
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/notification/notificationList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
              <Col md="6" sm="12">
              <Label>Dealer List</Label>
              <Select
               
                isMulti
                type="select"
                name="dealer"
                className="React"
                classNamePrefix="select"
                options={dealerName}
                value={dealer}
                onChange={this.handleChange}
               
               /> 
            </Col>
                
                <Col lg="12" md="12" className="mb-2">
                  <Label>Descripiton</Label>
                  <Input
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add Notification List
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddNotification;

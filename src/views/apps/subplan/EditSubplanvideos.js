
import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import { data } from "jquery";
// import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class EditSubplanvideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
        _id: "",
        video_link: "",
        associated_plan: "",
     
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewoneplan/${id}`)
      .then((response) => {
        console.log(response.data.data.desc);
        this.setState({
            _id: response.data.data._id,

            video_link: response.data.data.video_link,
            associated_plan: response.data.data.associated_plan,
            
        
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    axiosConfig
      .post(`/admin/Editplan/${id}`, this.state, 
      // {
      //   headers: {
      //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
      //   },
      // }
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/subPlan/SubPlanVideos");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                    Material List
                </BreadcrumbItem> */}
                <BreadcrumbItem active>Edit Traning Video</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Plan Video
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/subplan/SubPlanVideos")
                      
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
            <Row className="m-2">
            <Col lg="6" md="6" className="mb-2">
                  <Label>Video Link </Label>
                  <Input
                    type="text"
                    name="video_link"
                    value={this.state.video_link}
                    onChange={this.changeHandler}
                  />
                </Col>
              
                <Col lg="6" md="6" className="mb-2">
                  <Label>Associated Plan </Label>
                  <Input
                  readOnly
                    type="text"
                    name="associated_plan"
                    value={this.state.associated_plan}
                    onChange={this.changeHandler}
                  />
                </Col>
          </Row>
              <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

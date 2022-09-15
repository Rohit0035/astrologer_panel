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
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

export default class EditAstrologer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: "",
      desc: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewoneabout/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          desc: response.data.data.desc,

          //   dealer: response.data.data.dealer,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_aboutus/${id}`, this.state)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/astrology/AstrologerList`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Astrologer"
          breadCrumbParent="Home"
          breadCrumbActive=" Edit Astrologer "
        />
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
                <BreadcrumbItem active>Edit Astrologer</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Astrologer
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/astrology/AstrologerList")
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
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Astrologer Name"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Mobile No."
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Experience</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Astrologer Name"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Age</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Age"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Language</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Astrologer Name"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expart</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Age"
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

import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import Textarea from "../../forms/form-elements/textarea/Textarea";

class AddAstrologer extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {

    //     dealer: "",
    //     desc: "",

    // };
    this.state = {
      dealerN: [],
    };
  }

  async componentDidMount() {
    //dealer List
    axiosConfig
      .get("/dealer/alldealers")
      .then((response) => {
        console.log(response);
        this.setState({ dealerN: response.data.data });
      })
      .catch((error) => {
        console.log(error);
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

    axiosConfig
      .post(
        "/admin/addabout",
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
        this.props.history.push("/app/about/AllaboutUs");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Astrologer"
          breadCrumbParent="Home"
          breadCrumbActive="Add Astrologer "
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Astrologer
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Submit
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

export default AddAstrologer;

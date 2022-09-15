import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  CustomInput,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import Textarea from "../../forms/form-elements/textarea/Textarea";

class EdithelpusForm extends React.Component {
  render() {

    return (
      <div>
      <Breadcrumbs
        breadCrumbTitle="HelpUs"
        breadCrumbParent="Home"
        breadCrumbActive=" HelpUs"
      />
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
               HelpUs
            </h1>
          </Col>
          <Col>
            <Route
              render={({ history }) => (
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() =>
                    history.push("/app/ro-configuration/basicDetailsList")
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
                <Label> Name</Label>
                <Input
                  type="text"

                ></Input>
              </Col>


              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Email</Label>
                <Input
                  type="text"

                ></Input>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Mobile</Label>
                <Input
                  type="number"

                ></Input>
              </Col>
              <Col lg="6" md="6" sm="12" className="mb-2">
                <Label>Descriptions</Label>
                <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    rows="3"
                    placeholder="Textarea"
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
    )
  }
}

export default EdithelpusForm

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
import "../../../assets/scss/pages/users.scss"
import axios from "axios";

class ViewHelpUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs/api/admin/viewoneequairy/${id}`)

      .then(response => {

         //console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {

    return (
      <div>
      <Breadcrumbs
        breadCrumbTitle="HelpUs Details"
        breadCrumbParent="HelpUs"
        breadCrumbActive=" HelpUs Details"
      />
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
               HelpUs Detail
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
            <ul className="hp-list">
              <li className="hp-list-1">Name:   <span className="hp-list-1">{this.state.data.name}</span></li>
              <li className="hp-list-1">Email:   <span  className="hp-list-1">{this.state.data.email}</span></li>
              <li className="hp-list-1">Mobile:   <span  className="hp-list-1">{this.state.data.mobile}</span></li>
              <li className="hp-list-1">Date:      <span  className="hp-list-1">{this.state.data.createdAt}</span></li>
              <li className="hp-list-1">Description:
                 <p className="hp-list-1">
                    {this.state.data.desc}
                 </p>
              </li>
            </ul>
        </CardBody>
      </Card>
     </div>
    )
  }
}

export default ViewHelpUs

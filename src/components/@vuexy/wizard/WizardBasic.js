import React from "react";
import Wizard from "./WizardComponent";
// import { useParams } from 'react-router-dom';
import {
  // Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
// import Checkbox from "../checkbox/CheckboxesVuexy";
import { Search } from "react-feather";
import axios from "axios";
class WizardBasic extends React.Component {
  constructor(props) {
    super(props);
    //alert(this.props.match.params.id)
    this.state = {
      any_other_facility: "",
      mobile: "",
      dealer_name: "",
      email: "",
      location: "",
      master_oil_company: "",
      omc_customer_code: "",
      puc_machine: "",
      state: "",
      total_no_air_machine: "",
      total_no_bay: "",
      total_no_mpd: "",
      total_no_nozzles: "",
      total_no_tanks: "",
      district: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`/http://3.108.185.7/nodejs/api/dealer/viewonedealershipform/${id}`)
      .then((response) => {
        console.log(response);

        this.setState({
          // dealer_name: response.data.data.dealer_name,
          // any_other_facility: response.data.data.any_other_facility,
          // mobile: response.data.data.mobile,
          // email: response.data.data.email,
          // location: response.data.data.location,
          // master_oil_company: response.data.data.master_oil_company,
          // omc_customer_code: response.data.data.omc_customer_code,
          // puc_machine: response.data.data.puc_machine,
          // state: response.data.data.state,
          // total_no_air_machine: response.data.data.total_no_air_machine,
          // total_no_bay: response.data.data.total_no_bay,
          // total_no_mpd: response.data.data.total_no_mpd,
          // total_no_nozzles: response.data.data.total_no_nozzles,
          // total_no_tanks: response.data.data.total_no_tanks,
          // district: response.data.data.district,
          // dealer_name: response.data.data.dealer_name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //   async componentDidMount() {
  //     var url = window.location.href;
  // var id = url.substring(url.lastIndexOf('/') + 1);
  //     let payload = {
  //       "tank_map": [
  //       ]
  //   }
  //     await axios.post("http://3.108.185.7/nodejs/api/dealer/addeditadvancedealershipform/"+id,payload).then((response) => {
  //       const rowData = response;
  //       console.log('@@@@@@@@@RRRRRRRRRRRRRSSSSSSSSSSS',rowData.data.data);
  //       this.setState({ rowData : rowData.data.data });
  //     });
  //   }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axios
      .post(
        `/http://3.108.185.7/nodejs/api/dealer/addeditadvancedealershipform/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push("/app/material/materialList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // submitHandler = e => {
  //   e.preventDefault();
  //   let { id } = this.props.match.params;
  //   axios
  //     .post(`/editmaterial/${id}`, this.state)
  //     .then(response => {
  //       console.log(response);
  //       // swal("Success!", "Submitted SuccessFull!", "success");
  //       // this.props.history.push("/app/material/materialList");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  render() {
    // const favColors = Object.keys(this.state.sizes)
    // .filter(key => this.state.sizes[key])
    // .join(", ");

    const steps = [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Name of Dealership </Label>
                <Input
                  type="text"
                  name="dealer_name"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Mobile No </Label>
                <Input
                  type="text"
                  name="mobile"
                  // value={this.state.data.mobile}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Email Id </Label>
                <Input
                  type="email"
                  name="email"
                  // value={this.state.data.email}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label> City Name </Label>
                <CustomInput type="select" name="select">
                  <option>New York</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                  <option>Boston</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> OMC Customer Code </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
              {/* <FormGroup>
                  <Label> Job Title </Label>
                  <Input type="text" />
                </FormGroup> */}
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Master Oil Company </Label>
                <CustomInput type="select" name="select">
                  <option>New York</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                  <option>Boston</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> District </Label>
                <CustomInput type="select" name="select">
                  <option>New York</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                  <option>Boston</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Location </Label>
                <CustomInput type="select" name="select">
                  <option>New York</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                  <option>Boston</option>
                </CustomInput>
              </FormGroup>
            </Col>
            {/* <Col md="6" sm="12">
                <FormGroup>
                  <Label> District </Label>
                  <CustomInput type="select" name="select" >
                    <option>New York</option>
                    <option>Chicago</option>
                    <option>San Francisco</option>
                    <option>Boston</option>
                  </CustomInput>
                </FormGroup>
              </Col> */}
          </Row>
        ),
      },
      {
        title: 2,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Total No. of MPD</Label>
                <Input
                  type="text"
                  name="total_no_mpd"
                  // value={this.state.data.total_no_mpd}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label> Total No. of Bay </Label>
                <Input
                  type="text"
                  name="total_no_bay"
                  // value={this.state.data.total_no_bay}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Total No. of Nozzles</Label>
                <Input
                  type="text"
                  name="total_no_nozzles"
                  // value={this.state.data.total_no_nozzles}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label>Total No. of Tanks</Label>
                <Input
                  type="text"
                  name="total_no_tanks"
                  // value={this.state.data.total_no_tanks}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Total No. of Air Machines</Label>
                <Input
                  type="text"
                  name="total_no_air_machine"
                  // value={this.state.data.total_no_air_machine}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>PUC Machine</Label>
                <Input
                  type="text"
                  name="puc_machine"
                  // value={this.state.data.puc_machine}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Any other facilities</Label>
                <Input
                  type="text"
                  name="any_other_facility"
                  // value={this.state.data.any_other_facility}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Select Tank </Label>
                <CustomInput type="select" name="select">
                  <option>Tank 1</option>
                  <option>Tank 2</option>
                  <option>Tank 3</option>
                  <option>Tank 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Product Mapped to Tank </Label>
                <CustomInput type="select" name="select">
                  <option>Tank 1</option>
                  <option>Tank 2</option>
                  <option>Tank 3</option>
                  <option>Tank 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Capacity</Label>
                <CustomInput type="select" name="select">
                  <option>Tank 1</option>
                  <option>Tank 2</option>
                  <option>Tank 3</option>
                  <option>Tank 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Select MPD</Label>
                <CustomInput type="select" name="select">
                  <option>MPD 1</option>
                  <option>MPD 2</option>
                  <option>MPD 3</option>
                  <option>MPD 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Map correct Bay to MPD</Label>
                <CustomInput type="select" name="select">
                  <option>MPD 1</option>
                  <option>MPD 2</option>
                  <option>MPD 3</option>
                  <option>MPD 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Select BAY</Label>
                <CustomInput type="select" name="select">
                  <option>BAY 1</option>
                  <option>BAY 2</option>
                  <option>BAY 3</option>
                  <option>BAY 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Map Correct Nozzle to each Bay</Label>
                <CustomInput type="select" name="select">
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Select Nozzles</Label>
                <CustomInput type="select" name="select">
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Map Tank to Nozzles</Label>
                <CustomInput type="select" name="select">
                  <option>Tank 1/Tank 2/Tank 3</option>
                  <option>Tank 1/Tank 2/Tank 3</option>
                  <option>Tank 1/Tank 2/Tank 3</option>
                  <option>Tank 1/Tank 2/Tank 3</option>
                </CustomInput>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Add Payment modes </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Select from the below </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Mode </Label>
                <CustomInput type="select" name="select">
                  <option>Upi</option>
                  <option>Cesh</option>
                  <option>Online</option>
                  <option>Bank</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Bank </Label>
                <CustomInput type="select" name="select">
                  <option>Punb bank</option>
                  <option>Hdb bank</option>
                  <option>Hdfc bank</option>
                  <option>Punb bank</option>
                </CustomInput>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 4,
        content: (
          <Row>
            <Col md="3" sm="12">
              <FormGroup>
                <Label> Add Credit Customer </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label> Name of the Customer </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label> Credit Limit </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label> Credit Term Fuel </Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label> Credit Term Lube </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label> Address </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="3" sm="12">
              <FormGroup>
                <Label> Local ID </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Document Upload </Label>
                <Input type="text" className="input p-5" />
                <input type="file" placeholder="Document Upload" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Any Agreement signed can be uploaded </Label>
                <Input type="text" className="input p-5" />
                <input type="file" placeholder="Upload" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Vehicle No.</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Multiple Entry can be done for tracking</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Local Guranter Name</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label></Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Local Guranter Name</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Local Guranter Number</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>List of Customer added with come here</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col lg="6" md="12">
              <FormGroup>
                <Label>Search Option</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button.Ripple color="primary">
                      <Search size={15} />\
                    </Button.Ripple>
                  </InputGroupAddon>
                  <Input type="text" />
                  <InputGroupAddon addonType="append">
                    <Button.Ripple color="primary">Search !</Button.Ripple>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 5,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Nature </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Manufacturer </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Purchased on</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 6,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Name of the Bank </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Credit Limit from Bank</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Interest Rate </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Account No</Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>IFSC Code </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Credit Offer from Bank Valid upto </Label>
                <Input
                  type="text"
                  // value={this.state.data.dealer_name}
                  // onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Document Upload </Label>
                <Input type="text" className="input p-5" />
                <input type="file" placeholder="Document Upload" />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
    ];

    // this.submitHandler = this.submitHandler.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.onChangeHandler1 = this.onChangeHandler1.bind(this);
    // this.onChangeHandler2 = this.onChangeHandler2.bind(this);
    // this.onChangeHandler3 = this.onChangeHandler3.bind(this);
    // this.onChangeHandler4 = this.onChangeHandler4.bind(this);

    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Wizard
            enableAllSteps
            onFinish={() => alert("submitted")}
            steps={steps}
          />
        </CardBody>
      </Card>
    );
  }
}

export default WizardBasic;

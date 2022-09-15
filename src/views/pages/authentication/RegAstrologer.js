import React from "react"
// import render  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
// import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
// import astrologinbg  from "../../assets/img/astrologin-bg.jpg";
import Select from 'react-select';
// import { colourOptions } from '../astrology/selectdata/data.ts';

const options = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
];

const colourptions  = [
     { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
     { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
     { value: 'purple', label: 'Purple', color: '#5243AA' },
     { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
     { value: 'orange', label: 'Orange', color: '#FF8B00' },
     { value: 'yellow', label: 'Yellow', color: '#FFC400' },
     { value: 'green', label: 'Green', color: '#36B37E' },
     { value: 'forest', label: 'Forest', color: '#00875A' },
     { value: 'slate', label: 'Slate', color: '#253858' },
     { value: 'silver', label: 'Silver', color: '#666666' },
   ];

class Regastrologer extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'React',
    };


  }


  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e) {
    e.preventDefault()
  }


  render() {

    const { selectedOption } = this.state;

    return (
          <section className=""
          style={{
            width: "100%",
            backgroundColor:"#fff",
            padding:"50px 0px",
            height: "100%",
            backgroundSize:"cover"
          }}
        >
         <Container>
              <section className="ptb-30">
                <div className="stp-1">
                    <h2 className="th-1">AstroVipra</h2>
                    <h4 className="th-2">Astrologer Register</h4>
                  <div id="stepper1" class="bs-stepper">
                    <div class="bs-stepper-header">
                      <div class="step" data-target="#test-l-1">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">1</span>
                          <span class="bs-stepper-label">Personal Details</span>
                        </button>
                      </div>
                      <div class="line"></div>
                      <div class="step" data-target="#test-l-2">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">2</span>
                          <span class="bs-stepper-label">Skill Details</span>
                        </button>
                      </div>
                      <div class="line"></div>
                      <div class="step" data-target="#test-l-3">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">3</span>
                          <span class="bs-stepper-label">Other Details</span>
                        </button>
                      </div>
                    </div>
                    <div class="bs-stepper-content">
                      <form onSubmit={this.onSubmit}>
                        <div id="test-l-1" class="content">
                            <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Name*</label>
                                          <input type="email" class="form-control"  placeholder="Name" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Email address*</label>
                                          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Mobile Number*</label>
                                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="223232323232" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Upload Image*</label>
                                          <input type="file" class="form-control" id=""  />
                                    </div>
                               </Col>
                            </Row>
                          <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                        </div>
                        <div id="test-l-2" class="content">
                               <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Gender*</label>
                                          <Select
                                              value={selectedOption}
                                              options={options}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">DOB*</label>
                                          <input type="date" class="form-control" id="" placeholder="" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Primary Skills*</label>
                                            <Select
                                              defaultValue={[colourptions[2], colourptions[3]]}
                                              isMulti
                                              name="colors"
                                              options={colourptions}
                                              className="basic-multi-select"
                                              classNamePrefix="select"
                                            />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">All Skills*</label>
                                            <Select
                                              defaultValue={[colourptions[2], colourptions[3]]}
                                              isMulti
                                              name="colors"
                                              options={colourptions}
                                              className="basic-multi-select"
                                              classNamePrefix="select"
                                            />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Language*</label>
                                            <Select
                                              defaultValue={[colourptions[2], colourptions[3]]}
                                              isMulti
                                              name="colors"
                                              options={colourptions}
                                              className="basic-multi-select"
                                              classNamePrefix="select"
                                            />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Experience in years*</label>
                                          <input type="text" class="form-control" id="" placeholder="1 yerars" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">How many hours you can contribute daily?*</label>
                                          <input type="text" class="form-control" id="" placeholder="2 hour" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Where did you hear about Astrotalk?*</label>
                                          <input type="text" class="form-control" id="" placeholder="Eg: Youtube, Facebook" />
                                    </div>
                               </Col>
                               <Col md="12">
                                   <p className="mb-0 mt-10">Are you working on any other online platform?*</p>
                                   <Row>
                                       <Col md="6">
                                           <div class="form-group mtb-10">
                                              <label for="exampleInputEmail1">Name of platform</label>
                                              <input type="text" class="form-control" id="" placeholder="Company Name" />
                                            </div>
                                       </Col>
                                       <Col md="6">
                                           <div class="form-group mtb-10">
                                              <label for="exampleInputEmail1">Monthly Earning</label>
                                              <input type="text" class="form-control" id="" placeholder="Eg: 20,000" />
                                            </div>
                                       </Col>
                                   </Row>
                               </Col>


                              </Row>
                          <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                        </div>
                        <div id="test-l-3" class="content">
                            <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Why do you think we should onboard you?*</label>
                                          <input type="text" class="form-control" id="" placeholder="Why we should onboard you" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">What is a suitable time for interview*</label>
                                          <input type="text" class="form-control" id="" placeholder="Suitable time for an interview" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Which city do you currently live in?</label>
                                          <input type="text" class="form-control" id="" placeholder="City" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Main source of business (other than astrology)*</label>
                                          <Select
                                              value={selectedOption}
                                              options={options}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Select your highest qualification*</label>
                                          <Select
                                              value={selectedOption}
                                              options={options}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Degree/Diploma*</label>
                                          <Select
                                              value={selectedOption}
                                              options={options}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">College/School/University*</label>
                                          <input type="text" class="form-control" id="" placeholder="Enter your College/School/University name" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">From where did you learn Astrology?</label>
                                          <input type="text" class="form-control" id="" placeholder="Where did you learn an Astrology" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Instagram profile link</label>
                                          <input type="text" class="form-control" id="" placeholder="Please let us know your Instagram profile" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Facebook profile link</label>
                                          <input type="text" class="form-control" id="" placeholder="Please let us know your Facebook profile" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">LinkedIn profile link</label>
                                          <input type="text" class="form-control" id="" placeholder="Please let us know your LinkedIn profile" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Youtube channel link</label>
                                          <input type="text" class="form-control" id="" placeholder="Please let us know your Youtube channel" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Name of the person who referred you?</label>
                                          <input type="text" class="form-control" id="" placeholder="Enter name" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Minimum Earning Expectation from AstroVipra*</label>
                                          <input type="text" class="form-control" id="" placeholder="Minimum monthly earning expectation" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Website profile link</label>
                                          <input type="text" class="form-control" id="" placeholder="Enter your website url" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Maximum Earning Expectation from AstroVipra*</label>
                                          <input type="text" class="form-control" id="" placeholder="Maximum monthly earning expectation" />
                                    </div>
                               </Col>
                               <Col md="12">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Long bio*</label>
                                          <textarea type="text" class="form-control" id="" placeholder="Please let us know more about you" />
                                    </div>
                               </Col>
                              </Row>
                              <p className="ptb-10">
                                  You can reach out to us for Astrologer onboarding support team at onboarding@astrovipra.com in case of any issues or queries.
                              </p>
                          <button type="submit" class="btn btn-primary mt-5">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
          </Container>
          </section>
    );
  }
}


export default Regastrologer;

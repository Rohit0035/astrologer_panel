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
import axios from "axios";
import { history } from "../../../../history";
// import swal from "sweetalert";

export default class AddMOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tank: "", 
        
    };
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();

    axios
    .post("http://3.108.185.7/nodejs/api/dealer/addtank/", this.state)
      .then(response => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/setting/tank/tankList");
        
      })
      .catch(error => {
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
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/setting/tank/tankList" tag="a">
                  Tank List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Tank</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Tank
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/setting/tank/tankList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
        
                  <Label>Tank</Label>
                  <Input
                    required
                    type="text"
                    name="tank"
                    placeholder="tank no."
                    value={this.state.tank}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
            
             
              
            
                </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
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


// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
  
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import axios from "axios";
// import { history } from "../../../../history";
// // import swal from "sweetalert";
// export default class AddTank extends Component {
//   constructor(props) {
//     super(props);
        
//     this.state = {
//     addTextBox:[{}],
//     tank:"",
//     };
//   }

// addControls()
// {
//     this.setState((
//         {
//             addTextBox:[...this.state.addTextBox,{}]
//         }
//     ))
// }
// delControls(i)
// {
//   this.state.addTextBox.splice(i,1);
//   this.setState({})
// }
  
    
      
//       submitHandler = e => {
//         e.preventDefault();
    
//         axios
//           .post("http://3.108.185.7/nodejs/api/dealer/addtank/", this.state)
//           .then(response => {
//             console.log(response);
//             // swal("Success!", "Submitted SuccessFull!", "success");
//             this.props.history.push("/app/setting/tank/tankList");
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       };
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 <BreadcrumbItem href="/app/setting/tank/tankList" tag="a">
//                   Tank List
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Edit Bank</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Edit Tank
//               </h1>
//             </Col>
//             <Col>
//               <Button
//                 className=" btn btn-danger float-right"
//                 onClick={() => history.push("/app/setting/tank/tankList")}
//               >
//                 Back
//               </Button>
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Tank No.</Label>
//                   {this.state.addTextBox.map(()=>(
//                     <div>
//                       <input
//                       type="text"
//                       placeholder="Tank no."
//                       name="tank"

//                       // value={this.state.tank}
//                       // onChange={this.changeHandler}
//                       />
//                       <button><strong>X</strong></button>
//                       </div>
//                   ))}
               
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button onClick={()=>this.addControls()}
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Add 
//                   </Button>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
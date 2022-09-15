
// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// // import { history } from "../../../history";
// // import { data } from "jquery";
// // import swal from "sweetalert";
// import { Route } from "react-router-dom";

// export default class EditTermCondition extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dealer: "",
//       desc: "",
     
//     };
//   }
//   componentDidMount() {
//     let { id } = this.props.match.params;
//     axiosConfig
//       .get(`/admin/viewonecondition/${id}`)
//       .then((response) => {
//         console.log(response);
//         this.setState({
//             desc: response.data.data.desc,
         
//         //   dealer: response.data.data.dealer,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     let { id } = this.props.match.params;
//     axiosConfig
//       .post(`/admin/edit_termscondition/${id}`, this.state)
//       .then((response) => {
//         console.log(response);
//         // swal("Success!", "Submitted SuccessFull!", "success");
//         this.props.history.push(`/app/termscondition/TermConditionList`);
        
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
//                     Material List
//                 </BreadcrumbItem> */}
//                 <BreadcrumbItem active>Edit Term & Condition</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Edit Term & Condition
//               </h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() =>
//                       history.push("/app/termscondition/TermConditionList")
//                     }
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Label>Descriptions</Label>
//                 <Input
//                   type="textarea"
//                   name="desc"
//                   value={this.state.desc}
//                   onChange={this.changeHandler}
//                 ></Input>
//               </Col>
          
//               <Row>
//                 <Col
//                   lg="6"
//                   md="6"
//                   sm="6"
//                   className="mb-2"
//                   style={{ marginLeft: "15px" }}
//                 >
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Update
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }



import React from "react";
import { Card, CardBody, Col, Row, Form, Button } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from 'sweetalert';

class AddTermsCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      desc: " ",
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: (convertToRaw(editorState.getCurrentContent())),
    });
  };

   componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewonecondition/${id}`)
      .then((response) => {
        console.log(response.data.data.desc);
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
      .post(`/admin/edit_termscondition/${id}`, this.state)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/termscondition/TermConditionList`);
        
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <Card>
        <Row className="m-2">
        <Col>
            <h1 col-sm-6 className="float-left">
              Edit Term And Condition 
            </h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() =>history.push("/app/termscondition/TermConditionList")
              }
            >
              Back
            </Button>
          </Col>
        </Row>
        <CardBody>
          <Form onSubmit={this.submitHandler}>

          {/* <Editor
  editorState={this.state.editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>; */}

            <Editor
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              // value={this.state.desc}
              editorState={this.state.editorState}

              onEditorStateChange={this.onEditorStateChange}
              toolbar={{
                options: ["inline", "blockType", "fontSize", "fontFamily"],
                inline: {
                  options: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "monospace",
                  ],
                  bold: { className: "bordered-option-classname" },
                  italic: { className: "bordered-option-classname" },
                  underline: { className: "bordered-option-classname" },
                  strikethrough: { className: "bordered-option-classname" },
                  code: { className: "bordered-option-classname" },
                },
                blockType: {
                  className: "bordered-option-classname",
                },
                fontSize: {
                  className: "bordered-option-classname",
                },
                fontFamily: {
                  className: "bordered-option-classname",
                },
              }}
            />
            <br/>
            <Button color="primary"> Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default AddTermsCondition;
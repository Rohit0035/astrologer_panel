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

      dealer: "",
      desc: "",
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: (convertToRaw(editorState.getCurrentContent())),
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("desc", this.state.desc);

    axiosConfig
      .post("/admin/add_termscondition", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/termscondition/TermConditionList");
        // alert("Privacy Policy Added Successfully !");
        swal("Good job!", "You clicked the button!", "success");

      })
      .catch((error) => {
        console.log(error);
      });

    // this.state.editorState.getCurrentContent().getPlainText();
  };

  render() {
    return (
      <Card>
        <Row className="m-2">
        <Col>
            <h1 col-sm-6 className="float-left">
              Add Term And Condition 
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









// import React from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   Button,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// // import swal from "sweetalert";
// import { Route } from "react-router-dom";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// // import Textarea from "../../forms/form-elements/textarea/Textarea";

// class AddTermsCondition extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//         dealer: "",
//         desc: "",


//     };
//     this.state = {
//       dealerN: [],
//     };
//   }

//   async componentDidMount() {
//     //dealer List
//     axiosConfig
//       .get("/dealer/alldealers")
//       .then((response) => {
//         console.log(response);
//         this.setState({ dealerN: response.data.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();

//     axiosConfig
//       .post("/admin/add_termscondition", this.state,
      
//       )
//       .then((response) => {
//         console.log(response);
//         // swal("Success!", "Submitted SuccessFull!", "success");
//         this.props.history.push("/app/termscondition/TermConditionList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };



//   render() {
//     return (
//       <div>
//       <Breadcrumbs
//         breadCrumbTitle="Terms And Condition"
//         breadCrumbParent="Home"
//         breadCrumbActive="Terms And Condition"
//       />
//       <Card>
//         <Row className="m-2">
//           <Col>
//             <h1 col-sm-6 className="float-left">
//               Terms And Condition
//             </h1>
//           </Col>
//           <Col>
//             <Route
//               render={({ history }) => (
//                 <Button
//                   className=" btn btn-danger float-right"
//                   onClick={() =>
//                     history.push("/app/termscondition/TermConditionList")
//                   }
//                 >
//                   Back
//                 </Button>
//               )}
//             />
//           </Col>
//         </Row>
//         <CardBody>
//           <Form className="m-1" onSubmit={this.submitHandler}>
//             <Row>
             
//               <Col lg="12" md="12" sm="12" className="mb-2">
//                 <Label>Descriptions</Label>
//                 <Input
//                     type="textarea"
//                     name="desc"
//                     value={this.state.desc}
//                     onChange={this.changeHandler}
//                     rows="3"
//                     placeholder="Textarea"
//                   />
//               </Col>

//             </Row>

//             <Row>
//               <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Button.Ripple
//                   color="primary"
//                   type="submit"
//                   className="mr-1 mb-1"
//                 >
//                   Submit
//                 </Button.Ripple>
//               </Col>
//             </Row>
//           </Form>
//         </CardBody>
//       </Card>
//      </div>
//     )
//   }
// }

// export default AddTermsCondition







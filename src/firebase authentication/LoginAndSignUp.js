import React, { useState, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase.js";
import $ from "jquery";
import { Modal, Button, FormGroup } from "react-bootstrap";
import project from "../components/subcomponents/static";
import { useSelector, useDispatch } from "react-redux";
import FloatingLabelInput from "react-floating-label-input";
import { MDBBtn } from "mdbreact";
import projectStyles from "../components/subcomponents/styles/Styles";
import { hide_AddUserModal } from "../actions/index.js";
import { AuthContext } from "./Auth.js";

// {history} --> Router
const LoginAndSignUp = ({ history }) => {
  const [signUpFormHidden, setSignUpFormHidden] = useState(true);
  const [loginFormHidden, setLoginFormHidden] = useState(false);
  const [addFirstName, setAddFirstName] = useState("");
  const [addLastName, setAddLastName] = useState("");
  const [addPhoneNumber, setAddPhoneNumber] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUserModalStatus = useSelector((state) => state.addUserModal); //reducers/index.js

  const dispatch = useDispatch();

  const hideAddUserModal = () => {
    dispatch(hide_AddUserModal());
  };
  const showLogin = function () {
    setLoginFormHidden(false);
    setSignUpFormHidden(true);
  };
  const showSignUp = function () {
    setSignUpFormHidden(false);
    setLoginFormHidden(true);
  };

  // sign up
  const handleChangeFirstName = (event) => {
    setAddFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setAddLastName(event.target.value);
  };
  const handleChangePhoneNumber = (event) => {
    setAddPhoneNumber(event.target.value);
  };
  const handleChangeAddEmail = (event) => {
    setAddEmail(event.target.value);
  };
  const handleChangeAddPassword = (event) => {
    setAddPassword(event.target.value);
  };
  // sign in
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = function () {
    if (addFirstName.trim().replace(" ", "").length < 1) {
      $("#registrationWarningTextId").html("firstname is required !");
      return false;
    } else if (addLastName.trim().replace(" ", "").length < 1) {
      $("#registrationWarningTextId").html("lastname is required !");
      return false;
    } else if (addPhoneNumber.trim().replace(" ", "").length < 1) {
      $("#registrationWarningTextId").html("phone number is required !");
      return false;
    }
    // else if(addPhoneNumber.match(/^[0-9]{10,15}$/)){}
    else if (addEmail.trim().replace(" ", "").length < 1) {
      $("#registrationWarningTextId").html("email is required !");
      return false;
    } else if (addPassword.length < 6) {
      $("#registrationWarningTextId").html(
        "password must have at least 6 characters"
      );
      return false;
    } else {
      $("#registrationWarningTextId").html("");
      return true;
    }
  };

  const validateFormLogin = function () {
    if (email.trim().replace(" ", "").length < 1) {
      $("#loginWarningTextId").html("email is required !");
      return false;
    } else if (password.length < 6) {
      $("#loginWarningTextId").html("password must have at least 6 characters");
      return false;
    } else {
      $("#loginWarningTextId").html("");
      return true;
    }
  };

  const performSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        history.push("/services");
        emptySignInForm();
        hideAddUserModal();
      } catch (error) {
        //alert(error);
        $("#loginWarningTextId").html("sign in failed! " + error);
      }
    },
    [history]
  ); // this hook useCallback()  // is used for memoization // stores (cache) results of expensive function calls // it call the function only if one of the inputs has changed

  const performSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(addEmail, addPassword);
        history.push("/services");
        emptySignUpForm();
        hideAddUserModal();
      } catch (error) {
        //alert(error);
        $("#registrationWarningTextId").html("sign up failed! " + error);
      }
    },
    [history]
  ); // this hook useCallback()  // is used for memoization // stores (cache) results of expensive function calls // it call the function only if one of the inputs has changed

  const emptySignUpForm = () => {
    setAddFirstName("");
    setAddLastName("");
    setAddPhoneNumber("");
    setAddEmail("");
    setAddPassword("");
  };

  const emptySignInForm = () => {
    setEmail("");
    setPassword("");
  };

  // const { currentUser } = useContext(AuthContext);
  // if (currentUser) {
  //   return <Redirect to="/services" />;
  // }

  return (
    <div>
      {/* ---popup window--- */}
      <Modal
        show={addUserModalStatus}
        onHide={hideAddUserModal} // when the closeButton 'X'  is clicked
        onShow={showLogin}
        centered
      >
        {/* Registration form */}
        <form onSubmit={performSignUp} hidden={signUpFormHidden}>
          <Modal.Header closeButton>
            <Modal.Title>
              <span
                style={projectStyles().spanStyle2}
                className="badge badge m-2"
              >
                Sign up
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <FormGroup>
                <FloatingLabelInput
                  id="FirstNameId"
                  label="firstname"
                  onBlur=""
                  value={addFirstName}
                  onChange={handleChangeFirstName}
                  style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                />
              </FormGroup>
              <FormGroup>
                <FloatingLabelInput
                  id="LastNameId"
                  label="lastname"
                  onBlur=""
                  value={addLastName}
                  onChange={handleChangeLastName}
                  style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                />
              </FormGroup>
              <FormGroup>
                <FloatingLabelInput
                  id="PhoneNumberId"
                  label={"phone number"}
                  type="number"
                  onBlur=""
                  value={addPhoneNumber}
                  onChange={handleChangePhoneNumber}
                  style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                />
              </FormGroup>
              <FormGroup>
                <FloatingLabelInput
                  id="addEmailId"
                  label={"Email"}
                  type="email"
                  onBlur=""
                  value={addEmail}
                  onChange={handleChangeAddEmail}
                  style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                />
              </FormGroup>
              <FormGroup>
                <FloatingLabelInput
                  id="AddPasswordId"
                  label={"Password"}
                  onBlur=""
                  type="password"
                  value={addPassword}
                  onChange={handleChangeAddPassword}
                  style={{ fontSize: 15 }}
                />
              </FormGroup>
              Already have an account ?{" "}
              <a
                href="#"
                style={{ color: project().projectColor }}
                onClick={showLogin}
              >
                Sign In
              </a>
              <FormGroup style={{ paddingTop: 20 }}>
                <span
                  className="text-danger"
                  id="registrationWarningTextId"
                ></span>
              </FormGroup>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={hideAddUserModal}>
              Cancel
            </Button>
            <MDBBtn
              className="btn-success"
              style={projectStyles().buttonStyle}
              disabled={!validateForm()}
              type="submit"
            >
              Save
            </MDBBtn>
          </Modal.Footer>
        </form>
        {/* Login form */}
        <form onSubmit={performSignIn} hidden={loginFormHidden}>
          <Modal.Header closeButton>
            <Modal.Title>
              <span
                style={projectStyles().spanStyle2}
                className="badge badge m-2"
              >
                Login
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <FormGroup>
                <FloatingLabelInput
                  id="LoginEmailId"
                  label={"Email"}
                  type="email"
                  onBlur=""
                  value={email}
                  onChange={handleChangeEmail}
                  style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                />
              </FormGroup>
              <FormGroup>
                <FloatingLabelInput
                  id="LoginPasswordId"
                  label={"Password"}
                  onBlur=""
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  style={{ fontSize: 15 }}
                />
              </FormGroup>
              Don't have an account ?{" "}
              <a
                href="#"
                style={{ color: project().projectColor }}
                onClick={showSignUp}
              >
                Register
              </a>
              <FormGroup style={{ paddingTop: 20 }}>
                <span className="text-danger" id="loginWarningTextId"></span>
              </FormGroup>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={hideAddUserModal}>
              Cancel
            </Button>
            <MDBBtn
              className="btn-success"
              style={projectStyles().buttonStyle}
              disabled={!validateFormLogin()}
              type="submit"
            >
              Sign In
            </MDBBtn>
          </Modal.Footer>
        </form>
      </Modal>
      {/* ---popup window--- */}
    </div>
  );
};

export default withRouter(LoginAndSignUp); // export default withRouter // means that this component must be a child of Router

import React, { useState } from "react";
import { withRouter } from "react-router";
import firebase from "../firebase.js";
import $ from "jquery";
import { Modal, Button, FormGroup } from "react-bootstrap";
import project from "../components/subcomponents/static";
import { useSelector, useDispatch } from "react-redux";
import FloatingLabelInput from "react-floating-label-input";
import { MDBBtn } from "mdbreact";
import projectStyles from "../components/subcomponents/styles/Styles";
import {
  hide_AddUserModal,
  navbar_selection_key2,
  user_signed_in,
  user_signed_out,
} from "../actions/index.js";
import LinearDeterminate from "../components/subcomponents/linearProgressBar.js";

// {history} --> Router // history is part of the props // history is available to all children of BrowserRouter
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
  const [
    hiddenLoginLinearDeterminate,
    setHiddenLoginLinearDeterminate,
  ] = useState(true);
  const [
    hiddenSignUpLinearDeterminate,
    setHiddenSignUpLinearDeterminate,
  ] = useState(true);

  const dispatch = useDispatch();

  const addUserModalStatus = useSelector((state) => state.addUserModal); //reducers/index.js

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

  // !addPhoneNumber.match(/^[0-9]{10,15}$/)

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
    } else if (
      !addPhoneNumber.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      )
    ) {
      $("#registrationWarningTextId").html(
        "phone number is incorrectly formatted"
      );
    } else if (addEmail.trim().replace(" ", "").length < 1) {
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

  const performSignIn = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHiddenLoginLinearDeterminate(false);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      getUserDetails(firebase.auth().currentUser.uid);
    } catch (error) {
      setHiddenLoginLinearDeterminate(true);
      $("#loginWarningTextId").html("sign in failed! " + error);
    }
  };

  const performSignUp = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHiddenSignUpLinearDeterminate(false);
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(addEmail, addPassword);
      //firebase.auth().sendSignInLinkToEmail(addEmail);
      saveUserDetails({
        id: firebase.auth().currentUser.uid,
        name: addFirstName + " " + addLastName,
        phone: addPhoneNumber,
        email: addEmail,
        address: "",
        role: "customer",
        selection: [],
      });
    } catch (error) {
      setHiddenSignUpLinearDeterminate(true);
      $("#registrationWarningTextId").html("sign up failed! " + error);
    }
  };
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

  const saveUserDetails = async (user) => {
    try {
      await firebase.firestore().collection("users").doc(user.id).set(user);
      dispatch(user_signed_in(user));
      setHiddenSignUpLinearDeterminate(true);
      history.push("/services");
      dispatch(navbar_selection_key2());
      emptySignUpForm();
      hideAddUserModal();
    } catch (error) {
      firebase.auth().currentUser.delete(); // because user was created but we failed to get his details
      setHiddenSignUpLinearDeterminate(true);
      $("#registrationWarningTextId").html("sign up failed! Try again");
    }
  };

  const getUserDetails = (id) => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .get()
      .then((user_data) => {
        if (user_data.exists) {
          dispatch(user_signed_in(user_data.data()));
          setHiddenLoginLinearDeterminate(true);
          history.push("/services");
          dispatch(navbar_selection_key2());
          emptySignInForm();
          hideAddUserModal();
          user_data_changed(user_data.data().id); // just to maintain a snapshot // in case data changes
        } else {
          // if user data do not exists in our user collection // we sign him out
          firebase.auth().signOut();
          dispatch(user_signed_out());
          setHiddenLoginLinearDeterminate(true);
          $("#loginWarningTextId").html("sign in failed! Try again");
        }
      })
      .catch((error) => {
        setHiddenLoginLinearDeterminate(true);
        $("#loginWarningTextId").html("sign in failed! Try again");
      });
  };

  const user_data_changed = (id) => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .onSnapshot((snapshot) => {
        const user = snapshot.data();
        if (user) {
          dispatch(user_signed_in(user));
        }
      });
  };

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
              <FormGroup
                style={{ paddingTop: 20 }}
                hidden={hiddenSignUpLinearDeterminate}
              >
                <LinearDeterminate />
              </FormGroup>
              <FormGroup>
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
                  name="email"
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
                  name="Password"
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
              <FormGroup
                style={{ paddingTop: 20 }}
                hidden={hiddenLoginLinearDeterminate}
              >
                <LinearDeterminate />
              </FormGroup>
              <FormGroup>
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

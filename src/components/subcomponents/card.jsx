import React, { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import Box from "@material-ui/core/Box";
import project from "./static";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import firebase from "../../firebase.js";
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "../../firebase authentication/Auth";
import {
  show_AddUserModal,
  user_signed_in,
  user_signed_out,
} from "../../actions";

function Card(props) {
  const { currentUser } = useContext(AuthContext);
  const user_details = useSelector((state) => state.userSigning);
  const dispatch = useDispatch();

  const checkButtonAction = () => {
    switch (props.data.buttonAction) {
      case "oder_SPV":
        updateUserSelection("PGE-SPV");
        break;
      case "oder_SWS":
        updateUserSelection("PGE-SWS");
        break;
      case "oder_SLS":
        updateUserSelection("PGE-SLS");
        break;
      case "oder_CRS":
        updateUserSelection("PGE-CRS");
        break;
      case "oder_SAB":
        updateUserSelection("PGE-SAB");
        break;
      case "oder_SPS":
        updateUserSelection("PGE-SPS");
        break;
      case "oder_EPE":
        updateUserSelection("PGE-EPE");
        break;
      case "oder_ESC":
        updateUserSelection("PGE-ESC");
        break;
      default:
      // nothing
    }
  };

  const updateUserSelection = (selected_product) => {
    if (currentUser) {
      if (user_details.selection) {
        if (user_details.role === "admin") {
          alert(
            "This user cannot order any product! An administrator cannot perform this operation"
          );
          return;
        }
        // update user selection
        user_details.selection.push(selected_product);
        updateFirestore(user_details.selection, user_details.id);
      } else {
        //user is logged in but redux store does not have user details // due to page refresh
        getUserData(selected_product);
      }
    } else {
      // no user
      dispatch(show_AddUserModal());
    }
  };

  const getUserData = (selected_product) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((user_data) => {
        if (user_data.exists) {
          if (user_data.data().role === "admin") {
            dispatch(user_signed_in(user_data.data())); // just to update the redux store
            alert(
              "This user cannot order any product! An administrator cannot perform this operation."
            );
            return;
          }
          const products_selection = user_data.data().selection;
          products_selection.push(selected_product);
          firebase
            .firestore()
            .collection("users")
            .doc(user_data.data().id)
            .update({ selection: products_selection })
            .then(() => {
              user_data_changed(user_data.data().id); // just to maintain a snapshot // when page was reloaded but user didn't logout
            })
            .catch((error) => {
              alert("A Network Error occurred! try again"); // failed to update the selection
            });
        } else {
          // if user details do net exist // we ask user to login again
          firebase.auth().signOut();
          dispatch(user_signed_out());
          dispatch(show_AddUserModal());
        }
      })
      .catch((error) => {
        alert("A Network Error occurred! try again");
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

  const updateFirestore = async (selection, id) => {
    try {
      await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .update({ selection: selection }); // onsnapshot() will update values in the redux store
    } catch (error) {
      alert("A Network Error occurred! try again");
    }
  };

  return (
    <div>
      <MDBCol>
        <MDBCard
          style={{
            width: "15rem",
            border: 0,
            paddingTop: 0,
            backgroundColor: project().home_component_background_color,
            margin: "0 auto",
          }}
        >
          <Box
            boxShadow={5}
            style={{ borderRadius: 10, backgroundColor: "#ffff" }}
          >
            <MDBCardImage
              className="img-fluid"
              src={props.data.image}
              waves
              alt="Loading..."
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                opacity: 0.9, // 1
                height: 180,
                width: "100%",
              }}
            />
            <MDBCardBody>
              <MDBCardTitle style={{ fontSize: 15 }}>
                <GoogleFontNavItem
                  text={props.data.title}
                  fontfamily={"tangerine"}
                />
              </MDBCardTitle>
              <MDBCardText
                // small
                style={{ fontSize: 12, height: 55 }}
              >
                <GoogleFontNavItem
                  text={props.data.details}
                  fontfamily={"tangerine"}
                />
              </MDBCardText>
              <Button
                // hidden
                variant="success"
                style={{
                  backgroundColor: project().projectColor,
                  color: "white",
                  marginTop: 2,
                }}
                onClick={checkButtonAction}
              >
                <span>
                  <FontAwesomeIcon icon={faShoppingCart} color={"#FFFFF"} />
                  <span style={{ paddingLeft: 5 }}>
                    <GoogleFontNavItem
                      text={props.data.buttonText}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </span>
              </Button>
            </MDBCardBody>
          </Box>
        </MDBCard>
      </MDBCol>
    </div>
  );
}

export default Card;

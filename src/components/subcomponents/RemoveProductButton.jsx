import React from "react";
import firebase from "../../firebase";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import GoogleFontNavItem from "./fonts/googleFontForNavItems.js";

const RemoveProduct = (props) => {
  const user_details = useSelector((state) => state.userSigning);

  const removeProduct = () => {
    if (user_details.selection) {
      const products_selection = user_details.selection;
      // first way
      //   for (let i = 0; i < products_selection.length; i++) {
      //     if (products_selection[i] === props.product) {
      //       products_selection.splice(i, 1); // starts deleting from position --> i  // 1 --> number of elements to remove
      //       updateFirestore(products_selection, user_details.id);
      //       break; // delete only one
      //     }
      //   }
      // second way
      const index = products_selection.findIndex(
        (selected_product) => selected_product === props.product
      ); // returns the index // or -1 when it did not find any matching element
      if (index >= 0) {
        products_selection.splice(index, 1); // starts deleting from position --> index  // 1 --> number of elements to remove
        updateFirestore(products_selection, user_details.id);
      }
    }
  };

  const updateFirestore = (selection, user_id) => {
    firebase
      .firestore()
      .collection("users")
      .doc(user_id)
      .update({ selection: selection })
      .catch((error) => {
        alert("A Network Error occurred! try again");
      }); // onsnapshot() will update values in the redux store
  };

  return (
    <span>
      <Button
        variant="outline-success"
        style={{
          backgroundColor: "#FFFFF",
          marginTop: 2,
        }}
        onClick={removeProduct}
      >
        <GoogleFontNavItem text={"Remove"} fontfamily={"tangerine"} />
      </Button>
    </span>
  );
};

export default RemoveProduct;

import React, { useState } from "react";
import firebase from "../firebase.js";
import { useEffect } from "react";

function Services() {
  const [firebaseData, setFirebaseData] = useState([]);

  const saveToFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .add({ name: "charly", role: "system engineer" })
      .then(() => {
        // do something // promise is resolved or rejected
      });
  };

  const retrieveFromFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot(snapshot => {
        const users = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })); // ...  --> spread operator will join id with fields inside the document to form a javascript object
        setFirebaseData(users);
      });
  };

  useEffect(retrieveFromFirestore);

  return (
    <div style={{ height: 500 }}>
      <p>Add user to database</p>
      <button
        onClick={() => {
          saveToFirestore();
        }}
      >
        Click me
      </button>
      <hr />
      <div>
        {firebaseData.map(user => {
          return (
            <div>
              <span>name: {user.name}</span>
              <br />
              <span>role: {user.role}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;

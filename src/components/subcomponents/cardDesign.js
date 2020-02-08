import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from "mdbreact";

class CardDesign extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage
              cascade
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
            />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage
              cascade
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
            />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage
              cascade
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/men.jpg"
            />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default CardDesign;

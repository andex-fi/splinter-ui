import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function gitBtn() {
  return (
    <>
      <MDBBtn
        href="#!"
        className="square-social d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#3b5998" }}
      >
        <MDBIcon
          fab
          icon="facebook-f"
          className="d-flex align-items-center justify-content-center"
        />
      </MDBBtn>
    </>
  );
}
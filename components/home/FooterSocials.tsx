import React from "react";
import { MDBBtn, MDBIcon, MDBRow } from "mdb-react-ui-kit";

export default function SocialButtons() {
  return (
    <>
      <MDBRow>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
        >
          <MDBIcon fab icon="twitter" className="d-flex align-items-center" />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#dd4b39" }}
          href="#!"
        >
          <MDBIcon fab icon="google" className="d-flex align-items-center" />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#ac2bac" }}
          href="#!"
        >
          <MDBIcon fab icon="instagram" className="d-flex align-items-center" />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#0082ca" }}
          href="#!"
        >
          <MDBIcon
            fab
            icon="linkedin-in"
            className="d-flex align-items-center"
          />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#c61118" }}
          href="#!"
        >
          <MDBIcon fab icon="pinterest" className="d-flex align-items-center" />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#4c75a3" }}
          href="#!"
        >
          <MDBIcon fab icon="vk" className="d-flex align-items-center" />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#ffac44" }}
          href="#!"
        >
          <MDBIcon
            fab
            icon="stack-overflow"
            className="d-flex align-items-center"
          />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#ed302f" }}
          href="#!"
        >
          <MDBIcon fab icon="youtube" className="d-flex align-items-center" />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#481449" }}
          href="#!"
        >
          <MDBIcon
            fab
            icon="slack-hash"
            className="d-flex align-items-center"
          />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#333333" }}
          href="#!"
        >
          <MDBIcon fab icon="github" className="d-flex align-items-center" />
        </MDBBtn>

        <MDBBtn
          className="m-1 square-social d-flex justify-content-center"
          style={{ backgroundColor: "#ec4a89" }}
          href="#!"
        >
          <MDBIcon fab icon="dribbble" className="d-flex align-items-center" />
        </MDBBtn>

        
      </MDBRow>
    </>
  );
}
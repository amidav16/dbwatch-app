import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";


//Basic footer that renders on every router page
const FooterPage = () => {
  return (
    <MDBFooter className="mdfooter">
      <div className="footer-copyright py-3">
        <div className="text-center mr-5 pr-5">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} dbWatch AS
        </MDBContainer>
      </div>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
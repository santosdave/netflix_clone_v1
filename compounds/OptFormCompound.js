import React from "react";
import OptFormWrapper from "../componets/OptForm/OptFormWrapper";
import OptFormText from "../componets/OptForm/OptFormText";
import OptFormEmail from "../componets/OptForm/OptFormEmail";
import OptFormButton from "../componets/OptForm/OptFormButton";

function OptFormCompound({ children }) {
  return (
    <>
      <OptFormText>
        Ready to watch? Enter your email to create or restart your membership.
      </OptFormText>
      <OptFormWrapper>
        <OptFormEmail></OptFormEmail>
        <OptFormButton>Get Started</OptFormButton>
      </OptFormWrapper>
      {children}
    </>
  );
}

export default OptFormCompound;

import React from "react";
import HeaderWrapper from "../componets/Header/HeaderWrapper";
import Logo from "../componets/Header/Logo";
import Navbar from "../componets/Header/Navbar";
import SigninButton from "../componets/Header/SigninButton";

function HeaderCompound() {
    return (
      <HeaderWrapper>
          <Navbar>
              <Logo/>
              <SigninButton>Sign-In</SigninButton>
          </Navbar>
      </HeaderWrapper>
    )
}

export default HeaderCompound

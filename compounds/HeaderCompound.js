import React from "react";
import FeatureWrapper from "../componets/Feature/FeatureWrapper";
import FeatureTitle from "../componets/Feature/FeatureTitle";
import Warning from "../componets/Feature/Warning";
import HeaderWrapper from "../componets/Header/HeaderWrapper";
import Logo from "../componets/Header/Logo";
import Navbar from "../componets/Header/Navbar";
import SigninButton from "../componets/Header/SigninButton";

function HeaderCompound({ children }) {
    return (
      <HeaderWrapper>
          <Navbar>
              <Logo/>
              <SigninButton>Sign-In</SigninButton>
          </Navbar>
          <FeatureWrapper>
              <FeatureTitle>Unlimited movies, TV shows and more.</FeatureTitle>
              <Warning>This is just My Netflix Clone</Warning>
          </FeatureWrapper>
            {children}
      </HeaderWrapper>
    )
}

export default HeaderCompound

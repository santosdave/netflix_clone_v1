import React from "react";
import HeaderWrapper from "../componets/Header/HeaderWrapper";
import Logo from "../componets/Header/Logo";
import Navbar from "../componets/Header/Navbar";
import FooterCompound from "../compounds/FooterCompound";
import SignFormWrapper from "../componets/SignForm/SignFormWrapper";
import SignFormBase from "../componets/SignForm/SignFormBase";
import SignFormTitle from "../componets/SignForm/SignFormTitle";
import SignFormInput from "../componets/SignForm/SignFormInput";
import SignFormButton from "../componets/SignForm/SignFormButton";
import SignFormText from "../componets/SignForm/SignFormText";
import SignFormLink from "../componets/SignForm/SignFormLink";
import SignFormCaptcha from "../componets/SignForm/SignFormCaptcha";
import SignFormError from "../componets/SignForm/SignFormError";
import Warning from "../componets/Feature/Warning";
function SigninPage() {
    return (
        <>
            <HeaderWrapper>
                <Navbar>
                    <Logo/>
                </Navbar>
                <SignFormWrapper>
                <SignFormBase>
                    <Warning>Netflix Clone</Warning>
                    <SignFormTitle>Sign In</SignFormTitle>
                    {/* {error ? <SignFormError>{error}</SignFormError> : null} */}
                    <SignFormInput
                        type="text"
                        placeholder="Email Address"
                    />
                    <SignFormInput
                        type="password"
                        placeholder="Password"
                        AutoComplete="off"
                    />
                    <SignFormButton>Sign In</SignFormButton>
                    <SignFormText>
                        New to Netflix?
                        <SignFormLink href="/signup">Sign up now.</SignFormLink>
                    </SignFormText>
                    <SignFormCaptcha>
                    This page is protected by Google reCAPTCHA to ensure you are not a
                    bot.
                    </SignFormCaptcha>
                </SignFormBase>
            </SignFormWrapper>   
            </HeaderWrapper>
            <FooterCompound />
        </>
    )
}

export default SigninPage

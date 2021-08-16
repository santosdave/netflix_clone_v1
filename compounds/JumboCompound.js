import React from "react";
import JumboWrapper from "../componets/Jumbotron/JumboWrapper";
import JumboItem from "../componets/Jumbotron/JumboItem";
import JumboTextWrapper from "../componets/Jumbotron/JumpoTextWrapper";
import JumboTitle from "../componets/Jumbotron/JumboTitle";
import JumboSubTitle from "../componets/Jumbotron/JumboSubTitle";
import JumboImageWrapper from "../componets/Jumbotron/JumboImageWrapper";
import JumboImage from "../componets/Jumbotron/JumboImage";
import JumboData from "../data/jumbo.json";
import Seperator from "../componets/Seperator/Seperator";

function JumboCompound() {
  return (
    <JumboWrapper>
      {JumboData.map((item) => (
        <>
          <JumboItem key={item.id}>
            <JumboTextWrapper>
              <JumboTitle>{item.title}</JumboTitle>
              <JumboSubTitle>{item.subTitle}</JumboSubTitle>
            </JumboTextWrapper>
            <JumboImageWrapper>
              <JumboImage src={item.image} alt={item.alt} />
            </JumboImageWrapper>
          </JumboItem>
          <Seperator />
        </>
      ))}
    </JumboWrapper>
  );
}

export default JumboCompound;

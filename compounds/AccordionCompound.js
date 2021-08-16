import React from "react";
import AccordionWrapper from "../componets/Accordion/AccordionWrapper";
import AccordionTitle from "../componets/Accordion/AccordionTitle";
import AccordionItem from "../componets/Accordion/AccordionItem";
import AccordionHeader from "../componets/Accordion/AccordionHeader";
import AccordionBody from "../componets/Accordion/AccordionBody";
import FAQData from "../data/faqs.json";

function AccordionCompound() {
  return (
    <AccordionWrapper>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {FAQData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default AccordionCompound;

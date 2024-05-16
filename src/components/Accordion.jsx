import React from "react";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion({ data }) {
  const [currentOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map(({ question, answer }, index) => (
        <AccordionItem
          currentOpen={currentOpen}
          onOpen={setIsOpen}
          number={index + 1}
          question={question}
          answer={answer}
          key={index}
        />
      ))}
    </div>
  );
}

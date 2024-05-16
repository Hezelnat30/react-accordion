import React from "react";
import { useState } from "react";

export default function AccordionItem({
  number,
  question,
  answer,
  onOpen,
  currentOpen,
}) {
  const isOpen = number === currentOpen;
  function toggleHandle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={toggleHandle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}

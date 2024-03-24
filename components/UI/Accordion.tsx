"use client";

import { useState } from "react";
import type { FaqDataType } from "@/container/Home/data/faqData";

type PropTypes = {
  item: FaqDataType;
};

function Accordion({ item }: PropTypes) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="rounded-xl bg-white p-7 duration-700 cursor-pointer"
      onClick={() => setShow(!show)}
    >
      <h5 className="font-outfit text-xl font-medium">{item.question}</h5>
      {show && <p className="mt-2 text-lg">{item.answer}</p>}
    </div>
  );
}

export default Accordion;

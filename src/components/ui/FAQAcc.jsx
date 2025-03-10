// import faqData from "../../lib/faqdata";
// import Accordion from "../magicui/Accordian";
// import Heading from "./Heading";


// function FAQAcc() {
//   return (
//     <section
//       id="faq"
//       className="relative min-h-screen flex flex-col lg:px-12 px-4 w-full py-16 lg:py-24 overflow-hidden"
//       aria-label="FAQ">
//       <div className="pb-10 lg:pb-16">
//         <Heading title="Frquently Asked Questions" description="FAQ" />
//       </div>
//       <div className="w-full max-w-5xl mx-auto">
//         {faqData.map((faq, index) => (
//           <Accordion key={index} number={faq.number} title={faq.title}>
//             {faq.content.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </Accordion>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FAQAcc;

// IT HAS NEW FEATURES LIKE ACCORDION OPEN AND CLOSE ANIMATION

import React, { useState } from 'react';
import faqData from "../../lib/faqdata";
import Accordion from "../magicui/Accordian";
import Heading from "./Heading";

function FAQAcc() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open state
  };

  return (
    <section
      id="faq"
      className="relative min-h-screen flex flex-col lg:px-12 px-4 w-full py-16 lg:py-0 lg:pb-24 overflow-hidden"
      aria-label="FAQ">
      <div className="pb-10 lg:pb-16">
        <Heading title="Frequently Asked Questions" description="FAQ" />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            number={faq.number}
            title={faq.title}
            isOpen={openIndex === index}
            onClick={() => handleAccordionClick(index)}
          >
            {faq.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default FAQAcc;
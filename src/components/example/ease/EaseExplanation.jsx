import DynamicAccordion from "../../common/DynamicAccordion";
import Text from "../../common/ui/Text";
import { GSAP_EASE } from "../../../utils/defaults";
import React, { useState } from "react";

const EaseExplanation = () => {
  const [faq, setFaq] = useState(-1);
  const [faqDetail, setFaqDetail] = useState("-1-1");
  const FaqsList = GSAP_EASE.explanation;
  return (
    <div className="space-y-3 mt-5 text-start">
      {FaqsList.map((obj, index) => {
        return (
          <div
            key={index}
            className="border border-solid border-white/40 px-4 rounded-xl">
            <button
              onClick={() => setFaq(faq === index ? -1 : index)}
              className=" w-full cursor-pointer text-white py-3 font-medium text-base leading-[1.2] flex justify-between items-center">
              {obj.type}
              <span
                className={`inline-block transition-all ease-linear duration-300 w-3 h-3 border-b border-r border-white/90 border-solid rotate-45 ${
                  index === faq ? "rotate-[225deg]" : ""
                }`}></span>
            </button>
            <DynamicAccordion
              className={faq === index && "pb-4"}
              refreshOn={faqDetail}
              defaultOpen={faq === index}>
              <Text>{obj.description}</Text>
              <div className=" border border-solid border-white/40 rounded-xl p-3 my-4 space-y-2">
                {obj.variants.map((objV, indexV) => {
                  return (
                    <div
                      key={indexV}
                      className="border border-solid border-white/40 px-2 rounded-xl">
                      <button
                        onClick={() =>
                          setFaqDetail(
                            faqDetail === `${index}-${indexV}`
                              ? "-1-1"
                              : `${index}-${indexV}`
                          )
                        }
                        className=" text-white cursor-pointer pt-2 pb-1 pr-2 font-medium text-base leading-[1.2] flex justify-between items-center w-full ">
                        <span className="simple-code"> {objV.name}</span>
                        <span
                          className={`inline-block transition-all ease-linear duration-300 w-2 h-2 border-b border-r border-white/90 border-solid rotate-45 ${
                            faqDetail === `${index}-${indexV}`
                              ? "rotate-[225deg]"
                              : ""
                          }`}></span>
                      </button>
                      <DynamicAccordion
                        className={faqDetail === `${index}-${indexV}` && "pb-4"}
                        defaultOpen={`${index}-${indexV}` === faqDetail}>
                        <Text>{objV.description}</Text>
                      </DynamicAccordion>
                    </div>
                  );
                })}
              </div>
            </DynamicAccordion>
          </div>
        );
      })}
    </div>
  );
};

export default EaseExplanation;

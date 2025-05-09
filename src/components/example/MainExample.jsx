"use client";

import { useParams } from "next/navigation";
import { gsapConcepts } from "../../utils/defaults";
import { titleFormatter } from "../../utils/functions";
import { SOURCE_CODE } from "../../utils/sourceCode";
import CodeBlock from "../common/components/CodeBlock";
import Heading from "../common/ui/Heading";
import AddE from "./add/AddE";
import DrawE from "./draw/DrawE";
import FromE from "./fromto/FromE";
import FromToE from "./fromto/FromToE";
import ToE from "./fromto/ToE";
import Cta from "../common/components/Cta";
import TimeLine from "./timeline/TimeLineE";
import TimeLineDefaults from "./timeline/TimeLineDefaults";
import Draw from "./draw/DrawE";
import Context from "./ContextE";
import ScrollTrigger from "./scrolltrigger/ScrollTriggerE";
import Pin from "./scrolltrigger/ScrollPinE";
import YoyoRepeat from "./YoyoRepeatE";
import GsapConcepts from "../home/GsapConcepts";

const MainExample = () => {
  const { slug } = useParams();

  const filteredOne = gsapConcepts.find(
    (item) => titleFormatter(item.title) === slug
  );

  const animac = [
    {
      key: "gsapto",
      component: <ToE />,
      codeBlock: SOURCE_CODE.to,
      fileName: "Gsap To Example",
    },
    {
      key: "gsapfrom",
      component: <FromE />,
      codeBlock: SOURCE_CODE.from,
      fileName: "Gsap From Example",
    },
    {
      key: "gsapfromto",
      component: <FromToE />,
      codeBlock: SOURCE_CODE.fromTo,
      fileName: "Gsap FromTo Example",
    },
    {
      key: "draw",
      component: <DrawE />,
      codeBlock: SOURCE_CODE.draw,
      fileName: "Draw SVG Example",
    },
    {
      key: "add",
      component: <AddE />,
      codeBlock: SOURCE_CODE.add,
      fileName: "Add Timeline Example",
    },
    {
      key: "gsaptimeline",
      component: <TimeLine />,
      codeBlock: SOURCE_CODE.timeline,
      fileName: "Add Timeline Example",
    },
    {
      key: "context",
      component: <Context />,
      codeBlock: SOURCE_CODE.context,
      fileName: "Add Timeline Example",
    },
    {
      key: "draw",
      component: <Draw />,
      codeBlock: SOURCE_CODE.draw,
      fileName: "Add Timeline Example",
    },
    {
      key: "scrolltrigger",
      component: <ScrollTrigger />,
      codeBlock: SOURCE_CODE.scrolltrigger,
      fileName: "Scrolltrigger Example",
    },
    {
      key: "pin",
      component: <Pin />,
      codeBlock: SOURCE_CODE.scrollPin,
      fileName: "Scrolltrigger Example",
    },
    {
      key: "repeat-yoyo",
      component: <YoyoRepeat />,
      codeBlock: SOURCE_CODE.repeatYoyo,
      fileName: "Repeat and Yoyo Example",
    },
    {
      key: "defaults-in-timeline",
      component: <TimeLineDefaults />,
      codeBlock: SOURCE_CODE.defaults,
      fileName: "Check the Defaults in timeline Example",
    },
  ];

  const selected = animac.find((item) => item.key === slug);

  return (
    <div className="container max-xl:px-5 mx-auto text-center py-12">
      {filteredOne ? (
        <>
          <Heading
            as="h1"
            variant="primary"
            className="text-center simple-code inline-block mb-4">
            {filteredOne.title}
          </Heading>
          <div
            className="mini-code example-detail max-w-[600px] mx-auto space-y-3"
            dangerouslySetInnerHTML={{ __html: filteredOne.explanation }}
          />
          <div className="pt-5">
            <Cta href="/" as="a">
              Go Back
            </Cta>
          </div>
          {selected ? (
            <>
              {selected.component}
              <Heading as="h4" className="text-start mb-4">
                Code That Used In Animation
              </Heading>
              <CodeBlock
                language="javascript"
                filename={selected.fileName}
                code={selected.codeBlock}
              />
            </>
          ) : (
            <p>No animation demo for this concept yet.</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
      <GsapConcepts />
    </div>
  );
};

export default MainExample;

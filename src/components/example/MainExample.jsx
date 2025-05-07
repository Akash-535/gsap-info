"use client";

import { useParams } from "next/navigation";
import { gsapConcepts } from "../../utils/defaults";
import { titleFormatter } from "../../utils/functions";
import { SOURCE_CODE } from "../../utils/sourceCode";
import CodeBlock from "../common/components/CodeBlock";
import Heading from "../common/ui/Heading";
import AddE from "../exampls/add/AddE";
import DrawE from "../exampls/draw/DrawE";
import FromE from "../exampls/fromto/FromE";
import FromToE from "../exampls/fromto/FromToE";
import ToE from "../exampls/fromto/ToE";
import Cta from "../common/components/Cta";
import TimeLine from "../exampls/fromto/timeline/TimeLineE";
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

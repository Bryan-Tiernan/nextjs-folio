import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Interests</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <span className="text-white">Java</span>
          &nbsp;as my main programming language, currently learning&nbsp;
          <span className="text-white">Go</span>
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <span className="text-white">Spring/Spring Boot</span>
          &nbsp;as my Application Framework in Java (REST Web Services mostly)
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <span className="text-white">Docker</span>
          &nbsp;for containerisation
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <span className="text-white">MongoDB</span>
          &nbsp;as my go-to database
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <span className="text-white">AWS</span>
          &nbsp;as my cloud services provider 
          -&nbsp;<span className="text-white">S3</span>
          ,&nbsp;<span className="text-white">Cloudwatch Metrics</span>
          ,&nbsp;<span className="text-white">IAM</span>
          ,&nbsp;<span className="text-white">EKS</span>
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          Experience with -&nbsp;
          <span className="text-white">Managing Communication with Stakeholders</span>
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          Experience with -&nbsp;
          <span className="text-white">Fast-paced dynamic environments with changing requirements</span>
          &nbsp;
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          Experience with -&nbsp;
          <span className="text-white">Interacting with Customers, Refining Requirements, Demoing features</span>
          &nbsp;
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        Currently reading <span className="text-white">Designing Data-Intensive Applications</span> to level up my knowledge of application architecture and {" "}
        <span className="text-white">Lets Go by Alex Edwards</span>{" "} to learn <span className="text-white">Go</span>.{" "}
      </p>
      <p className="text-lg font-medium text-slate-300">
        Also interested in learning <span className="text-white">Rust</span>{" "}
        and of course <span className="text-white">Dive Deeper</span>{" "} into the topics listed above.
      </p>
    </div>
  );
};

export default Skills;

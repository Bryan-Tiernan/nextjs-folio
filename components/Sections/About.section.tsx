import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Bryan Tiernan</p>
        <p className="mt-1 text-lg text-gray-300">
          Software Developer
        </p>

        <p className="mt-4 text-gray-400">
          Software developer with 3+ years of experience looking for a role in Vancouver, BC or remote in Canada.<br/>
          Worked at Deciphex on Diagnexia, a digital clinical diagnostics service for Pathology.<br/>
          Interested in all things programming.<br/>
          Always trying to learn something new.
        </p>

        <Link href="https://bryan-tiernan.mataroa.blog/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            I may blog here at some point who knows!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/profile1.jpg"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;

import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <p className="text-lg font-medium text-slate-300">
        Interested in contacting me ? Reach out to me via email at bryantiernan@gmail.com
      </p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/Bryan-Tiernan" />

        <Icon icon={<AiFillLinkedin />} url="https://www.linkedin.com/in/bryan-tiernan-4abaab180/" />

        <Icon icon={<MdEmail />} url="mailto:bryantiernan@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;

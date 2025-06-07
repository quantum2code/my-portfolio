import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import React from "react";


// const iconSize = 40


const socials = [
  {
    siteName: "Github",
    logo: <FiGithub size={30}/>,
    link: "https://github.com/quantum2code",
  },
  {
      siteName: "X",
      logo: <FaXTwitter size={30}/>,
      link: "https://x.com/QuantumCode21",
    },
    {
        siteName: "Figma",
        logo: <FaFigma size={30}/>,
        link: "#",
    },
    {
      siteName: "Linkedin",
      logo: <CiLinkedin size={40}/>,
      link: "https://www.linkedin.com/in/supriyo-purkait-7978941ab/",
    },
];

function Socials() {
  return (
    <div className="[@media(max-height:650px)]:hidden flex h-[3rem] w-full gap-[0.5rem] pl-[1rem] justify-start items-center">
      {
        socials.map((social)=>(
          <a
          key={social.siteName}
          href={social.link}
          rel="noopener noreferrer"
          aria-label={social.siteName}
          >
            {React.cloneElement(social.logo,{color:"#aaaaaa"})}
          </a>
        ))
      }
    </div>
  );
}

export default Socials;

import GithubLogo from "../assets/github-logo-line.svg?react";
import LinkedinLogo from "../assets/linkedin-logo.svg?react";
import TwitterLogo from "../assets/twitter-logo-line.svg?react";
import FigmaLogo from "../assets/figma-logo.svg?react";

const socials = [
  {
    siteName: "Github",
    logo: <GithubLogo />,
    link: "#",
  },
  {
      siteName: "X",
      logo: <TwitterLogo />,
      link: "#",
    },
    {
        siteName: "Figma",
        logo: <FigmaLogo />,
        link: "#",
    },
    // {
    //   siteName: "Linkedin",
    //   logo: <LinkedinLogo />,
    //   link: "#",
    // },
];

function Socials() {
  return (
    <div className="fixed bottom-[4rem] [@media(max-height:650px)]:hidden flex h-[10%] w-full gap-[1rem] pl-[3rem] justify-start items-center">
      {socials.map((social, index) => (
        <div key={index} className="w-[50px] h-fill">
          {social.logo}
        </div>
      ))}
    </div>
  );
}

export default Socials;

"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/piotrek-maciejewski/",
    name: <RiLinkedinFill className="" />,
  },
  {
    path: "https://github.com/petherEm",
    name: <RiGithubFill className="" />,
  },

  {
    path: "https://www.instagram.com/vabank.dev/",
    name: <RiInstagramFill className="" />,
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles} text-primary`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

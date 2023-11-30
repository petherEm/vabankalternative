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
    path: "/",
    name: <RiLinkedinFill className="" />,
  },
  {
    path: "/",
    name: <RiGithubFill className="" />,
  },

  {
    path: "/",
    name: <RiInstagramFill className="" />,
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles} text-primary`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

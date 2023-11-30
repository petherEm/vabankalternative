import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

// next hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "https://www.piotrmaciejewski.com/articles", name: "Blog" },
  { path: "/contact", name: "Contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/vabankdev_logo_white.svg"
        width={180}
        height={54}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;

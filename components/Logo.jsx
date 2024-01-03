import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo2.svg" width={150} height={54} priority alt="" />
    </Link>
  );
};

export default Logo;

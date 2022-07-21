import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <h1 className="logo">T E D P A Y</h1>
      <p className="slogan">
        There is a technical issue with {" "} Please Use Other UPI Apps
        <img
          src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
          className="upilogo"
          width="40"
          alt="Upi Icon"
        />
      </p>
      <p className="tpf">
        <Link href={"/privacy-policy"} passHref>
          <u>Privacy Policy</u>
        </Link>
    </footer>
  );
};

export default Footer;

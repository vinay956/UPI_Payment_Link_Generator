import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <p className="slogan">
        There is a technical issue with&apos;s {" "} Please Use Other UPI Apps
        <img
          src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
          className="upilogo"
          width="40"
          alt="Upi Icon"
        />
      </p>
      <h1 className="logo">UPI Pay</h1>
      <p className="tpf">
        <Link href={"/privacy-policy"} passHref>
          <u>Privacy Policy</u>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

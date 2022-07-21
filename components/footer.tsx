import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <h1 className="logo">T E D P A Y</h1>
      <p className="slogan">
        Shareable Payment&apos;s Link for{" "}
        <img
          src="/images/upi.svg"
          className="upilogo"
          width="40"
          alt="Upi Icon"
        />
      </p>
      <p className="tpf">
        <Link href={"/privacy-policy"} passHref>
          <u>Privacy Policy</u>
        </Link>
      </p>
      <p className="tuhin">
        An Open Source Project by{" "}
        <a
          href="https://github.com/vinay956/UPI_Payment_Link_Generator"
          target="_blank"
          rel="noreferrer"
        >
          Vinay Kumar Basava
        </a>
      </p>
      <img
        src="/images/github.svg"
        className="center"
        width="35"
        alt="Github"
      />
    </footer>
  );
};

export default Footer;

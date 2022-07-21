import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <p className="slogan"style="page-break-before: always">
        There is a technical issue with Phonepe Please Use Other UPI Apps
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

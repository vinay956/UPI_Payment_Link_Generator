import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <h3 className="slogan">
        <br/>There is a technical issue with Phonepe <br/>Please Use Other UPI Apps
      </h3>
      {" "} {" "} {" "}
       <img
           src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg"
           className="upilogo"
           width="60"
           alt="Upi Icon"
          />
      {" "}{" "}{" "}
      <img
           src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg"
           className="upilogo"
           width="60"
           alt="Upi Icon"
          />
      {" "}{" "}{" "}
      <img
           src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg"
           className="upilogo"
           width="60"
           alt="Upi Icon"
          />
      {" "}{" "}{" "}
      <img
           src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg"
           className="upilogo"
           width="60"
           alt="Upi Icon"
          />
      {" "}{" "}{" "}
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

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6 sm:flex flex-col  gap-3">
          <div className="flex flex-col text-sm text-gray-400  sm:flex-row  justify-evenly">
            <div className=" my-3 py-1">
              <p className="font-bold">Contato</p>
              <p>810, Bay Area,</p>
              <p>San Francisco, CA 94158</p>
              <p>Email : info@NewBrand-shop.com</p>
              <p>Call: 1-100-000-0000</p>
            </div>
            <div className="py-1">
              <p className="font-bold">Redes sociais</p>
              <Link
                href={
                  "https://www.linkedin.com/in/guilherme-carvalho-80218a249/"
                }
              >
                <p className="flex gap-1">
                  <FaLinkedin size={18} /> LinkedIn
                </p>
              </Link>
              <Link href={"https://www.instagram.com/"}>
                <p className="flex gap-1">
                  <FaInstagram size={18} /> Instagram
                </p>
              </Link>
              <Link href={"https://www.github.com/"}>
                <p className="flex gap-1">
                  <FaGithub size={18} /> GitHub
                </p>
              </Link>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            © 2024 Copyright <span className="font-bold">Platzi Store</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;

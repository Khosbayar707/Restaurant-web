import { Facebook, Instagram, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/BG-image-dark.jpg')" }}
      >
        <div className="flex justify-around items-center p-4">
          <img
            src="./assets/Logo.png"
            alt="logo"
            className="w-[280px] h-auto"
          />
          <Link href={"/"}>
            <img
              src="./assets/Logo2.png"
              alt="logo"
              className="w-[100px] h-auto"
            />
          </Link>

          <div className="flex space-x-4 text-gray-700 font-bold w-[280px]">
            <Facebook />
            <Instagram />
            <TwitterIcon />
          </div>
        </div>
        <div className="flex justify-around items-center p-4 text-gray-700 italic w-[70%] mx-auto cursor-pointer text-wrap font-medium">
          <Link href="/about">
            <p className="hover:text-gray-600">About</p>
          </Link>
          |<p className="hover:text-gray-600">Menus</p> |
          <p className="hover:text-gray-600">Privite Dining</p> |
          <p className="hover:text-gray-600">Vouchers</p> |
          <p className="hover:text-gray-600">Butchery</p> |
          <p className="hover:text-gray-600">Gallery</p> |
          <p className="hover:text-gray-600">Booking</p> |
          <p className="hover:text-gray-600">Careers</p> |
          <p className="hover:text-gray-600">Contacts</p> |
          <p className="hover:text-gray-600">Privacy policy</p>
        </div>
      </div>
    </header>
  );
}

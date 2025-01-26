import Image from "next/image";
import { AboutUs } from "./_components/AboutUs";
import HomePage from "./_components/homaPage";

export default function Home() {
  return (
    <div
      className="w-full h-auto mx-auto space-y-4 text-black bg-cover bg-center p-4"
      style={{ backgroundImage: "url('./assets/BG-image-paper.jpg')" }}
    >
      <HomePage />
    </div>
  );
}

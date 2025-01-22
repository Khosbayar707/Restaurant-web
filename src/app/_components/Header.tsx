export default function Header() {
  return (
    <header>
      <div
        className="flex justify-around items-center p-4 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/BG-image-dark.jpg')" }}
      >
        <img src="./assets/Logo.png" alt="logo" className="w-[280px] h-auto" />
        <img src="./assets/Logo2.png" alt="logo" className="w-[100px] h-auto" />
      </div>
    </header>
  );
}

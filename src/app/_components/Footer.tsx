export default function Footer() {
  return (
    <footer>
      <div
        className="p-4 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/BG-image-dark.jpg')" }}
      >
        <div className="flex justify-around items-center w-full">
          <img
            src="./assets/MainLogo2.png"
            alt="logo"
            className="w-[100px] h-auto "
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <img
            src="./assets/divright-short.svg"
            alt="logo"
            className="w-[280px] h-auto"
          />
          <img
            src="./assets/noble.svg"
            alt="logo"
            className="w-[100px] h-auto"
          />
          <img
            src="./assets/divright-short.svg"
            alt="logo"
            className="w-[280px] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}

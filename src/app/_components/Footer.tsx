export default function Footer() {
  return (
    <footer>
      <div
        className="p-8 w-full bg-cover bg-center flex flex-col items-center gap-6"
        style={{ backgroundImage: "url('/assets/BG-image-dark.jpg')" }}
      >
        <div className="flex justify-center">
          <img
            src="/assets/MainLogo2.png"
            alt="Main Logo"
            className="w-[120px] h-auto"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <img
            src="/assets/divright-short.svg"
            alt="Left Decoration"
            className="w-[200px] md:w-[280px] h-auto"
          />
          <img
            src="/assets/noble.svg"
            alt="Noble Logo"
            className="w-[120px] md:w-[100px] h-auto"
          />
          <img
            src="/assets/divright-short.svg"
            alt="Right Decoration"
            className="w-[200px] md:w-[280px] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}

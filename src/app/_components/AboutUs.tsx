export function AboutUs() {
  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      <div
        className="w-[70%] mx-auto space-y-4 text-black bg-cover bg-center p-4"
        style={{ backgroundImage: "url('./assets/BG-image-light.jpg')" }}
      >
        <h1 className="font-bold">About</h1>
        <p>
          The Pig and Butcher occupies a handsome pub built in the mid 1800’s
          when Islington was a village outside London. The area around the pub
          used to be fields used by farmers to rest and feed their livestock
          before being sent to Smithfield’s Meat Market for sale.
        </p>
        <p>
          It only seemed apt to receive carcasses straight from the farm and
          butcher on site. We specialise in rare breeds such as White Park
          cattle, Iron Age pigs and Hebridean lamb while our game is sourced
          from Aynhoe Park Estate.
        </p>
        <p>
          Our fish is supplied by Celtic Fish & Game, a family run business
          based in St. Ives, Cornwall. All their fish is landed daily from four
          local ports.
        </p>
        <p>
          We take our inspiration from farmhouse tables across Europe. We use
          the best farms and suppliers in the country and present a daily
          changing menu that reflects the most seasonal produce the country has
          to offer.
        </p>
        <div className="flex flex-wrap mx-auto justify-around items-center space-x-4">
          <img src="./assets/pic-1.jpg" alt="About Us" className="w-[250px]" />
          <img src="./assets/pic-2.jpg" alt="About Us" className="w-[250px]" />
          <img src="./assets/pic-3.jpg" alt="About Us" className="w-[250px]" />
        </div>
      </div>
    </div>
  );
}

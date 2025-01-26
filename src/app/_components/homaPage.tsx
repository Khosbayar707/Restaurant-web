export default function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      <div
        className="w-[70%] h-auto mx-auto space-y-4 text-black bg-cover bg-center p-4"
        style={{ backgroundImage: "url('/assets/paper-texture.jpg')" }}
      >
        <div className="flex flex-col items-center space-y-4 py-8 relative">
          <h1 className="text-2xl font-bold text-left italic w-[70%] mx-auto">
            Weekday Set Lunch Menu
          </h1>
          <div className="w-[70%] mx-auto">
            <img src="./assets/homepage.jpg" alt="homepage" />
          </div>
          <div className="w-[70%] mx-auto flex flex-col items-center space-y-4 py-8">
            <p>
              Our set lunch menu is available during lunch service from Monday
              to Friday. This menu will adapt to showcase the best of the
              season, allowing one to indulge in a delicious midweek treat.
            </p>
            <p className="font-bold">The Pig & Butcher Set Lunch Menu</p>
            <p>Two courses 24 / Three courses 28</p>
            <p className="font-bold">For The Table</p>
            <p>
              Sourdough Bread, Whipped Butter & Beef Dripping 2 per person
              Whipped Cod’s Roe, Cucumber, Focaccia Crostini 8
            </p>
            <p className="font-bold">Starter</p>
            <p>
              White Onion Soup, Toasted Sourdough, Whipped Butter Beetroot &
              Goat’s Cheese Salad
            </p>
            <p className="font-bold">Main</p>
            <p>
              Iberico Pork Loin, Creamed Mash, Wholegrain Mustard Sauce Butter
              Poached Market Fish, Beetroot, Beurre Blanc, Hash Brown Beef Fat
              Triple Cooked Chips 6 | Hispi Cabbage, Bacon Crumb 6
            </p>
            <p className="font-bold">Dessert</p>
            <p>
              Raspberry Posset, White Chocolate Crumb, Raspberry Sorbet
              Chocolate Creameux, Salted Caramel Ice Cream English Cheeseboard,
              Chutney, Celery, Crackers 6 supp.
            </p>
          </div>
          <div className="w-[200px] h-[200px] absolute top-0 right-[-60px]">
            <img src="/assets/book-roundel.svg" alt="badge" />
          </div>
        </div>
      </div>
    </div>
  );
}

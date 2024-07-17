export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About BrewLab's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Here you will find various posts about coffee (and some about tea
              as well)! Check out our favorite recipes with step by step guides
              so that you can enjoy cafe style coffee right at home. You will
              find that you have all the ingredients already in your home, and
              once you make one of your recipes, you will find yourself coming
              back for more
            </p>

            <p>
              Also keep an eye out for our recommendations for all coffee
              related equipment and beans. We try everything, from the eyes of
              real customers, and take into account several factors like price,
              usage, necessity etc. before recommending anything. We are also
              not sponsored by any of these brands and post this content just
              for other home baristas.
            </p>

            <p>
              Finally, don't forget to follow our social media pages for the
              most recent updates and to be able to interact with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

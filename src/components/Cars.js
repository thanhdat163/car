import React, { useState } from "react";
import { cars } from "../data";
export default function Cars() {
  const [year, setYear] = useState(""); // State to store selected year
  const [type, setType] = useState("");
  const [filterCar, setFilterCar] = useState(cars); // State to store filtered cars

  // Extracting unique years from the cars data
  const uniqueYears = [...new Set(cars.map((car) => car.year))];
  const uniqueTypes = [...new Set(cars.map((car) => car.type))];

  // Function to handle search/filtering
  const handleSearch = () => {
    const newFilterCar = cars.filter(
      (car) =>
        (year === "" || car.year === year) && (type === "" || car.type === type)
    );
    setFilterCar(newFilterCar);
  };

  return (
    <div className="bg-white">
      <div>
        <div className="flex align-middle">
          <form className="justify-center">
            <div>
              <label>Make Year</label>
              <select
                id="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Year</option>
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <label>Make Type</label>
              <select
                id="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Type</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <button
                className="bg-indigo-400"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <main className="mx-auto px-4 lg:px-8">
          <div className="pb-24 pt-12">
            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {filterCar.map((car) => (
                  <div
                    key={car.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                      <img
                        src={car.images}
                        alt={car.name}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <div className="flex ">
                        <h3 className="text-sm font-medium text-gray-900 flex-1">
                          <a href={car.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {car.name}
                          </a>
                        </h3>
                        <span className="justify-end text-right flex-1">
                          <p className="text-sm italic text-gray-500 ">
                            {car.year}
                          </p>
                        </span>
                      </div>

                      <div className="grid lg:grid-cols-2 grid-flow-row">
                        <span className="flex">
                          <p className="text-sm italic text-gray-500">
                            {car.member} People
                          </p>
                        </span>
                        <span className="flex justify-end text-right">
                          <p className="text-sm italic text-gray-500">
                            {car.type}
                          </p>
                        </span>
                        <span className="flex">
                          <p className="text-sm italic text-gray-500">
                            {car.range} km/1 lit
                          </p>
                        </span>
                        <span className="flex justify-end text-right">
                          <p className="text-sm italic text-gray-500 flex">
                            {car.mode}
                          </p>
                        </span>
                      </div>
                      <div>
                        <p className="text-base font-medium text-gray-900">
                          {car.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

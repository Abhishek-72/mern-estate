export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4 ">
        <div className="flex flex-col gap-3 flex-1 ">
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="p-3 border rounded-lg"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            id="description"
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            className="p-3 border rounded-lg"
            required
          />
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex gap-2">
              <input type="checkbox" name="" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="parking" className="w-5" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bedrooms"
                  min="1"
                  max="10"
                  required
                  className="border border-gray-300 rounded-lg p-3"
                />
                <p>Beds</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  required
                  className="border border-gray-300 rounded-lg p-3"
                />
                <p>Baths</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="regularprice"
                  min="1"
                  max="10"
                  required
                  className="border border-gray-300 rounded-lg p-3"
                />
                <div className="flex flex-col items-center">
                  <p>Regular price</p>
                  <span className="text-xs">($ / month)</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="discountprice"
                  min="1"
                  max="10"
                  required
                  className="border border-gray-300 rounded-lg p-3"
                />
                <div className="flex flex-col items-center">
                  <p>Discounted price</p>
                  <span className="text-xs">($ / month)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-700 ml-2">
              The first image will be cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 border border-green-700 text-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80 ">
              Upload
            </button>
          </div>
          <button className="p-3 bg-gray-700 rounded-lg text-white uppercase hover:opacity-90 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Table = ({ data }) => {
  // state to set checkbox open or close
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [showColumn, setShowColumn] = useState({
    title: true,
    categories: true,
    price: true,
    date: true,
    author: true,
    status: true,
    action: true,
  });

  // function to set checkbox open or close
  const handleCheckbox = () => {
    setShowCheckBox(!showCheckBox);
  };

  const handleCheckBoxChange = (columnName) => {
    setShowColumn({
      ...showColumn,
      [columnName]: !showColumn[columnName],
    });
  };

  return (
    <div className="text-center lg:justify-center md:justify-center lg:flex md:flex gap-10 md:gap-0 sm:grid">
      {/* This div is to show the data table */}
      <div>
        {/* This Div defines the Table Column Titles */}
        <div className="flex gap-6 bg-gray-500 border rounded-lg text-white h-10 items-center md:gap-3 md:w-4/5 sm:gap-1 sm:w-full">
          {showColumn.title && (
            <div className="w-28 md:w-20 text-center">Title</div>
          )}
          {showColumn.categories && (
            <div className="w-28 md:w-20 text-center">Categories</div>
          )}
          {showColumn.price && (
            <div className="w-28 md:w-20 text-center">Price</div>
          )}
          {showColumn.date && (
            <div className="w-28 md:w-20 text-center">Date</div>
          )}
          {showColumn.author && (
            <div className="w-28 md:w-20 text-center">Author</div>
          )}
          {showColumn.status && (
            <div className="w-28 md:w-20 text-center">Status</div>
          )}
          {showColumn.action && (
            <div className="w-28 md:w-20 text-center">Action</div>
          )}
        </div>
        {data.map((rowData, index) => (
          // Mapping on the DataArray and put them in the column fields
          <div key={index} className="flex gap-6 mt-2 md:gap-3 md:w-4/5">
            {showColumn.title && (
              <div className="lg:w-28 md:w-20 md:text-sm text-center">
                {rowData.title}
              </div>
            )}
            {showColumn.categories && (
              <div className="lg:w-28 md:w-20 sm:w-16 md:text-sm sm:text-sm text-center">
                {rowData.categories}
              </div>
            )}
            {showColumn.price && (
              <div className="lg:w-28 md:w-20 sm:w-16 md:text-sm sm:text-sm text-center">
                {rowData.price}
              </div>
            )}
            {showColumn.date && (
              <div className="lg:w-28 md:w-20 sm:w-16 md:text-sm sm:text-sm text-center">
                {rowData.date}
              </div>
            )}
            {showColumn.author && (
              <div className="lg:w-28 md:w-20 sm:w-16 md:text-sm sm:text-sm text-center">
                {rowData.author}
              </div>
            )}
            {showColumn.status && (
              <div className="lg:w-28 md:w-20 sm:w-16 md:text-sm sm:text-sm text-center">
                {rowData.status}
              </div>
            )}
            {showColumn.action && (
              <div className="lg:w-28 md:w-20 sm:w-16 md:text-sm sm:text-sm text-center">
                <button className="bg-green-500 rounded-lg p-1">
                  {rowData.status}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleCheckbox}>
          <GiHamburgerMenu />
        </button>

        {/* Checkbox List*/}
        {showCheckBox && (
          <div className="grid grid-cols-1 justify-items-start w-32 gap-3 text-lg md:w-28 md:text-sm">
            <label>
              <input
                type="checkbox"
                checked={showColumn.title}
                onChange={() => handleCheckBoxChange("title")}
              />
              Title
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.categories}
                onChange={() => handleCheckBoxChange("categories")}
              />
              Categories
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.price}
                onChange={() => handleCheckBoxChange("price")}
              />
              Price
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.date}
                onChange={() => handleCheckBoxChange("date")}
              />
              Date
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.author}
                onChange={() => handleCheckBoxChange("author")}
              />
              Author
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.status}
                onChange={() => handleCheckBoxChange("status")}
              />
              Status
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.action}
                onChange={() => handleCheckBoxChange("action")}
              />
              Action
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;

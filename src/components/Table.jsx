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
    <div className="text-center flex gap-10">
      {/* This div is to show the data table */}
      <div>
        {/* This Div defines the Table Column Titles */}
        <div className="flex gap-6 bg-gray-500 border rounded-lg text-white h-10 items-center">
          {showColumn.title && <div className="w-28 text-center">Title</div>}
          {showColumn.categories && (
            <div className="w-28 text-center">Categories</div>
          )}
          {showColumn.price && <div className="w-28 text-center">Price</div>}
          {showColumn.date && <div className="w-28 text-center">Date</div>}
          {showColumn.author && <div className="w-28 text-center">Author</div>}
          {showColumn.status && <div className="w-28 text-center">Status</div>}
          {showColumn.action && <div className="w-28 text-center">Action</div>}
        </div>
        {data.map((rowData, index) => (
          // Mapping on the DataArray and put them in the column fields
          <div key={index} className="flex gap-6 mt-2">
            {showColumn.title && (
              <div className="w-28 text-center">{rowData.title}</div>
            )}
            {showColumn.categories && (
              <div className="w-28 text-center">{rowData.categories}</div>
            )}
            {showColumn.price && (
              <div className="w-28 text-center">{rowData.price}</div>
            )}
            {showColumn.date && (
              <div className="w-28 text-center">{rowData.date}</div>
            )}
            {showColumn.author && (
              <div className="w-28 text-center">{rowData.author}</div>
            )}
            {showColumn.status && (
              <div className="w-28 text-center">{rowData.status}</div>
            )}
            {showColumn.action && (
              <div className="w-28 text-center">
                <button className="bg-green-500 rounded-lg p-1">
                  {rowData.status}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="">
        <button onClick={handleCheckbox}>
          <GiHamburgerMenu />
        </button>

        {/* Checkbox List*/}
        {showCheckBox && (
          <div className="grid grid-cols-1 justify-items-start w-32 gap-3 text-lg">
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

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Table = ({ data }) => {
  // state to set checkbox open or close
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [showColumn, setShowColumn] = useState({
    column1: true,
    column2: true,
    column3: true,
    column4: true,
    column5: true,
    column6: true,
    column7: true,
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
          <div className="w-28 text-center">Title</div>
          <div className="w-28 text-center">Categories</div>
          <div className="w-28 text-center">Price</div>
          <div className="w-28 text-center">Date</div>
          <div className="w-28 text-center">Author</div>
          <div className="w-28 text-center">Status</div>
          <div className="w-28 text-center">Action</div>
        </div>
        {data.map((rowData, index) => (
          // Mapping on the DataArray and put them in the column fields
          <div key={index} className="flex gap-6 mt-2">
            <div className="w-28 text-center">{rowData.title}</div>
            <div className="w-28 text-center">{rowData.categories}</div>
            <div className="w-28 text-center">{rowData.price}</div>
            <div className="w-28 text-center">{rowData.date}</div>
            <div className="w-28 text-center">{rowData.author}</div>
            <div className="w-28 text-center">{rowData.status}</div>
            <div className="w-28 text-center">
              <button className="bg-green-500 rounded-lg p-1">
                {rowData.action}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleCheckbox}>
          <GiHamburgerMenu />
        </button>
        {showCheckBox && (
          <div>
            <label>
              <input
                type="checkbox"
                checked={showColumn.column1}
                onChange={() => handleCheckBoxChange("column1")}
              />
              Title
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.column2}
                onChange={() => handleCheckBoxChange("column2")}
              />
              Categories
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.column3}
                onChange={() => handleCheckBoxChange("column3")}
              />
              Price
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.column4}
                onChange={() => handleCheckBoxChange("column4")}
              />
              Date
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.column5}
                onChange={() => handleCheckBoxChange("column5")}
              />
              Author
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.column6}
                onChange={() => handleCheckBoxChange("column6")}
              />
              Status
            </label>
            <label>
              <input
                type="checkbox"
                checked={showColumn.column7}
                onChange={() => handleCheckBoxChange("column7")}
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

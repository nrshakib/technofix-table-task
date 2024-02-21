const Table = ({ data }) => {
  return (
    <div className="text-center ">
      <div className="flex gap-6 bg-gray-500 border rounded-lg text-white h-10 items-center w-2/3 pl-3">
        <div className="w-28 text-center">Title</div>
        <div className="w-28 text-center">Categories</div>
        <div className="w-28 text-center">Price</div>
        <div className="w-28 text-center">Date</div>
        <div className="w-28 text-center">Author</div>
        <div className="w-28 text-center">Status</div>
        <div className="w-28 text-center">Action</div>
      </div>
      {data.map((rowData, index) => (
        <div key={index} className="flex gap-6 mt-2 pl-3">
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
  );
};

export default Table;

const Table = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <div>Title</div>
          <div>Categories</div>
          <div>Price</div>
          <div>Date</div>
          <div>Author</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        {data.map((rowData, index) => (
          <div key={index}>
            <div>{rowData.title}</div>
            <div>{rowData.categories}</div>
            <div>{rowData.price}</div>
            <div>{rowData.date}</div>
            <div>{rowData.author}</div>
            <div>{rowData.status}</div>
            <div>{rowData.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;

import Table from "./components/Table";

const App = () => {
  // Sample data array
  const dataArray = [
    {
      title: "Book 1",
      categories: "Fiction",
      price: "$10",
      date: "2023-01-15",
      author: "Author 1",
      status: "Available",
      action: "Buy Now",
    },
    {
      title: "Book 2",
      categories: "Non-Fiction",
      price: "$15",
      date: "2023-02-20",
      author: "Author 2",
      status: "Out of Stock",
      action: "Notify Me",
    },
    // Add more data objects as needed
  ];

  return (
    <div className="my-5 mx-8">
      <h1 className="pb-5 text-center text-2xl font-bold uppercase text-blue-950">
        Table of Books
      </h1>
      <Table data={dataArray} />
    </div>
  );
};

export default App;

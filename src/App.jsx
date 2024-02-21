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
    {
      title: "Book 3",
      categories: "History",
      price: "$20",
      date: "2021-02-10",
      author: "Author 3",
      status: "Available",
      action: "Book Now",
    },
    {
      title: "Book 4",
      categories: "Fiction",
      price: "$15",
      date: "2023-08-20",
      author: "Author 4",
      status: "Available",
      action: "Book Now",
    },
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

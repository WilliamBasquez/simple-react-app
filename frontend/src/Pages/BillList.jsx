import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BillList() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/bills/data");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBills(data.expenses.debit);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Bill List Page</h1>
      <p>This is where the list of bills will be displayed.</p>
      <div className="entry-list">
        {bills.map((bill) => (
          <Link
            to={`/bills/${bill.id}`}
            key={bill.id}
            style={{
              border: "1px solid blue",
            }}
          >
            <p className="single-entry">{bill.description}</p>
          </Link>
        ))}
      </div>
      <div>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

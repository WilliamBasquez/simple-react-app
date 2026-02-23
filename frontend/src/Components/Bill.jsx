import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Bill() {
  const { id } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    fetch(`/api/bills/data/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBill(data);
      })
      .catch((error) => console.error("Error fetching bill data:", error));
  }, [id]);

  return (
    <>
      <div>
        {bill ? (
          <>
            <div>
              <h1>{bill.description}</h1>
              <p>Amount: ${bill.amount}</p>
              <p>Due Date: {bill.dueDate}</p>
              <p>Paid Date: {bill.paidDate ? bill.paidDate : "Not paid yet"}</p>
              <p>Group: {bill.group}</p>
            </div>
            <div className="navigation-buttons">
              <Link to={`/bills/Edit/${bill.id}`}>
                <button onClick={() => printBillDetails(bill)}>
                  Edit Entry
                </button>
              </Link>
              <button onClick={() => console.log("Delete Entry clicked")}>
                Delete Entry
              </button>
              <button onClick={() => console.log("Mark as Paid clicked")}>
                Mark as Paid
              </button>
            </div>
            <Link to="/">
              <button style={{ marginTop: "20px" }}>Back to Bill List</button>
            </Link>
          </>
        ) : (
          <p>Loading bill details...</p>
        )}
      </div>
    </>
  );
}

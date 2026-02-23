import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BillEdit() {
  // use custom hook to read specific bill from db.json file
  const { id } = useParams();

  const [bill, setBill] = useState(null);

  useEffect(() => {
    fetch(`/api/bills/data/${id}`)
      .then((response) => response.json())
      .then((data) => setBill(data))
      .catch((error) => console.error("Error fetching bill data:", error));
  }, [id]);

  return (
    <>
      <div>
        <h1>Bill Edit Page</h1>
        <p>This is where the bill editing form will be displayed.</p>
      </div>
      <div>
        {bill ? (
          <div>
            <h2>Editing Bill ID: {bill.id}</h2>
            <form id="editBillForm" onSubmit={UpdateDB}>
              <div className="row">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  id="description"
                  defaultValue={bill.description}
                />
              </div>
              <div className="row">
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" defaultValue={bill.amount} />
              </div>
              <div className="row">
                <label htmlFor="dueDate">Due Date:</label>
                <div>
                  <input type="date" id="dueDate" defaultValue={bill.dueDate} />
                </div>
              </div>
              <div className="row">
                <label htmlFor="paidDate">Paid Date:</label>
                <input
                  type="date"
                  id="paidDate"
                  defaultValue={bill.paidDate || ""}
                />
              </div>
              <div className="row">
                <label htmlFor="group">Group:</label>
                <input type="text" id="group" defaultValue={bill.group} />
              </div>
              <div className="row">
                <label htmlFor="lender">Lender:</label>
                <input type="text" id="lender" defaultValue={bill.lender} />
              </div>
              <div className="form-buttons">
                <button type="reset" className="resetBtn">
                  Reset
                </button>
                <Link to={`/bills/${bill.id}`}>
                  <button type="button" className="cancelBtn">
                    Cancel
                  </button>
                </Link>
                <button type="submit" className="submitBtn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p>Loading bill details...</p>
        )}
      </div>
    </>
  );
}

function UpdateDB(event) {
  event.preventDefault();
  console.log("UpdateDB function called");

  const form = document.getElementById("editBillForm");
  const formData = {
    description: form.description.value,
    amount: form.amount.value,
    dueDate: form.dueDate.value,
    paidDate: form.paidDate.value,
    group: form.group.value,
    lender: form.lender.value,
  };

  updateJsonValue("/db.json", bill.id, formData);
}

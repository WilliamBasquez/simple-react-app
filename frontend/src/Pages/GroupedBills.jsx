import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GroupedBills() {
  const [groups, setGroups] = useState([]);
  const [groupedBills, setGroupedBills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/bills/data");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        data.expenses.debit.forEach((bill) => {
          if (!groups.includes(bill.group)) {
            groups.push(bill.group);
            setGroups([...groups]);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Grouped Bills Page</h1>
        <p>This is where the grouped bills will be displayed.</p>
        <div className="entry-list">
          {groups.map((group, index) => (
            <div key={index} className="entry-list">
              <Link to={`/groups/${group}`}>
                <button>See Bills in {group}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </>
  );
}

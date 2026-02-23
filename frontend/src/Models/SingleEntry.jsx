export default function SingleEntry({
  id,
  description,
  amount,
  dueDate,
  paidDate,
  group,
}) {
  return (
    <div>
      <h2>{description}</h2>
      <p>Amount: ${amount}</p>
      <p>Due Date: {dueDate}</p>
      <p>Paid Date: {paidDate ? paidDate : "Not paid yet"}</p>
      <p>Group: {group}</p>
    </div>
  );
}

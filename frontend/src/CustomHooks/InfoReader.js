// Write a hook that reads a file and returns its content as json
import { useEffect, useState } from "react";

export function useInfoReader(filePath, id) {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readFile = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Error reading file: ${response.statusText}`);
        }
        const data = await response.json();
        let bill = data.expenses.debit.find((item) => item.id === parseInt(id));

        setContent(bill);
      } catch (err) {
        setError(err.message);
      }
    };

    readFile();
  }, [filePath, id]);

  return { content, error };
}

// Write a hook that reads a file and returns its content as json
import { useEffect, useState } from "react";

export function useFileReader(filePath) {
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
        const expenses = data.expenses.debit;

        setContent(expenses);
      } catch (err) {
        setError(err.message);
      }
    };

    readFile();
  }, [filePath]);

  return { content, error };
}

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //run any time the data changes.
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

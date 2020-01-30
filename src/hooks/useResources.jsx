import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resourceName => {
  const [resources, setResources] = useState([]);
  const fetchResources = async resourceName => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );

    setResources(response.data);
  };

  //if the value in the array changes, we are going to call the callback
  //function specified.
  useEffect(() => {
    fetchResources(resourceName);
  }, [resourceName]);

  return resources;
};

export default useResources;

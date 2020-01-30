import React from "react";
import useResources from "../hooks/useResources";

const ResourceList = ({ resourceName }) => {
  const resources = useResources(resourceName);
  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>
          {resourceName === "users" ? `${resource.name}` : `${resource.title}`}
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;

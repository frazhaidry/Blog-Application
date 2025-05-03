import React from 'react'
import { useParams } from "react-router-dom";

const DeleteBlog = () => {
  const { id } = useParams();
  return <div>Delete Blog ID: {id}</div>;
};

export default DeleteBlog;
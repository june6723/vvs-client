import React from 'react';
import { Link } from 'react-router-dom';

const ViewCommunity = ({ data }) => {
  const { admin, description, master, member, memberRequest, name, requestToJoin, tags, _id } = data;
  return (
    <div>
      <Link to={`community/${_id}`}>{name}</Link>
    </div>
  )
};

export default ViewCommunity;
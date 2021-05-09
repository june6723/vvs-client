import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CommunityCard = ({ data }) => {
  const { member, name, mainImg, tags, _id } = data;
  return (
    <div>
      <Link to={`community/${_id}`}>
        <div className="bg-cover z-0" style={{ backgroundImage:`url(${mainImg})`, height:"265px" }} >
          <div className="bg-black bg-opacity-50 z-10 h-full relative">
            <div className=" text-gray-100 flex flex-col items-center absolute top-1/2 -mt-3 w-full">
              <div className="flex flex-col items-center mb-5">
                <FaUsers className="w-6 h-6" />
                <span className="text-xs font-light">{ member.length > 1 ? `${member.length} members` : `${member.length} member`}</span>
              </div>
              <h4 className="font-medium">{name}</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
};

export default CommunityCard;
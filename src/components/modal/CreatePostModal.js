import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deactivateCreatePostModal } from '../../actions/postModal';

const CreatePostModal = () => {
  const showCreatePostModal = useSelector(state => ( state.postModal.showCreatePostModal ));
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deactivateCreatePostModal())
  }

  return (
    <>
      {showCreatePostModal ? (
        <div className="w-full h-full bg-black bg-opacity-80 fixed flex justify-center items-center z-20">
          <div className="w-1/2 h-1/2 shadow-md bg-white">
            CREATE POST MODAL
            <button onClick={handleClick}>Exit</button>
          </div>
        </div>
      ) : null 
      }
    </>
  )
  
}

export default CreatePostModal

import React from "react";

export default function Avatar({image, isNew}) {
  return (
    <div className="avatar">
      <img className="avatar" src={image} alt="이미지입니다." />
      {isNew && <span className='new'>New</span>}
    </div>
  );
}
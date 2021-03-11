import React from "react";

const GuestPost = ({ children }) => {
  return (
    <p className="guestpost">
      <em>{children} – Adoptium Team</em>
    </p>
  );
};

export default GuestPost;

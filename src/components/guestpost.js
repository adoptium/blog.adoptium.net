import React from "react";

const GuestPost = ({ children }) => {
  return (
    <p className="guestpost">
      <em>{children} – AdoptOpenJDK Team</em>
    </p>
  );
};

export default GuestPost;

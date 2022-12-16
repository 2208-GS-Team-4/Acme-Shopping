import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdateProfileButton from "./UpdateProfileButton";

/**
 *
 * Option 1: /api/users to get all users then filter based on criteria (name, unique id, etc)
 * - not sure how to obtain said unique id
 * Option 2: set up an api/users/:id route to get specific user based on id
 * - not sure how to obtain id rip
 */

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>{user.firstName}</h2>
      <h2>{user.lastName}</h2>
      <h2>{user.username}</h2>
      <h2>{user.password}</h2>
      {user.shippingAddress} && <h2>{user.shippingAddress}</h2>
      {user.billingAddress} && <h2>{user.billingAddress}</h2>
      {user.creditCard} && <h2>{user.creditCard}</h2>
      {user.phone} && <h2>{user.phone}</h2>
      <UpdateProfileButton />
    </div>
  );
};

export default UserProfile;

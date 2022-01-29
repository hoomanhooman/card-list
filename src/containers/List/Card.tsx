import React from "react";
import { RandomUserResponse } from "../../api/randomUser";

import "./Card.scss";

interface Props {
  user: RandomUserResponse;
  onClick?: (user: RandomUserResponse) => void;
}
const Card: React.FC<Props> = ({ user, onClick = () => {} }) => {
  return (
    <>
      <div className="card" onClick={() => onClick(user)}>
        <img src={user.picture.large} alt={user.name.title} className="logo" />
        <div className="family">
          {`${user.name.title} ${user.name.first} ${user.name.last}`}
        </div>
        <div className="email">
          <strong>email:</strong> {user.email}
        </div>
        <div className="phone">
          <strong>phone: </strong>
          {user.phone}
        </div>
        <div className="detai-btn">More Info</div>
      </div>
    </>
  );
};

export default Card;

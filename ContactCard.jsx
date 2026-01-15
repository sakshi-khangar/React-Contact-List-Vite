import React from "react";
import "./ContactCard.css";

function ContactCard({ name, email, phone, address }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
}

export default ContactCard;

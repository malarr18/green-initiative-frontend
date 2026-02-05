import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function InitiativeDetail() {

  const { id } = useParams();
  const [initiative, setInitiative] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/initiatives/${id}`)
      .then(res => res.json())
      .then(data => setInitiative(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!initiative) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>{initiative.title}</h2>

        <p><b>Description:</b> {initiative.description}</p>
        <p><b>Location:</b> {initiative.location}</p>
        <p><b>Date:</b> {initiative.date}</p>
        <p><b>Target:</b> {initiative.target}</p>

        <button className="btn btn-primary mt-3">
          Join Initiative
        </button>

      </div>

    </div>
  );
}

export default InitiativeDetail;

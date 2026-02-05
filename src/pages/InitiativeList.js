import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function InitiativeList() {

  const [initiatives, setInitiatives] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/api/initiatives/all")
      .then(res => res.json())
      .then(data => setInitiatives(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Green Initiatives</h2>

      <div className="row">

        {initiatives.map(item => (

          <div className="col-md-4 mb-4" key={item.id}>

            <div className="card shadow p-3 h-100">

              <h5>{item.title}</h5>

              <p>{item.description}</p>

              <p><b>Location:</b> {item.location}</p>
              <p><b>Date:</b> {item.date}</p>
              <p><b>Target:</b> {item.target}</p>

              <button 
                className="btn btn-success mt-2"
                onClick={() => navigate(`/initiative/${item.id}`)}
              >
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default InitiativeList;

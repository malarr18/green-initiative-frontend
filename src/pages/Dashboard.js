import React, { useEffect, useState } from "react";

function Dashboard() {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalInitiatives, setTotalInitiatives] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {

    fetch("http://localhost:8081/api/dashboard/total-users")
      .then(res => res.json())
      .then(data => setTotalUsers(data));

    fetch("http://localhost:8081/api/dashboard/total-initiatives")
      .then(res => res.json())
      .then(data => setTotalInitiatives(data));

    fetch("http://localhost:8081/api/dashboard/total-contributions")
      .then(res => res.json())
      .then(data => setTotalContributions(data));

  }, []);

  return (
    <div className="container mt-5">

      <h3 className="text-center mb-4">Dashboard</h3>

      <div className="row">

        <div className="col-md-4">
          <div className="card bg-primary text-white mb-3">
            <div className="card-body text-center">
              <h5>Total Users</h5>
              <h2>{totalUsers}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-success text-white mb-3">
            <div className="card-body text-center">
              <h5>Total Initiatives</h5>
              <h2>{totalInitiatives}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-warning text-white mb-3">
            <div className="card-body text-center">
              <h5>Total Contributions</h5>
              <h2>{totalContributions}</h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;

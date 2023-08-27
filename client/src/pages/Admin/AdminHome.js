import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Raktdaan App </h3>
          <hr />
          <p>

            The Blood Bank App aims to bridge the gap between blood donors and those in need of blood transfusions.it is a centralised blood record maintainance app.
            Purpose: The main objective of the app is to simplify and expedite the process of blood donation and acquisition, making it a seamless experience for both donors and recipients.
            User-Friendly Interface: Emphasize the app's easy-to-use interface, enabling users to quickly navigate through the features and services offered.
            Commitment to Save Lives: Reinforce the app's ultimate mission, which is to save lives by ensuring no one loses life due to unavailability of blood.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

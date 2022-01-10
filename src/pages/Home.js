import React from "react";

import { useGlobalContext } from "../context";

const Home = () => {
  const { closeIconbox } = useGlobalContext();

  return (
    <main>
      <section className="section">
        <div className="section-center" onMouseOver={closeIconbox}>
          <div className="welcome-info">
            <h2 className="welcome-note">
              Welcome to deco<span className="logo-span">Kassel</span>
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

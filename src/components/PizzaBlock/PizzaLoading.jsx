import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoading() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="299" rx="6" ry="6" width="280" height="84" />
      <rect x="10" y="266" rx="5" ry="5" width="260" height="24" />
      <rect x="11" y="402" rx="4" ry="4" width="79" height="27" />
      <rect x="130" y="393" rx="30" ry="30" width="150" height="44" />
    </ContentLoader>
  );
}

export default PizzaLoading;

import React from "react";

const useOrderSteps = () => {
  const qualify = useSelector((state) => state.qualify);
  const { phase1, phase2, phase3, phase4, phase5 } = qualify;

  return { phase1, phase2, phase3, phase4, phase5 };
};

export default useOrderSteps;

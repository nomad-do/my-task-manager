import { act as reactAct, render as rtlRender, screen, fireEvent, waitFor } from "@testing-library/react";

// Create a custom act function if needed
export const act = reactAct;

// Create a custom render function
export const customRender = (ui, options) => {
  let result;
  reactAct(() => {
    result = rtlRender(ui, options);
  });
  return result;
};

// Export individual utilities without re-exporting the entire module
export { screen, fireEvent, waitFor };


import { act as reactAct, render as rtlRender, screen, fireEvent, waitFor } from "@testing-library/react";

export const act = reactAct;

export const customRender = (ui, options) => {
  let result;
  reactAct(() => {
    result = rtlRender(ui, options);
  });
  return result;
};


export { screen, fireEvent, waitFor };


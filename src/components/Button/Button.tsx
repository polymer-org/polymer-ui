import React from "react";
import { css } from "../../../styled-system/css";

export const Button = (props: Record<string, string | number | React.ReactElement>) => {
  return <button className={css({ bg: "success" })}>{props.children}</button>;
};

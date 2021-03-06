import { Column, LargeText, Row, Space } from "@stenajs-webui/core";
import { Chip, ChipVariant } from "@stenajs-webui/elements";
import * as React from "react";

export default {
  title: "elements/Chip",
};

export const Standard = () => (
  <Column>
    {([
      "primary",
      "secondary",
      "error",
      "warning",
      "success",
      "passive",
      "turquoise",
    ] as Array<ChipVariant>).map((variant) => (
      <>
        <LargeText>{variant}</LargeText>
        <Space />
        <Row>
          <div className={"indent-items"}>
            <Chip variant={variant} label={"Default"} />
            <Chip
              variant={variant}
              label={"With onClick"}
              onClick={() => alert("hello world")}
            />
            <Chip
              variant={variant}
              label={"With onClickRemove"}
              onClickRemove={() => alert("remove")}
            />
            <Chip
              variant={variant}
              label={"With both"}
              onClick={() => alert("hello world")}
              onClickRemove={() => alert("remove")}
            />
          </div>
        </Row>
        <Space num={3} />
      </>
    ))}
  </Column>
);

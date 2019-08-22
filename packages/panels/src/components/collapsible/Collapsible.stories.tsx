import { Store, withState } from "@dump247/storybook-state";
import {
  Box,
  Clickable,
  LargeText,
  Space,
  StandardText
} from "@stenajs-webui/core";
import { Collapsible } from "@stenajs-webui/panels";
import { storiesOf } from "@storybook/react";
import * as React from "react";

interface State {
  isOpen: boolean;
}

storiesOf("panels/Collapsible", module).add(
  "standard",
  withState<State>({ isOpen: false })(({ store }: { store: Store<State> }) => {
    const Trigger = () => (
      <Clickable onClick={() => store.set({ isOpen: !store.state.isOpen })}>
        <Box alignItems={"center"}>
          <StandardText>{store.state.isOpen ? "close" : "open"}</StandardText>
        </Box>
      </Clickable>
    );

    return (
      <Box width={"400px"}>
        <Collapsible isOpen={store.state.isOpen} trigger={<Trigger />}>
          <Box background={"#9198e5"} spacing={2} indent={2}>
            <LargeText>Header</LargeText>
            <Space />
            <StandardText>Collapsible item content</StandardText>
            <Space />
            <StandardText>Collapsible item more content</StandardText>
            <Space />
            <StandardText>Collapsible item more content</StandardText>
            <Space />
            <StandardText>Collapsible item more content</StandardText>
            <Space />
            <StandardText>Collapsible item more content</StandardText>
            <Space />
            <StandardText>Collapsible item more content</StandardText>
          </Box>
        </Collapsible>
      </Box>
    );
  })
);

import { Store, withState } from "@dump247/storybook-state";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { TimeTextInput } from "./TimeTextInput";

interface TimeTextInputState {
  value?: string;
}

storiesOf("calendar/Input/TimeTextInput", module)
  .add(
    "standard",
    withState<TimeTextInputState>({
      value: undefined
    })(({ store }: { store: Store<TimeTextInputState> }) => (
      <TimeTextInput
        value={store.state.value}
        onValueChange={value => store.set({ value })}
      />
    ))
  )
  .add(
    "empty",
    withState<TimeTextInputState>({
      value: ""
    })(({ store }: { store: Store<TimeTextInputState> }) => (
      <TimeTextInput
        value={store.state.value}
        onValueChange={value => store.set({ value })}
      />
    ))
  )
  .add(
    "with time",
    withState<TimeTextInputState>({
      value: "23:59"
    })(({ store }: { store: Store<TimeTextInputState> }) => (
      <TimeTextInput
        value={store.state.value}
        onValueChange={value => store.set({ value })}
      />
    ))
  )
  .add(
    "with invalid time",
    withState<TimeTextInputState>({
      value: "9:xx"
    })(({ store }: { store: Store<TimeTextInputState> }) => (
      <TimeTextInput
        value={store.state.value}
        onValueChange={value => store.set({ value })}
      />
    ))
  )
  .add(
    "without icon",
    withState<TimeTextInputState>({
      value: undefined
    })(({ store }: { store: Store<TimeTextInputState> }) => (
      <TimeTextInput
        value={store.state.value}
        onValueChange={value => store.set({ value })}
        useIcon={false}
      />
    ))
  )
  .add(
    "without placeholder",
    withState<TimeTextInputState>({
      value: undefined
    })(({ store }: { store: Store<TimeTextInputState> }) => (
      <TimeTextInput
        value={store.state.value}
        onValueChange={value => store.set({ value })}
        showPlaceholder={false}
      />
    ))
  )
  .add(
    "disabled",
    withState<TimeTextInputState>({
      value: undefined
    })(({ store }: { store: Store<TimeTextInputState> }) => (
      <TimeTextInput
        value={store.state.value}
        onValueChange={value => store.set({ value })}
        disabled={true}
      />
    ))
  );

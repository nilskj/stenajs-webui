import * as React from "react";
import {
  CalendarWithMonthSwitcher,
  CalendarWithMonthSwitcherProps,
} from "../../../features/month-switcher/CalendarWithMonthSwitcher";

import { useSingleDateSelection } from "./UseSingleDateSelection";

export interface SingleDateCalendarProps<T>
  extends Omit<
    CalendarWithMonthSwitcherProps<T>,
    "currentPanel" | "setCurrentPanel" | "dateInFocus" | "setDateInFocus"
  > {
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
}

export function SingleDateCalendar<T extends {}>(
  props: SingleDateCalendarProps<T>
) {
  const singleDateSelectionProps = useSingleDateSelection(props);
  return (
    <CalendarWithMonthSwitcher<T> {...props} {...singleDateSelectionProps} />
  );
}

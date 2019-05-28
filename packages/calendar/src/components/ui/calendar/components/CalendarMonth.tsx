import { Box, Row, StandardText, useThemeFields } from "@stenajs-webui/core";
import * as React from "react";
import {
  CalendarDayProps,
  CalendarOnClicks,
  CalendarUserMonthData,
  DayState,
  DayStateHighlight,
  ExtraDayContentProps,
  Renderers
} from "../types/CalendarTypes";
import { DayData, MonthData, WeekData } from "../util/CalendarDataFactory";
import { CalendarTheme } from "./CalendarTheme";
import { CalendarWeek } from "./CalendarWeek";
import { WeekDayCell } from "./renderers/WeekDayCell";

export interface CalendarMonthProps<T> extends CalendarOnClicks<T>, Renderers {
  month: MonthData;
  dayComponent: React.ComponentType<CalendarDayProps<T>>;
  userDataPerWeek?: CalendarUserMonthData<T>;
  statePerWeek?: CalendarUserMonthData<DayState>;
  theme: CalendarTheme;
  headerLeftContent?: React.ReactElement<{}>;
  headerRightContent?: React.ReactElement<{}>;
  extraDayContent?: React.ComponentType<ExtraDayContentProps<T>>;
  defaultHighlights?: Array<DayStateHighlight>;
}

export const CalendarMonth = <T extends {}>({
  month,
  dayComponent,
  statePerWeek,
  userDataPerWeek,
  onClickDay,
  onClickWeek,
  onClickWeekDay,
  renderWeekNumber,
  renderWeekDay,
  headerLeftContent,
  headerRightContent,
  theme,
  extraDayContent,
  defaultHighlights
}: CalendarMonthProps<T>) => {
  const { colors } = useThemeFields(
    {
      colors: {
        headerTextColor: theme.CalendarMonth.headerTextColor,
        weekDayTextColor: theme.WeekDay.textColor
      }
    },
    [theme]
  );

  return (
    <>
      <Box alignItems={"center"}>
        <table style={{ borderSpacing: 0, borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ maxWidth: theme.width }}>
                <Box justifyContent={"center"} alignItems={"center"}>
                  {headerLeftContent}
                </Box>
              </td>
              <td colSpan={6}>
                <Row justifyContent={"center"} alignItems={"center"}>
                  <StandardText
                    color={colors.headerTextColor}
                    fontSize={"large"}
                  >
                    {month.name} {month.year}
                  </StandardText>
                </Row>
              </td>
              <td style={{ maxWidth: theme.width }}>
                <Box justifyContent={"center"} alignItems={"center"}>
                  {headerRightContent}
                </Box>
              </td>
            </tr>
            <tr>
              <td>
                <Box
                  width={theme.width}
                  height={theme.height}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <StandardText color={colors.weekDayTextColor}>W</StandardText>
                </Box>
              </td>
              {month.weeks[0].days.map((day: DayData) => (
                <td key={day.name}>
                  {renderWeekDay ? (
                    renderWeekDay(day.name, theme, onClickWeekDay)
                  ) : (
                    <WeekDayCell
                      day={day}
                      onClickWeekDay={onClickWeekDay}
                      theme={theme}
                    />
                  )}
                </td>
              ))}
            </tr>
            {month.weeks.map((week: WeekData) => (
              <CalendarWeek
                key={week.weekNumber}
                month={month}
                week={week}
                dayComponent={dayComponent}
                statePerWeekDay={statePerWeek && statePerWeek[week.weekNumber]}
                userDataPerWeekDay={
                  userDataPerWeek && userDataPerWeek[week.weekNumber]
                }
                onClickDay={onClickDay}
                onClickWeek={onClickWeek}
                theme={theme}
                renderWeekNumber={renderWeekNumber}
                extraDayContent={extraDayContent}
                defaultHighlights={defaultHighlights}
              />
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
};
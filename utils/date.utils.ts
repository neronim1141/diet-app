import moment from "moment";
import { Moment } from "moment";

export const isInDays = (initialDate: Moment, days: number) => (date: Moment) =>
  initialDate.diff(date, "days") && initialDate.diff(date, "days") < days;
export const isSame = (dateA: Moment) => (dateB: Moment) =>
  moment(dateB).isSame(dateA);
export const isToday = isSame(moment());
export const isLastWeek = isInDays(moment(), 8);
export const isLastMonth = isInDays(moment(), 30);

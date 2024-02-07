import { format } from "date-fns";

export const formatDate = (date) => {
  return date ? format(new Date(date), "dd/MM/yyyy HH:mm") : "Invalid Date";
};
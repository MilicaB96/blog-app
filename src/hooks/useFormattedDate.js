import { format } from "date-fns";

function useFormattedDate(str, outputFormat = "yyyy-MM-dd HH:mm:ss") {
  const formattedDate = format(new Date(str), outputFormat);
  return formattedDate;
}

export default useFormattedDate;

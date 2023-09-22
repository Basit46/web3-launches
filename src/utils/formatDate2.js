export function formatDate2(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateParts = inputDate.split("-");
  const month = months[parseInt(dateParts[1], 10) - 1];
  const day = dateParts[2];

  return `${day} ${month}`;
}

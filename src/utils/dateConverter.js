const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function convertToDateString(dateString) {
  const date = new Date(dateString);
  const formatted_date = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}:${String(
    `0${date.getMinutes()}`
  ).slice(-2)}`;
  return formatted_date;
}

export {convertToDateString};

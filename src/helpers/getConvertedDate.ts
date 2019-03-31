export const getConvertedDate = (date: string): string => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  const converted = `
  ${day}.
  ${month < 10 ? '0' + month : month}.
  ${year} в ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  return converted;
};

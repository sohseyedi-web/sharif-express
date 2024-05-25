import { toPersianNumbers } from "./toPersianNumbers";

export default function timeDifference(inputDate: string) {
  const inputDateTime = new Date(inputDate);
  const currentDate = new Date();
  const timeDiff = currentDate - inputDateTime;
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const weeksDiff = Math.floor(daysDiff / 7);
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(daysDiff / 365);

  let result;

  switch (true) {
    case secondsDiff < 60:
      result = `${toPersianNumbers(String(secondsDiff))} ثانیه`;
      break;
    case minutesDiff < 60:
      result = `${toPersianNumbers(String(minutesDiff))} دقیقه`;
      break;
    case hoursDiff < 24:
      result = `${toPersianNumbers(String(hoursDiff))} ساعت`;
      break;

    case daysDiff < 7:
      result = `${toPersianNumbers(String(daysDiff))} روز`;
      break;
    case weeksDiff < 4:
      result = `${toPersianNumbers(String(weeksDiff))} هفته`;
      break;
    case monthsDiff < 12:
      result = `${toPersianNumbers(String(monthsDiff))} ماه`;
      break;
    default:
      result = `${toPersianNumbers(String(yearsDiff))} سال`;
      break;
  }

  return result;
}

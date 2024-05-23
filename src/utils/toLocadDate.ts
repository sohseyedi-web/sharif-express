export default function toLocaleDate(date: Date) {
  return new Date(date).toLocaleDateString("fa-IR", {});
}

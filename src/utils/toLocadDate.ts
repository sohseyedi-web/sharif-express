export default function toLocaleDate(date: string) {
  return new Date(date).toLocaleDateString("fa-IR", {});
}

export function formatDate(givenDate: Date): string {
  return givenDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

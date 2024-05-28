export function calculateDuration(givenDate: Date): string {
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - givenDate.getTime();

  const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  const months =
    Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30)) % 12;
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) % 30;

  return `(${years}y - ${months}m - ${days}d)`;
}

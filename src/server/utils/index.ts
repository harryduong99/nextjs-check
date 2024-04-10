export function getCurrentDate() {
  const currentDate = new Date();
  console.log("currentDate", currentDate);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  console.log("month", month);
  console.log("day", day);

  return `${year}-${month}-${day}`;
}

export async function checkMetrics(address: string): Promise<any> {
  const date = getCurrentDate();
}

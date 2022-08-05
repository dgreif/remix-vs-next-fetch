const fetchPath = "https://www.github.com";

console.log("Fetching from " + fetchPath);

export async function testFetch(name, fetchMethod) {
  const durations = [];

  for (let i = 0; i < 5; i++) {
    const start = performance.now();

    const response = await fetchMethod("https://www.github.com");
    await response.text();
    const duration = performance.now() - start;

    console.log(name, Math.round(duration));
    durations.push(duration);
  }

  const average = durations.reduce((a, b) => a + b, 0) / durations.length;

  console.log(name, "average", Math.round(average), "\n");
  return average;
}

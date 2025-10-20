async function fetchEntropy() {
  try {
    const res = await fetch("https://entropy-api-1.vercel.app/api/entropy");
    const data = await res.json();

    document.getElementById("entropy-value").textContent = data.entropy;
    document.getElementById("updated-time").textContent =
      "Updated at " + new Date(data.updatedAt).toLocaleString();
  } catch (err) {
    document.getElementById("entropy-value").textContent = "⚠️";
    document.getElementById("updated-time").textContent =
      "Unable to fetch data";
  }
}

// initial call + refresh every 15 s
fetchEntropy();
setInterval(fetchEntropy, 15000);

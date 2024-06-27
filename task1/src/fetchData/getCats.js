export async function getCats() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=2");
  const data = await res.json();

  return data;
}

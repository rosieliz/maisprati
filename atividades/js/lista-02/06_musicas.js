/*
 * Crie um array de objetos representando músicas, cada uma com título, artista
 * e duração em segundos. Use for...of para exibir cada música no formato 
 * "Artista — Título (mm:ss)". Ao final, use forEach para somar a duração
 * total e exiba-a no mesmo formato.
 */

 const songs = [
   {
    title: "Until I Die",
    artist: "Machine Girl",
    duration: 247,
   },
   {
    title: "My Gabber is Your Gabba",
    artist: "DJ Technorch",
    duration: 317,
   },
   {
    title: "Einstein-Rosen Bridge",
    artist: "Venetian Snares",
    duration: 216,
   },
   {
    title: "High Speed! Strawberry",
    artist: "Goreshit",
    duration: 302,
   },
   {
    title: "Ageispolis",
    artist: "Aphex Twin",
    duration: 323,
   },
];
let totalDuration = 0;

console.log("Songs:");
for (const { title, artist, duration } of songs) {
  totalDuration += duration;
  console.log("%s - %s (%s)", artist, title, formatTime(duration));
}

console.log("\nTotal duration:", formatTime(totalDuration));


function formatTime(seconds) {
  let ss = 0;
  let mn = 0;

  for (let i = 0; i < seconds; i++) {
    ss++;
    if (ss == 60) {
      ss = 0;
      mn++;
    }
  }
 
  return `${mn}:${String(ss).padStart(2, "0")}`;
}

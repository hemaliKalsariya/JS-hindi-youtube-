const marvel_heros = ["thor",  "Ironman"]
const dc_heros = ["suparman", "flash", "batman"]


// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[2][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_arrey = [1, 2, 3, [4, 5]   [6, 7, [4, 5]] ] 
const myanothr_arrey = another_arrey.flat(Infinity)
console.log(myanothr_arrey);

console.log(Array.isArray("Hemali"));
console.log(Array.from("Hemali"));
console.log(Array.from({name: "Hemali"}));//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


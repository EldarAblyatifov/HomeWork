// Задание 1

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 15 }
];

const peopleWithStatus = people.map(person => {
  const status = person.age >= 18 ? "взрослый" : "ребенок";
  return { ...person, status };
});

console.log(peopleWithStatus);


// Задание 2

const movies = [
  { title: "Inception", rating: 4.9 },
  { title: "The Dark Knight", rating: 5.0 },
  { title: "Interstellar", rating: 4.8 },
  { title: "Avatar: The Last Airbender", rating: 2.5 },
  { title: "Transformers 5", rating: 3.2 },
  { title: "The Matrix", rating: 4.5 }
];

movies.forEach(movie => {
  if (movie.rating > 4) {
      console.log(movie.title);
  }
});
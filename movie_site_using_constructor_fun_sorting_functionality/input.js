//-->  create object and send it to local storage
let arrofobj = [
  {
    name: "Bhuj",
    date: "2022",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGVjYmM0ZWEtNTFjNi00MWZjLTk3OTItMmFjMDAzZWU1ZDVjXkEyXkFqcGdeQXVyMTI2Mzk1ODg0._V1_UX172_CR0,0,172,256_AL_.jpg",
    rating: "5",
  },

  {
    name: "Jai Bhim ",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTM0NWFjNGYtNjExMS00ZTZlLWFiYmMtZmU4ZjZkMmMxZTNjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_UY209_CR13,0,140,209_AL_.jpg",
    rating: "8.9",
  },

  {
    name: "Shershaah ",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR8,0,140,209_AL_.jpg",
    rating: "5",
  },

  {
    name: "Sooryavanshi",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_UX140_CR0,0,140,209_AL_.jpg",
    rating: "6.3",
  },

  {
    name: "Mster ",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWQxODNlMjktNjU3Yi00OTFmLTgyOTgtZDVhNDY5NzMwMmYwXkEyXkFqcGdeQXVyMTIwNjE1MTk0._V1_UY209_CR8,0,140,209_AL_.jpg",
    rating: "7.3",
  },

  {
    name: "Sardar Udham",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGFhNTYwZmMtNzk4Ny00MTExLThjMWUtNjYzMTEwZjEzMWQ3XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY209_CR13,0,140,209_AL_.jpg",
    rating: "8.5",
  },

  {
    name: "Mimi",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTkwMDQ4ZmEtNTdhNi00MmMzLTgwNTQtMDI1NDJjZjQ5Zjg5XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_UY209_CR8,0,140,209_AL_.jpg",
    rating: "7.8",
  },
  {
    name: "Karnan ",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGFmM2IzMjctMjg4Yy00OTgyLTk4Y2ItMWRhMmJjZWZjMzg4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR19,0,140,209_AL_.jpg",
    rating: "8.1",
  },
  {
    name: "Shiddat",
    date: "2021",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2U2NzcyYWQtYWRkNi00NWE2LWFlN2UtMjY0MzJkMWQzZDI2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY209_CR13,0,140,209_AL_.jpg",
    rating: "7.7",
  },
];

localStorage.setItem("arrobj", JSON.stringify(arrofobj));

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const books = getBook(2);
// const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
//   books;

// console.log(title, author);

// const [primarygenr, secondarygen, ...otherGenres] = genres;
// //console.log(primarygenr, secondarygen, otherGenres);

// const newGenre = [...genres];
// // console.log(newGenre);

// const bookOne = getBook(1);
// const updatedBook = {
//   ...bookOne,
//   newPublicationData: "1992-11-22",
//   pages: 2000,
// };
// // console.log(updatedBook);

// const literalValue = `${title} Bini Babu`;
// //console.log(literalValue);

// const terValue = pages > 200 ? "Greater than 200" : "Less than 200";
// //console.log(terValue);

// function publishDate(str) {
//   return str.split("-")[0];
// }
// //console.log(publishDate(publicationDate));

// const getYear = (str) => {
//   return str.split("-")[0];
// };
//console.log(getYear(publicationDate));

//console.log(true && "Say Something");
//console.log(false && "Say Something");
//console.log(hasMovieAdaptation && "Say Something");

//console.log("jonas" && "Say Something");

//console.log(true || "Say Something");

// console.log(bookOne.translations.english);
// const english = bookOne.translations.english || "Not transalated";
// console.log(english);

// function bookCount(book) {
//   var goodCount = book.reviews.goodreads?.reviewsCount;
//   var libraryCount = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodCount + libraryCount;
// }
// console.log(bookCount(books));

// const x = [1, 2, 3, 4].map((el) => el * 2);
// console.log(x);

// const books = getBooks();
// function bookCount(book) {
//   var goodCount = book.reviews.goodreads?.reviewsCount;
//   var libraryCount = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodCount + libraryCount;
// }

// const title = books.map((value) => {
//   return {
//     author: value.author,
//     title: value.title,
//     reviewCount: bookCount(value),
//   };
// });
// console.log(title);

//const books = getBooks();
// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation)
//   .map((val) => val.title);
// console.log(longBooks);

// const books = getBooks();
// const adventureBook = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventureBook);

// const books = getBooks();
// const pagesAllBook = books.reduce((accum, book) => accum + book.pages, 0);
// console.log(pagesAllBook);

// const arr = [4, 2, 9, 5, 1];
// const sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr);
// console.log(arr);

// const arr = [4, 2, 9, 5, 1];
// const sortedArr = arr.slice().sort((a, b) => a - b);
// console.log(sortedArr);
// console.log(arr);

// const books = getBooks();
// const sortPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortPages);

//Add book object to array
const books = getBooks();
const newBook = {
  id: 6,
  title: "The Harry potter and the chamber of secrets",
  author: "J K Rowling",
};
const bookAfterAdd = [...books, newBook];
//console.log(bookAfterAdd);

//delete book
const bookDelete = bookAfterAdd.filter((book) => book.id !== 3);
//console.log(bookDelete);

//update book

// const bookUpdate = bookDelete.map((book) => (book.id === 1 ? {} : book));
// console.log(bookUpdate);
const bookUpdate = bookDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 2000 } : book
);
//console.log(bookUpdate);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
getTodos();

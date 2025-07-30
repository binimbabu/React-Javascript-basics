React

React is extremely popular declarative component based state driven JavaScript library for building user interfaces created by Facebook.
Components are the building blocks of user interfaces in React such as buttons, input fields, search bars and so on. react takes the components are draw the webpage.
JSX describes how components look like and how they work using a declarative syntax called JSX. React tells how a component should look like based on current data and state. JSX a syntax that combines HTML, CSS , JavaScript as well as referencing other components.
React does not touches DOM. But DOM is interacted using state driven.
State render UI and if we click something on the webpage say a button click then the state is updated and state re-renders UI.
React reacts to state changes by re-rendering the UI.
React is a library because React is only a view layer. Need to pick multiple external libraries to build a complex application (eg: for routing or data fetching). Complete framework like Nextjs has external libraries.
React renders components on a webpage based on the current state. Keeps the Ui sync with state byre-rendering when the state changes.






   <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>

here React is called


Below ReactDOM is used

 <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>


In the below code portion

React.createElement("header", null, `Hello React! It's ${time}`)


header is the element to be created , props is given as null, The content inside the header tag is 'Hello React! It's ${time}'


React.useEffect(function () {
          setInterval(function () {
            setTime(new Date().toLocaleTimeString());
          }, 1000);
        }, []);


the above code is to update the date in header tag in UI automatically every 1 second by the use of useEffect

Full Example of React and ReactDOM


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="root"></div>

    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>

    <script>
      function App() {
        // const time = new Date().toLocaleTimeString();
        const [time, setTime] = React.useState(new Date().toLocaleTimeString());

        React.useEffect(function () {
          setInterval(function () {
            setTime(new Date().toLocaleTimeString());
          }, 1000);
        }, []);

        return React.createElement("header", null, `Hello React! It's ${time}`);
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(React.createElement(App));
    </script>
  </body>
</html>




Vite is a modern build tool that contains a template for setting up react application. Vite is extremely fast hot module replacement and bundling.



Destructuring Objects and Arrays in JavaScript



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

const books = getBook(2);
const { title, author } = books;

console.log(title, author);

const [primarygenr, secondarygen] = genres;
console.log(primarygenr, secondarygen);



const { title, author } = books; this called destructuring from object here title and author should have the same property name in 'data' object. So we get the title and author from the books object instance for id =2 (const books = getBook(2); )


Array destructuring done as follows where genres will return the first and second genres for id = 2 are placed in primarygenr and secondarygen

const books = getBook(2);
const { title, author, genres } = books;
const [primarygenr, secondarygen] = genres;
console.log(primarygenr, secondarygen);



Rest operator

To get all other array elements we can use rest operator. Here for id = 2 'genres' is an array where we want to get all the values after getting the first and second location of genres with primarygen and secondarygen. and after use the rest operator with different array name i.e here 'otherGenres' and rest operator can be placed at the end of destructuring.

const books = getBook(2);
const { title, author, genres } = books;

console.log(title, author);


Output

[ 'The Cyberiad', 'Stanislaw Lem' ]


const books = getBook(2);
const { title, author, genres } = books;

console.log(title, author);
const [primarygenr, secondarygen, ...otherGenres] = genres;
console.log(primarygenr, secondarygen, otherGenres);

Output

[
  'science fiction', 'humor', [ 'speculative fiction', 'short stories', 'fantasy' ]
]


Spread operator for array

To get all elements in the array and assign that to a different array we can use spread operator.


const books = getBook(2);
const { title, author, genres } = books;

const newGenre = [...genres];
console.log(newGenre);

Output

[
  'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'
]

Spread operator for object

When we want to add additional property to 'books' property along with already existing books property values for id =1. Additionally pages: 2000 the already existing pages property which we get from spread operator will be replaced with new value to pages property in 'bookOne' as 2000. Whenever we want to update the already existing property value to different value we should place the spread operator first.

const bookOne = getBook(1);
const updatedBook = { ...bookOne, newPublicationData: "1992-11-22", pages: 2000 };
console.log(updatedBook);

Output

{
  id: 1,
  title: 'The Lord of the Rings',
  publicationDate: '1954-07-29',
  author: 'J. R. R. Tolkien',
  genres: [
    'fantasy',
    'high-fantasy',
    'adventure',
    'fiction',
    'novels',
    'literature'
  ],
  hasMovieAdaptation: true,
  pages: 2000,
  translations: {
    spanish: 'El señor de los anillos',
    chinese: '魔戒',
    french: 'Le Seigneur des anneaux'
  },
  reviews: {
    goodreads: { rating: 4.52, ratingsCount: 630994, reviewsCount: 13417 },
    librarything: { rating: 4.53, ratingsCount: 47166, reviewsCount: 452 }
  },
  newPublicationData: '1992-11-22'
}






Template literal

Template literal is denoted by backtick ``. ${title} is the JavaScript expression. The javascript expression written inside backtick

const literalValue = `Bini Babu`;
console.log(literalValue);


const books = getBook(2);
const { title, author, genres } = books;
const literalValue = `${title} Bini Babu`;
console.log(literalValue);

Output

'The Cyberiad Bini Babu'



Ternary operator


const books = getBook(2);
const { title, author, genres, pages } = books;
const terValue = pages > 200 ? "Greater than 200" : "Less than 200";
console.log(terValue);

Output

'Greater than 200'





Arrow function


Traditional function written in this way

const books = getBook(2);
const { title, author, genres, pages, publicationDate } = books;

function publishDate(str) {
  return str.split("-")[0];
}
console.log(publishDate(publicationDate));

Output

'1965'


Arrow function example


const getYear = (str) =>
{
 return str.split("-")[0];
}
console.log(getYear(publicationDate));

Output

'1965'






Short circuiting and logical operators


Logical &&

console.log(true && 'Say Something')

Output

'Say Something'

Here (console.log(true && 'Say Something')) since we use logical && the first value is true it goes to second value and print 'Say Something'.


Since we give false initially in (console.log(false && "Say Something");) then it does not go to 'Say Something' and the output is false. Since we use logical && operator.

console.log(false && "Say Something");

output
false


Example

const books = getBook(2);
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  books;
console.log(hasMovieAdaptation && "Say Something");

Output

false


truthy values are anything thats not falsy value
falsy value are 0, '', null, undefined

example

console.log('jonas' && "Say Something");

Output

'Say Something'

since 'jonas' is truthy value the console will print the second that is 'Say Something'


Logical ||

console.log(true || "Say Something");

Output
true

console.log(false || "Say Something");

Output

'Say Something'

When the first value is true and an logical OR operator is used then first value is printed. But if the first value is false and logical OR operator is used then second argument is evaluated.


example

console.log(bookOne.translations.english);

Output 
undefined


example

const english = bookOne.translations.english || 'Not transalated';
console.log(english);

Output

'Not transalated'

Because 'bookOne.translations.english' is undefined hence 'Not transalated' value will be assigned to 'english' variable.



console.log(book.reviews.libranything.reviewsCount);
// Output: 0


const countWrong = book.reviews.libranything.reviewsCount || 'no data';
console.log(countWrong);
// Output: 'no data'

Even if book.reviews.libranything.reviewsCount has value 0 since 0 is fasly hence the second value is evaluated to overcome this we use Nullish Coalescing Operator '??'


const count = book.reviews.libranything.reviewsCount ?? 'no data';
console.log(count);
// Output: 0


When the first operand is 0 or '' empty string then Nullish Coalescing Operator will return the first operand . But when the first operand is null or undefined then second operand is evaluated

The default 'no data' is only used if the value is null or undefined.

Logical operators && and || in JavaScript implement short circuiting, returning the first value that determines the outcome without evaluating the second.
The && operator short circuits when the first operand is falsy, returning it immediately.
The || operator short circuits when the first operand is truthy, returning it immediately.
The nullish coalescing operator ?? returns the second operand only if the first is null or undefined, avoiding issues with falsy values like zero or empty strings.





Optional chaining (?)


function bookCount(book) {
  var goodCount = book.reviews.goodreads?.reviewsCount;
 var libraryCount = book.reviews.librarything?.reviewsCount ?? 0;
  return goodCount + libraryCount;
}
console.log(bookCount(books));

Output
812

If  book.reviews.goodreads and book.reviews.librarything exists or not null or not undefined only then the reviewsCount are extracted and sum up. 
var libraryCount = book.reviews.librarything?.reviewsCount ?? 0; In this nullish coalescing operator ?? used if value is book.reviews.librarything?.reviewsCount is null or undefined then the value will be set 0.




Map

map is used to create a new array from the original array by applying a operation on each elements in the array.

const x = [1,2,3,4].map((el)=> el*2)
console.log(x)

Output
[ 2, 4, 6, 8 ]

Here 'el' is the current value in the array.


const books = getBooks();
const title = books.map((value) => value.title);
console.log(title);

Output

[
  'The Lord of the Rings', 'The Cyberiad', 'Dune', 'Harry Potter and the Philosopher\'s Stone',
  'A Game of Thrones'
]



const books = getBooks();
const title = books.map((value) => {
  return {
     author: value.author,
    title: value.title,
    reviewCount: bookCount(value)
  };
});
console.log(title);

Output

[
  {
    author: 'J. R. R. Tolkien',
    title: 'The Lord of the Rings',
    reviewCount: 13869
  },
  {
    author: 'Stanislaw Lem',
    title: 'The Cyberiad',
    reviewCount: 812
  },
  { author: 'Frank Herbert', title: 'Dune', reviewCount: 49701 },
  {
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Philosopher\'s Stone',
    reviewCount: 142585
  },
  {
    author: 'George R. R. Martin',
    title: 'A Game of Thrones',
    reviewCount: 60153
  }
]






Filter

const books = getBooks();
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

Here each 'book' will filter pages thats greater than 500 then it will return true and those book will be picked up  and will place in new array 'longBooks'. If pages less than 500 exists that will return false and will not pick up those book and will not place in new array 'longBooks'.
filter will go through each array element. Second filterwill filter each book where hasMovieAdaptation returns true.


const books = getBooks();
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((val) => val.title);
console.log(longBooks);

Output

[ 'The Lord of the Rings', 'Dune', 'A Game of Thrones' ]



const books = getBooks();
const adventureBook = books.filter((book) => book.genres.includes('adventure')).map((book) => book.title);
console.log(adventureBook);

Output
[ 'The Lord of the Rings', 'Dune', 'Harry Potter and the Philosopher\'s Stone' ]




Reduce

reduce is used to reduce the whole array into a single value. In the below code we use reduce to count the number of pages each book has. reduce method has 2 arguments first is the function and second argument is the starter value.


const books = getBooks();
const pagesAllBook = books.reduce((accum, book) => accum + book.pages, 0);
console.log(pagesAllBook);

Output
3227

'accum' starts with value 0 and adds with the pagesnumber of each 'book.pages' and each pages sum will be stored in accum. 'book' is the current value.





Sort

sorts the elements. Below in the sort there is 2 arguments 'a' and 'b' where 'a' is the current value and 'b' is the next value. When a -b is negative then the smaller number will be placed first and then larger number and is placed in ascending order. sort mutates (changes) the original array.

const arr = [4, 2, 9, 5, 1];
const sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);
console.log(arr);

Output

[ 1, 2, 4, 5, 9 ]
[ 1, 2, 4, 5, 9 ]


Since sort mutates (changes) the original array we can use slice which will make a copy of original array and sorting done on the copy of the array. Like shown below.

const arr = [4, 2, 9, 5, 1];
const sortedArr = arr.slice().sort((a, b) => a - b);
console.log(sortedArr);
console.log(arr);

Output

[ 1, 2, 4, 5, 9 ]

[4, 2, 9, 5, 1]

Sort book by descending order of pages property shown below

const books = getBooks();
const sortPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortPages);





Working With Immutable Arrays


In React, many operations need to be immutable, meaning we do not manipulate the underlying data structure directly. Therefore, it is quite important to know how to add elements to an array, delete elements, and update elements all without mutating the original underlying array.

//Add book object to array

const books = getBooks();
const newBook = {
  id: 6,
  title: "The Harry potter and the chamber of secrets",
  author: "J K Rowling",
};
const bookAfterAdd = [...books, newBook];
console.log(bookAfterAdd);

Here we added 'newBook' book object into already existing 'books' array of books.

Deleting book with id = 3

//Add book object to array
const books = getBooks();
const newBook = {
  id: 6,
  title: "The Harry potter and the chamber of secrets",
  author: "J K Rowling",
};
const bookAfterAdd = [...books, newBook];
//console.log(bookAfterAdd);

const bookDelete = bookAfterAdd.filter((book) => book.id !== 3);
console.log(bookDelete);

To update inside an array we use map

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

const bookUpdate = bookDelete.map((book)=> book.id === 1 ? {} : book)


Here in the update ( bookDelete.map((book)=> book.id === 1 ? {} : book) ) where the id = 1 will have empty object and otherwise the corresponding book is returned.



const bookUpdate = bookDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 2000 } : book
);
console.log(bookUpdate);


Here we updated for book with id = 1 with pages as 2000.






Asynchronous JavaScript: Promises

 function called fetch into which we can pass the URL of an API. Since the fetch returns a promise we have to call 'then'. As soon as the promise is called 'then' is called when data is reached. Since 'res.json()' is also returning a promise we have to call again 'then'

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));


Asynchronous JavaScript: Async/Await


we create an async function by prefixing it with the async keyword. For example, we can define a function called getTodos as an async function.

Inside this async function, we can use the await keyword to pause execution until a promise resolves. For example, we can await the fetch call directly inside the function.

When using await inside an async function, JavaScript does not immediately move on to the next line. Instead, it pauses execution until the awaited promise resolves, unlike the default behavior where JavaScript moves immediately to the next line without waiting.

This pause makes the function look more like normal synchronous JavaScript code. We can store the result of the awaited promise into a variable, such as response, making the code more legible and easier to understand.

Similarly, we can await the JSON parsing of the response and store it in a variable called data. Then, we can log this data to the console.

Finally, we call the async function to execute the data fetching and logging.



async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
getTodos();

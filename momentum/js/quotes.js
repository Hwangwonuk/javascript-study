const quotes = [
  {
    quote: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other p",
    author: "John Lennon",
  },
  {
    quote: "The world is a book and those who do not travel read only",
    author: "Saint Augustine",
  },
  {
    quote: "third",
    author: "third a",
  },
  {
    quote: "four",
    author: "f",
  },
  {
    quote: "five",
    author: "f",
  },
  {
    quote: "six",
    author: "s",
  },
  {
    quote: "seven",
    author: "s",
  },
  {
    quote: "eight",
    author: "e",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

let apiQuotes = [];

// Show New Quote
function newQuote() {
  //Pick a random quote from apiQuotes array.
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Pick a randon Quote from local Storage.
  // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error here
  }
}

// On load
getQuotes();

// If you want to get quotes from local storage.
// newQuote();

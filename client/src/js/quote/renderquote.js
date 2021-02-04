const renderQuote = data => {
  const $phrase = document.querySelector('.quotes-info-phrase');
  const $author = document.querySelector('.quotes-info-author');

  $author.textContent = data.quotes[1].author;
  $phrase.textContent = data.quotes[1].text;
};

export default renderQuote;

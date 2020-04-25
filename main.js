const InputElement = document.querySelector('#searchText');
const SearchButton = document.querySelector('#search');
const APIkey = "553ab1d7"
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=553ab1d7"

buttonElement.onclick = function (event) {
  event.preventDefault();
  const value = InputElement.value;

  fetch(url)
    .then((res) => res.json)
    .then((data) =>{

    })
    .catch();
}

function MovieContainer(movies) {
  const movieElement = document.createElement('div');
  movieElement.setAttributes('class','movie');
  const movieTemplate = `
  <div class="movie">
   <section class="section">
   <img 
   src="" 
   alt=""  
   data-movie-id=""/>
   <img 
   src="" 
   alt="" 
   data-movie-id="">
   </section>
  <div class="content">
    <p id="content2">X</p>
      </div>
    </div>
  `;
}
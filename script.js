'use strict';

  const searchURL = "https://api.github.com/users/dcalamity/repos";

  function displayResults(userNameRepos){
    $('#repo-list').empty();
    $('h2').empty();

    console.log(userNameRepos)

    const userNameSearch = $('#username-search').val();
    //giving the results a title and username
    $('h2').append(`List of Repos for ${userNameSearch}`)

    for (let i = 0; i < userNameRepos.length; i++){
      $('#repo-list').append(
        `<li><h3>${userNameRepos[i].name}</h3></li>
         <li><h4><a target="_blank" href="${userNameRepos[i].html_url}">Link!</h4></li>`
      )}
      $('#results').removeClass('hidden');
  }

  function searchUsername(userNameSearch){
    fetch(`https://api.github.com/users/${userNameSearch}/repos`)
    .then(response => response.json())
    .then(userNameRepos => displayResults(userNameRepos))

  };




  function submitForm(){
    $('form').submit(event => {

      event.preventDefault();
        const userNameSearch = $('#username-search').val();
        //alert('submit clicked')
        searchUsername(userNameSearch);
    });
  }



  $(submitForm)
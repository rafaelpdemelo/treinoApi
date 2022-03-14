// // CODE FOR POST METHOD

const form = document.getElementById("formPost");
form.onclick = fetchPost;

function fetchPost(e) {
  e.preventDefault();

  let articleBody = document.getElementById("articleBody");
  let headLine = document.getElementById("headLine");

  fetch(
    "http://localhost:8080/o/headless-delivery/v1.0/sites/20123/blog-postings/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@liferay.com:test"),
      },

      body: JSON.stringify({
        articleBody: `${articleBody.value}`,
        headline: `${headline.value}`,
      }),
    }
  )
    .then((resposta) => resposta.json())
    .then((data) => console.log(data));
}

//-------------------------------------------------------------------------------------------

//CODE FOR GET METHOD
function fetchGet() {
  fetch(
    "http://localhost:8080/o/headless-delivery/v1.0/sites/20123/blog-postings",
    {
      method: "GET",
      headers: new Headers({
        Authorization: "Basic " + btoa("test@liferay.com:test"),
        "Content-Type": "application/json",
      }),
    }
  )
    .then((resposta) => resposta.json())
    .then((data) => console.log(data));
}

//CODE FOR GET BY ID

const formGetById = document.getElementById("formGetById");
formGetById.onclick = fetchGetById;

function fetchGetById(e) {
  e.preventDefault();

  let blogPostingId = document.getElementById("getbyid");

  fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${blogPostingId.value}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@liferay.com:test"),
      },
    }
  )
    .then((resposta) => resposta.json())
    .then((data) => console.log(data));
}

// CODE FOR DELETE BY ID

const formDeleteById = document.getElementById("formDeleteById");
formDeleteById.onsubmit = fetchdeleteById;

function fetchdeleteById(e) {
  e.preventDefault();

  let blogPostingIdForDelete = document.getElementById("deleteById");

  fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${blogPostingIdForDelete.value}`,
    {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@liferay.com:test"),
      }),
    }
  )
}


// -------------------------- DOCUMENTS AND MIDIA

function fetchPostImage (e){
  e.preventDefault();

  let imgPost = document.getElementById("formUploadImage");
  

fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20123/documents",{

});
}
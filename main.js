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
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@liferay.com:test"),
      },
    }
  )
    .then((resposta) => resposta.json())
    .then((data) => console.log(data));
}

//CODE FOR GET BY ID

function fetchGetById(){
fetch(
  "http://localhost:8080/o/headless-delivery/v1.0/sites/20123/blog-postings", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("test@liferay.com:test"),
    },
  }
  .then((resposta) => resposta.json())
  .then((data) => console.log(data));
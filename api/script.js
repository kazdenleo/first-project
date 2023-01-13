// создаёт разметку для поста
function createPostMarkup(post) {
    return `
      <div class="post">
        <p class="post__title">${post.title}</p>
        <p class="post__text">${post.body}</p>
      </div>
    `;
  }
  
  // вставляет разметку в DOM
  function addPostToDOM(container, markup) {
    container.insertAdjacentHTML('afterbegin', markup);
  }
  
  function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((posts) => {
        posts.forEach((post) => {
          addPostToDOM(document.querySelector('.container'), createPostMarkup(post));
        });
      });
  } 
  
  getPosts();
  
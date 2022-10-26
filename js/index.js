import { posts } from "../data/posts.js";

const allPost = document.querySelector(".all-post");

posts.forEach((i) => {
  allPost.innerHTML += `
<div class="col-md-6">
<article class="entry card">
  <div class="entry__img-holder card__img-holder">
    <a href="${i.id}">
      <div class="thumb-container thumb-70">
        <img data-src="${i.img}" src="${i.img}" class="entry__img lazyload" alt="" />
      </div>
    </a>
  </div>

  <div class="entry__body card__body">
    <div class="entry__header">
      
      <h2 class="entry__title">
        <a href="${i.id}">${i.title}</a>
      </h2>
      <ul class="entry__meta">
        <li class="entry__meta-date">
          ${i.date}
        </li>
      </ul>
    </div>
    <div class="entry__excerpt">
      <p style="text-overflow: ellipsis;">${i.post.slice(0,25)}...</p>
    </div>
  </div>
</article>
</div>
`;
});


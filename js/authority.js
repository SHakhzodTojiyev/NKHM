import { authority } from "../data/authority-data.js";

const allPost = document.querySelector(".all-post");

authority.forEach((i) => {
    allPost.innerHTML += `
  <div class="col-md-3">
  <article class="entry card">
    <div class="entry__img-holder card__img-holder">
        <div class="thumb-container thumb-70">
          <img data-src="${i.author_img}" src="${i.author_img}" class="entry__img lazyload" alt="" />
        </div>
      </a>
    </div>
    <div class="entry__body card__body">
      <div class="entry__header">
        
        <h2 class="entry__title">
          ${i.author_name}
        </h2>
        <ul class="entry__meta">
          <li class="entry__meta-date">
            ${i.author_position}
          </li>
        </ul>
      </div>
      <div class="entry__excerpt">
        <p style="text-overflow: ellipsis;">Tell: ${i.author_number}</p>
        <p style="text-overflow: ellipsis;">Email: ${i.author_email}</p>
      </div>
    </div>
  </article>
  </div>
  `;
  });
  
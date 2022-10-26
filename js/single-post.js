import { posts } from "../data/posts.js";

const content = document.getElementById("content");


posts.forEach((i) => {
    if(window.location.pathname == i.id) {
        content.innerHTML += `
    <!-- post content -->
        <div class="col-lg-8 blog__content mb-72">
          <div class="content-box">           

            <!-- standard post -->
            <article class="entry mb-0">
              
              <div class="single-post__entry-header entry__header">
                <h1 class="single-post__entry-title">${i.title}</h1>

                <div class="entry__meta-holder">
                  <ul class="entry__meta">
                    <li class="entry__meta-author">
                      <span>by</span>
                      <a href="#">Admin</a>
                    </li>
                    <li id="single-post-date" class="entry__meta-date">
                      ${i.date}
                    </li>
                  </ul>
                </div>
              </div> <!-- end entry header -->

              <div class="entry__img-holder">
                <img src="${i.img}" alt="" class="entry__img">
              </div>

              <div class="entry__article-wrap">

                <div class="entry__article">
                  <p>${i.post}</p>
                </div> <!-- end entry article -->
              </div> <!-- end entry article wrap -->                 

            </article> <!-- end standard post -->

          </div> <!-- end content box -->
        </div> <!-- end post content -->
  `;
    }
  });
  
  
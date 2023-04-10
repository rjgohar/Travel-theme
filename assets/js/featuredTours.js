const baseUrl = "https://splendidtours.pk/backend/v1";
const imageUrl = "https://splendidtours.pk/backend/v1/assets/img/";
const apiEndPoint = "/api/tour/featured";
const api = fetch(baseUrl + apiEndPoint);

api
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    let card = document.querySelector("#featuredDestination");
    response.forEach((element) => {
      console.log(element);
      let data = ` <div class="col-lg-4 col-md-6">
        <article
          class="destination-item"
          style="background-image: url(${imageUrl + element.image_url})"
        >
          <div class="destination-content">
            <div class="rating-start-wrap">
              <div class="rating-start">
                <span style="width: 100%"></span>
              </div>
            </div>
            <span class="cat-link">
             
            </span>
            <h3>
              <a href="package-detail.html">${element.title}</a>
            </h3>
            <p>
              Khunjerab Pass is a high mountain pass located in the
              Karakoram mountain range in the northern area of
              Pakistan.
            </p>
          </div>
        </article>
      </div>`;
      card.innerHTML = data;
    });
  });

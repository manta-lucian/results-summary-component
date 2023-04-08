const data = fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const html = data
      .map((el, i) => {
        return ` 
      <div class="test test-${i + 1}">
        <div class="test__left">
          <img class="image" src="${el.icon}" alt="#" />
          <p class="test__left-${i + 1}">${el.category}</p>
        </div>
        <div class="test__right">
          <p class="my-score">${el.score} <span class="span-1">/ 100</span></p>
        </div>
      </div>`;
      })
      .join("");
    document.querySelector(".tests").insertAdjacentHTML("beforeend", html);
  });

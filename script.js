const ratingComponent = document.querySelector("#rating");
const ratingForm = document.querySelector("#rating-form");
const thanksComponent = document.querySelector("#thanks");
const selectedRating = document.querySelector(".selected-rating");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const rating = document.querySelector('input[name="rating"]:checked').value;

  ratingComponent.addEventListener("animationend", () => {
    ratingComponent.style.display = "none";
    thanksComponent.style.display = "block";

    thanksComponent.classList.add("fade-in");

    let color = "";
    if (rating == 1) {
      color = "red";
    } else if (rating == 2) {
      color = "orange";
    }

    selectedRating.innerHTML = `You selected <span style="color:${color};">${rating}</span> out of 5`;
  });
  ratingComponent.classList.add("fade-out");
});

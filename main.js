const markAllAsRead = document.getElementById("tes");
const notiCount = document.querySelector(".notificationCount");
const redDots = document.querySelectorAll(".redDot");
const backgroundRem = document.querySelectorAll(".notificationCard");

markAllAsRead.addEventListener("click", function () {
  notificationCount();
  redDotRemoving();
  backgroundRemove();
});

backgroundRem.forEach((card) => {
  card.addEventListener("click", backgroundRemoveSolo);
});

function notificationCount() {
  notiCount.innerHTML = "0";
}

function redDotRemoving() {
  redDots.forEach((redDots) => {
    redDots.style.display = "none";
  });
}

function backgroundRemove() {
  backgroundRem.forEach((backgroundRem) => {
    backgroundRem.style.background = "none";
  });
}

function backgroundRemoveSolo(event) {
  const clickedCard = event.currentTarget;
  const redDots = clickedCard.querySelector(".redDot");

  clickedCard.style.background = "none";
  redDots.style.display = "none";
  notiCount.textContent = parseInt(notiCount.textContent) - 1;

  if (notiCount.textContent <= 0) {
    notiCount.textContent = "0";
  }

  clickedCard.removeEventListener("click", backgroundRemoveSolo);
}

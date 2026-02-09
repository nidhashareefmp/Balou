  const track = document.querySelector(".review-track");
  const cards = document.querySelectorAll(".review-card");

  let index = 0;
  const cardWidth = cards[0].offsetWidth + 30;

  setInterval(() => {
    index++;
    if (index > cards.length - 3) index = 0;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }, 3000);

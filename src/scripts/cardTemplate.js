function createCard({ title, text, logoSrc, logoAlt }) {
  const template = document.getElementById('homepage-card-template');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.card__title').textContent = title;
  clone.querySelector('.card__text').textContent = text;

  const img = clone.querySelector('img');
  img.src = logoSrc;
  img.alt = logoAlt;

  return clone;
}

async function loadCards() {
  const res = await fetch('src/infrastructure/data/data.json');
  const data = await res.json();

  const list = document.querySelector('.cards__list');
  data.forEach(({ name, description, logo }) => {
    const card = createCard({
      title: name,
      text: description,
      logoSrc: logo,
      logoAlt: name,
    });
    list.appendChild(card);
  });
}

loadCards();

function createCard({ title, text, logoSrc, logoAlt, isActive }) {
  const template = document.getElementById('homepage-card-template');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.card__switch').setAttribute('aria-pressed', isActive);
  clone.querySelector('.card__title').textContent = title;
  clone.querySelector('.card__text').textContent = text;

  const img = clone.querySelector('img');
  img.src = logoSrc;
  img.alt = logoAlt;

  return clone;
}

function togglePillSwitch(pillSwitch) {
  if (pillSwitch instanceof HTMLButtonElement) {
    pillSwitch.addEventListener('click', () => {
      const isOn = pillSwitch.getAttribute('aria-pressed') === 'true';
      pillSwitch.setAttribute('aria-pressed', String(!isOn));

      const ariaText = document.querySelector('.card__status-indicator-text');
      if (ariaText instanceof HTMLSpanElement) {
        ariaText.textContent = isOn ? 'Extension InActive' : 'Extension Active';
      }
    });
  }
}

function removeCard() {
  const cardsList = document.querySelectorAll('.cards__list-item');
  cardsList.forEach((card) => {
    const removeBtn = card.querySelector('.card__remove-button');
    if (removeBtn instanceof HTMLButtonElement)
      removeBtn.addEventListener('click', () => {
        card.remove();
      });
  });
}

async function loadCards() {
  const res = await fetch('assets/data/data.json');
  if (!res.ok) {
    throw new Error(`Failed to load JSON: ${res.status}`);
  }
  const data = await res.json();

  const list = document.querySelector('.cards__list');
  data.forEach(({ name, description, logo, isActive }) => {
    const card = createCard({
      title: name,
      text: description,
      logoSrc: logo,
      logoAlt: name,
      isActive,
    });

    list.appendChild(card);
  });

  const pillSwitch = document.querySelectorAll('.card__switch');
  pillSwitch.forEach((sw) => {
    togglePillSwitch(sw);
  });

  removeCard();
}

loadCards();

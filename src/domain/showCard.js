// because this is /Domain, /Application is supposed to apply the code here

const filterBar = document.querySelectorAll('.filter-bar__filter');

function changeFilterStatus() {
  if (filterBar instanceof NodeList && filterBar.length > 0) {
    filterBar.forEach((filter) => {
      filter.addEventListener('click', () => {
        filterBar.forEach((filter) =>
          filter.setAttribute('aria-pressed', 'false')
        );
        filter.setAttribute('aria-pressed', 'true');
        const currentFilter = filter.textContent.trim();
        updateCardsList(currentFilter);
      });
    });
  }
}

function updateCardsList(filterStatus) {
  const cardsList = document.querySelectorAll('.cards__list-item');

  if (cardsList instanceof NodeList) {
    cardsList.forEach((card) => {
      const statusButton = card.querySelector('.card__switch');

      const cardStatus = statusButton.getAttribute('aria-pressed');

      if (cardStatus === 'true') {
        card.dataset.status = 'active';
      }

      if (cardStatus === 'false') {
        card.dataset.status = 'inactive';
      }
    });

    if (filterStatus === 'All') {
    }

    if (filterStatus === 'Active') {
      cardsList.forEach((card) => {
        if (card.dataset.status !== 'active') {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
        }
      });
    }

    if (filterStatus === 'Inactive') {
      cardsList.forEach((card) => {
        if (card.dataset.status !== 'inactive') {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
        }
      });
    }

    if (filterStatus === 'All') {
      cardsList.forEach((card) => {
        card.classList.remove('hidden');
      });
    }
  }
}

changeFilterStatus();

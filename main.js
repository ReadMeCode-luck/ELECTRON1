new Swiper('.swiper',{
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation:{
        prevEl:'.card__btn--prev',
        nextEl:'.card__btnn--next',
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu_text[data-btn]');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const filter = button.getAttribute('data-btn');

      cards.forEach(card => {
        // Если фильтр "all" - показываем все карточки
        if (filter === 'all' || card.getAttribute('data-info') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});


const authModal = document.getElementById('auth-modal');
const authOpenBtn = document.getElementById('auth-open-btn');
const authCloseBtn = authModal.querySelector('.modal-close');
const authForm = authModal.querySelector('form');


const overlay = document.getElementById('overlay');

let cartItems = [];

function openModal(modal) {
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

authOpenBtn.addEventListener('click', () => openModal(authModal));
authCloseBtn.addEventListener('click', () => closeModal(authModal));

overlay.addEventListener('click', () => {
  closeModal(authModal);
  closeModal(cartModal);
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  closeModal(authModal);
});



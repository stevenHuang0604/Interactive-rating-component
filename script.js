const btnContainer = document.querySelector('.rating__btns');
const submitBtn = document.querySelector('.rating__submit');
const rating = document.querySelector('.rating');
const thank = document.querySelector('.thank');
const tag = document.querySelector('.thank__tag');
let id;

btnContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('rating__number')) return;
  id = e.target.textContent;
  e.target.classList.add('rating__number--active');

  const btns = btnContainer.querySelectorAll('.rating__number');
  btns.forEach((btn) => {
    if (btn === e.target) return;
    btn.classList.remove('rating__number--active');
  });
});

submitBtn.addEventListener('click', function (e) {
  if (!id) return;
  tag.textContent = `You selected ${id} out of 5`;

  rating.classList.remove('card__side--front');
  rating.classList.add('card__side--front-rotate');

  thank.classList.remove('card__side--back');
  thank.classList.add('card__side--back-rotate');
});

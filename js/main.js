console.log('js');

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const searchIconEl = searchEl.querySelector('span');
let buttonClick = false;

searchEl.addEventListener('click', () => {
  searchInputEl.style.width = '180px';
  searchInputEl.setAttribute('placeholder', '통합검색');
  buttonClick = true;
});

searchIconEl.addEventListener('click', () => {
  if (buttonClick === true && searchInputEl.value === '') {
    alert('검색어를 입력하세요.');
  } else if (buttonClick === true && searchInputEl.value !== '') {
    buttonClick = false;
  }
  console.log(buttonClick);
});

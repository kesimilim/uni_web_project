document.addEventListener('DOMContentLoaded', () => {
  // Задание 1.1
  const header = document.querySelector('.header');

  if (header) {
    // адаптация
    let scrollpos = window.scrollY

    const scrollChange = header.clientHeight;

    const add_class_on_scroll = () => header.classList.add('header-bg')
    const remove_class_on_scroll = () => header.classList.remove('header-bg')

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos >= scrollChange) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    })

    // вариант
    /* const scrollChange = header.clientHeight;
    window.addEventListener('scroll', () => {
      const scrollYWindow = Math.round(window.scrollY);
      if (scrollYWindow > headerScrollLimit) {
        headerTopBlock.classList.add('header__bg');
      } else {
        headerTopBlock.classList.remove('header__bg');
      }
    }); */
  }

  // Задание 1.2 адаптация
  const btnLike = document.querySelector('.button_fav');
  const outputLike = document.querySelector('.recipe-of-day__box-fav-text');

  if (btnLike && outputLike) {
    const handleClickLike = () => {
      let countLike = Number(outputLike.textContent);
      if (btnLike.classList.contains('isLike')) {
        outputLike.textContent = countLike - 1;
      } else {
        outputLike.textContent = countLike + 1;
      }

      btnLike.classList.toggle('isLike');
    }

    btnLike.addEventListener('click', handleClickLike);
  }

  // Задание 1.3 адаптация
  const buttonScrollTop = document.createElement('button');
  buttonScrollTop.type = 'button';
  buttonScrollTop.innerHTML = 'Scroll Top';
  buttonScrollTop.className = 'scroll-top';
  buttonScrollTop.crs

  buttonScrollTop.addEventListener('click', function () {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      });
  });

  const body = document.querySelector('body');
  body.appendChild(buttonScrollTop);

})

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  // let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = 
  document.documentElement.scrollTop - 
  document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener('click', function () {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      });
  });

}

window.onscroll = calcScrollValue
window.onload = calcScrollValue
$(function () {
  // === [all pages] Burger Menu ===
  $('.menu__btn').on('click', function () {
    $('.menu__mobile-list').toggleClass('menu__mobile-list--active');
  });
  // === / [all pages] Burger Menu ===

  // === [product-page.html] RateYo JQ (star rating) ===
  $('.rate-yo').rateYo({
    readOnly: true,
    ratedFill: '#1c62cd',
    normalFill: '#c4c4c4',
    starWidth: '23px',
    starHeight: '23px',
    spacing: '7px',
  });
  // === / [product-page.html] RateYo JQ (star rating) ===

  // === [index.html] Slick Slider JQ ===
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 963,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  // === / [index.html] Slick Slider JQ ===

  // === [catalogue.html & product-page.html] TABS ===

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass(
      'tabs-content--active'
    );

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.products-item__favorite').on('click', function () {
    $(this).toggleClass('products-item__favorite--active');
  });

  // === / [catalogue.html & product-page.html] TABS ===

  // === [index.html] Slick Slider JQ ===
  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/icons/arrow-black-left.svg" alt=""></button>',
    nextArrow:
      '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/icons/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 871,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  // === / [index.html] Slick Slider JQ ===

  // === [index.html] Footer Accordion JQ ===
  $('.footer__title-accordion').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__title-accordion--active');
  });
  // === / [index.html] Footer Accordion JQ ===

  // === [catalogue.html] FILTERS FORM-STYLER JQ FOR DROP-DOWNS ===
  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });
  // === / [catalogue.html] FILTERS STYLER FOR DROP-DOWNS ===

  // === [catalogue.html] FILTERS ION.RANGE-SLIDER JQ ===
  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    grid: false,
  });
  // === / [catalogue.html] FILTERS ION.RANGE-SLIDER JQ ===

  // === / [catalogue.html] FILTER RIGHT SIDE BUTTONS ===
  $('.catalogue__filter-btn-grid').on('click', function () {
    $(this).addClass('catalogue__filter-button--active');
    $('.catalogue__filter-btn-list').removeClass(
      'catalogue__filter-button--active'
    );
    $('.products-item__wrapper').removeClass('products-item__wrapper--list');
  });
  $('.catalogue__filter-btn-list').on('click', function () {
    $(this).addClass('catalogue__filter-button--active');
    $('.catalogue__filter-btn-grid').removeClass(
      'catalogue__filter-button--active'
    );
    $('.products-item__wrapper').addClass('products-item__wrapper--list');
  });
  // === / [catalogue.html] FILTER RIGHT SIDE BUTTONS ===
});

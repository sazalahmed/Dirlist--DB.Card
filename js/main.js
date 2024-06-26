$(function () {

  "use strict";

  //=========MENU FIX JS=========   
  if ($(window).scrollTop() > 1) {
    if ($('.main_menu').offset() != undefined) {
      $('.main_menu').addClass('menu_fix');
    }
  } else {
    if ($('.main_menu').offset() != undefined) {
      $('.main_menu').removeClass('menu_fix');
    }
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {

      if ($('.main_menu').offset() != undefined) {
        // check if menu_if class is already added
        if (!$('.main_menu').hasClass("menu_fix")) {
          $('.main_menu').addClass("menu_fix");
        }
      }
    }
    else {
      if ($('.main_menu').offset() != undefined) {
        $('.main_menu').removeClass("menu_fix");
      }
    }
  });


  //=========COUNTER JS=========   
  $('.counter').countUp();


  //=======SELECT2====== 
  $(document).ready(function () {
    $('.select_2').select2();
  });


  //=======select js====== 
  $('.select_js').niceSelect();



  // ===VENO BOX JS===
  $('.venobox').venobox();


  //*==========ISOTOPE============== 
  var $grid = $('.grid').isotope({});

  $('.wsus__location_filter').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  //active class
  $('.wsus__location_filter button').on("click", function (event) {

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();

  });


  //=========LISTING SLIDER=========   
  $('.listing_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });



  //*=====TESTIMONIAL SLIDER===== 
  $('.testi_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });


  //*==========SCROLL BUTTON==========  
  $('.scroll_btn').on('click', function () {
    $('html, body').animate({
      scrollTop: 0,
    },);
  });

  $(window).on('scroll', function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 300) {
      $('.scroll_btn').fadeIn();
    }

    else {
      $('.scroll_btn').fadeOut();
    }
  });


  //=========ABOUT PAGE SLIDER=========   
  $('.about_page_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,


    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });


  //=========== ADD ROW JS===========   
  $("#add_row").on('click', function () {
    var html = '';
    html += '<div  id="remove">';
    html += '<label for="">Name</label>';
    html += '<div class="medicine_row_input">';

    html += '<input type="file" name="name[]">';
    html += '<button type="button" id="removeRow" ><i class="fas fa-trash" aria-hidden="true"></i></button>';
    html += '</div>';
    html += '</div>';
    $("#medicine_row").append(html)
  });

  // remove custom input field row
  $(document).on('click', '#removeRow', function () {
    $(this).closest('#remove').remove();
  });

  $("#add_row2").on('click', function () {
    var html = '';
    html += '<div  id="remove">';
    html += '<label for="">Name</label>';
    html += '<div class="medicine_row_input">';

    html += '<input type="text" name="name[]">';
    html += '<button type="button" id="removeRow" ><i class="fas fa-trash" aria-hidden="true"></i></button>';
    html += '</div>';
    html += '</div>';
    $("#medicine_row2").append(html)
  });

  // remove custom input field row
  $(document).on('click', '#removeRow2', function () {
    $(this).closest('#remove').remove();
  });


  // for 2 input in 1 row

  $("#add_row3").on('click', function () {
    var html = '';
    html += '<div class="row" id="remove">';
    html += '<div class="col-xl-5 col-md-5">';
    html += '<label for="name">icon</label>';
    html += '<div class="medicine_row_input">';
    html += '<input type="text" name="name[]" id="name">';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-xl-5 col-md-5">';
    html += '<label for="name">link</label>';
    html += '<div class="medicine_row_input">';
    html += '<input type="text" name="name[]" id="name">';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-xl-2 col-md-2">';
    html += '<div class="medicine_row_input">';
    html += '<button type="button" id="removeRow" ><i class="fas fa-trash" aria-hidden="true"></i></button>';
    html += ' </div>';
    html += ' </div>';
    html += '</div>';
    $("#medicine_row3").append(html)
  });

  // remove custom input field row
  $(document).on('click', '#removeRow', function () {
    $(this).closest('#remove').remove();
  });


  // ==========SUMMER NOTE JS==========
  $(document).ready(function () {
    $('.summer_note').summernote();
  });


  //*==========DASHBOARD MENU==========  

  $('.menu_icon').on('click', function () {
    $('.dashboard_sidebar').addClass('.menu_show');
  });


  $('.close_icon').on('click', function () {
    $('.dashboard_sidebar').removeClass('.menu_show');
  });


  //*=====Category Slider 2===== 
  $('.category_2_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  //*=====Testimonial 2 Slider===== 
  $('.testi_slider_2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });



  //*=====categoty 3 Slider===== 
  $('.category_3_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  });


  //*=====testimonial 2 Slider===== 
  $('.testi_slider_3').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });




});






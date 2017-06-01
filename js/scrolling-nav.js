//jQuery to collapse the navbar on scroll

var offset = 50,
    $navbarFixedTop = $(".navbar-fixed-top"),
    $navbarNav = $(".navbar-nav"),
    $menu2 = $(".menu-2"),
    $navbarEx1Collapse = $(".navbar-ex1-collapse"),
    $title = $(".title"),
    $pageNav = $(".page-nav")

$(window).scroll(function() 
{
  if ($(".navbar").offset().top > offset) 
  {
    $navbarFixedTop.addClass("top-nav-collapse");
    $navbarNav.addClass("navbar-nav-collapse");
    $menu2.addClass("menu-2-collapse");
    $navbarEx1Collapse.addClass("ex1-collapse");
    $title.addClass("title-collapse");
    $pageNav.addClass("page-nav-collapse");
  } 
  else 
  {
    $navbarFixedTop.removeClass("top-nav-collapse");
    $navbarNav.removeClass("navbar-nav-collapse");
    $menu2.removeClass("menu-2-collapse");
    $navbarEx1Collapse.removeClass("ex1-collapse");
    $title.removeClass("title-collapse");
    $pageNav.removeClass("page-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() 
{
  $('a.page-scroll').bind('click', function(event) 
  {
    var $anchor = $(this);
    $('html, body').stop().animate(
    {
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

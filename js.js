/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  // On the main index of the helpdesk we want to move the
  // main global search outside of the main content div
  var hero = $('.hero-unit');
  if(hero){
    $('header').after(hero);
  }

  // If we are on the formus index we don't want a create post button, because
  // it requires that the user then select a forum, which can be confusing. So
  // if the url matches that we just hide the button.

  // The button will show up when you are viewing one forum, and you will start
  // creating a post within that forum

  var url = window.location.pathname;

  if(url.match('communities\/public\/topics$')){
    $('.community-nav').addClass('no-create');
  }

  // Zendesk has naming we don't like in their new community tool.
  // This is the hacky
  // way to fix it cause they do not have the option to do so.

  $('.community-heading').html('OrgSync Community Forums');
  if($('.community-nav li:nth-child(1) a').length > 0){
    $('.community-nav li:nth-child(1) a').html('Forums');
  } else if($('.community-nav li:nth-child(1)')){
     $('.community-nav li:nth-child(1)').html('Forums');
  }
  if($('.community-nav li:nth-child(2) a').length > 0){
     $('.community-nav li:nth-child(2) a').html('Topics');
  } else if($('.community-nav li:nth-child(2)')){
    $('.community-nav li:nth-child(2)').html('Topics');
  }

  // These are Zendesk things
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus
  $(".answer-body textarea").one("focus", function() {
    $(".answer-form-controls").show();
  });

  $(".comment-container textarea").one("focus", function() {
    $(".comment-form-controls").show();
  });
});


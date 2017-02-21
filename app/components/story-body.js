import Ember from 'ember';

export default Ember.Component.extend({
  onScroll() {
    let max = document.body.clientHeight - window.innerHeight;
    let percentage = window.scrollY / max;
    console.log(percentage);
    //console.log(window.scrollY);
    //window.innerHeight
    //document.body.clientHeight
  },
  didRender() {
    this.$(document).bind('touchmove', this.onScroll);
    this.$(window).bind('scroll', this.onScroll);
  } 
});

import Ember from 'ember';
import Scroller from '../../mixins/scroller';

export default Ember.Route.extend(Scroller, {
  actions:{
    updatePercent: function(newVal){
      console.log(newVal);
    }
  },

  activate: function () {
    this._super();
    this.bindScrolling();
  },
  deactivate: function () {
    this._super();
    this.unbindScrolling();
  },

  scrolled() {
    let max = document.body.clientHeight - window.innerHeight;
    let percentage = window.scrollY / max;
    console.log(percentage);
    //console.log(window.scrollY);
    //window.innerHeight
    //document.body.clientHeight
  }

});

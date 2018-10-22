

import $ from 'jquery';

class Copyright{
  constructor(){
    this.newYear();
    this.year = $("#year");
  }
  newYear(){
     // this.year.text(new Date().getFullYear());
    $('#year').text(new Date().getFullYear());
  }

}

export default Copyright;

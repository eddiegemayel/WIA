$(document).ready(function() {
     $('.edit').editable('http://www.example.com/save.php', {
     	indicator : "<img src='img/indicator.gif'>",
      // type   : 'textarea',
      // // submitdata: { _method: "put" },
      // submit : 'OK',
      // cancel : 'cancel'
      indicator : "<img src='../../project/images/pep.png'>",
      tooltip   : "Move mouseover to edit...",
      event     : "mouseover",
     });
 });
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
loop:true,
margin:0,
nav:true,
navText: [ '', ' ' ],

responsive:{
0:{
items:1
},

1000:{
items:3
}
}
});
});
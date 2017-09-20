$(document).ready( function () {
   faqActive();
})

function faqActive() {
   $('.faq-articles article').click( function() {
      var $this = $(this);
   
      $this.addClass('faq-active');
      $this.siblings().removeClass('faq-active');  
   })
}

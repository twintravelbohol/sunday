
$(document).ready(function() {
   sendMsg();
   faqActive();
});

   function faqActive() {
      $('.faq-articles article').click( function() {
         var $this = $(this);

         $this.addClass('faq-active');
         $this.siblings().removeClass('faq-active');  
      })
   }

   function sendMsg() {
      $('.form').submit( function() {
         event.preventDefault();

         $.ajax({
            url: 'https://formspree.io/'+siteEmail,
            method: 'POST',
            data: {
               name: $("[name='name']").val(),
               email: $("[name='email']").val(),
               message: $("[name='message']").val(),
            },
            dataType: 'json'
         }).done( function() {
            alert('Message Submitted, Thank you and God Bless');
         }).fail( function() {
            alert('Message not Submitted, try use our contact information in the left, thank you');
         })
      })
   }
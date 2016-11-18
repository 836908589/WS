(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });

  /*登录页面*/
  $('.btn-loading-example').click(function () {
    var $btn = $(this);
    $btn.button('loading');
    setInterval(function(){
      window.location.href="Ami.html"
    }, 3000);
  });
})(jQuery);

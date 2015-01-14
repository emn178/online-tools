;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var checkbox = $('#auto_update');

    function execute() {
      try {
        output.val(method(input.val()));
      } catch(e) {
        output.val(e);
      }
    }

    function autoUpdate() {
      if(!checkbox[0].checked) {
        return;
      }
      execute();
    }

    $('#execute').click(execute);
    if(checkbox.length > 0) {
      input.bind('input propertychange', autoUpdate);
      checkbox.click(autoUpdate);
    }
  });
})(jQuery, window, document);

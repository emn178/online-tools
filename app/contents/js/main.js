;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var checkbox = $('#auto-update');
    var dropzone = $('#droppable-zone');

    var execute = function() {
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

    if(checkbox.length > 0) {
      input.bind('input propertychange', autoUpdate);
      checkbox.click(autoUpdate);
    }

    if(dropzone.length > 0) {
      var dropzonetext = $('#droppable-zone-text');

      $(document.body).bind('dragover drop', function(e) {
        e.preventDefault();
        return false;
      });

      if(!window.FileReader) {
        dropzonetext.text('Your browser dose not support.');
        $('input').attr('disabled', true);
        return;
      }

      dropzone.bind('dragover', function() {
        dropzone.addClass('hover');
      });

      dropzone.bind('dragleave', function() {
        dropzone.removeClass('hover');
      });

      dropzone.bind('drop', function(e) {
        dropzone.removeClass('hover');
        file = e.originalEvent.dataTransfer.files[0];
        dropzonetext.text(file.name);
        autoUpdate();
      });

      input.bind('change', function() {
        file = input[0].files[0];
        dropzonetext.text(file.name);
        autoUpdate();
      });

      var file;
      execute = function() {
        reader = new FileReader();
        reader.onload = function (event) {
          try {
            output.val(method(event.target.result));
          } catch(e) {
            output.val(e);
          }
        };
        reader.readAsArrayBuffer(file);
      };
    }

    $('#execute').click(execute);
  });
})(jQuery, window, document);

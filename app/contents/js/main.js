;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var checkbox = $('#auto-update');
    var dropzone = $('#droppable-zone');
    var option = $('[data-option]');

    var execute = function() {
      try {
        output.val(method(input.val(), option.val()));
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
      option.bind('input propertychange', autoUpdate);
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
          var value = option.val();
          try {
            if (method.update) {
              var batch = 1024 * 1024;
              var start = 0;
              var current = method;
              var asyncUpdate = function () {
                if (start < event.total) {
                  output.val('hashing...' + (start / event.total * 100).toFixed(2) + '%');
                  var end = Math.min(start + batch, event.total);
                  current = current.update(event.target.result.slice(start, end), value);
                  start = end;
                  setTimeout(asyncUpdate);
                } else {
                  output.val(current.hex());
                }
              }
              asyncUpdate();
            } else {
              output.val(method(event.target.result, value));
            }
          } catch(e) {
            output.val(e);
          }
        };
        output.val('loading...');
        reader.readAsArrayBuffer(file);
      };
    }

    $('#execute').click(execute);
  });
})(jQuery, window, document);

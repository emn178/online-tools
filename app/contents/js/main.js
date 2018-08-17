;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var checkbox = $('#auto-update');
    var dropzone = $('#droppable-zone');
    var option = $('[data-option]');

    var title = $('#main h1').text();
    var syntax = /syntax/i.test(title);
    var encode = /encode/i.test(title);
    var decode = /decode/i.test(title);

    if(dropzone.length === 0 && !decode){
        $('<div>' +
        	'<input type="radio" id="formatPlain" name="format" value="plain" checked>'+
        	'<label for="formatPlain">Plain</label>'+
        	'<input type="radio" id="formatHex" name="format" value="hex">'+
        	'<label for="formatPlain">Hex</label>'+
        	'<input type="radio" id="formatBase64" name="format" value="base64">'+
        	'<label for="formatPlain">Base64</label>'+
        	'</div>')
        	.insertBefore(input);
    }

    if(output.length > 0 && !syntax && !encode){
    	if(!decode){
            $('<div>' +
            	'<input type="radio" id="outputHex" name="oformat" value="hex" checked>'+
            	'<label for="formatPlain">Hex</label>'+
            	'<input type="radio" id="outputBase64" name="oformat" value="base64">'+
            	'<label for="formatPlain">Base64</label>'+
            	'</div>')
            	.insertBefore(output);
        }else{
            $('<div>' +
            	'<input type="radio" id="outputPlain" name="oformat" value="plain" checked>'+
            	'<label for="formatPlain">Plain</label>'+
            	'<input type="radio" id="outputHex" name="oformat" value="hex">'+
            	'<label for="formatPlain">Hex</label>'+
            	'<input type="radio" id="outputBase64" name="oformat" value="base64">'+
            	'<label for="formatPlain">Base64</label>'+
            	'</div>')
            	.insertBefore(output);
        }
    }


    function hexToArray(hex){
		return new Uint8Array((hex.match(/[\da-f]{2}/gi) || []).map(function (h) {
  			return parseInt(h, 16)
		}))
    }

	function base64ToHex(str) {
  		for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
    		var tmp = bin.charCodeAt(i).toString(16);
    		if (tmp.length === 1) tmp = "0" + tmp;
    		hex[hex.length] = tmp;
  		}
  		return hex.join(" ");
	}

    function setOutput(out){
      	var oformat = $('input[name="oformat"]:checked').val()
    	if(decode) {
    		//The output is plain from decode
      	  	if(oformat === 'base64'){
      	  		out = btoa(unescape(encodeURIComponent(out)));
      	  	}
      	  	if(oformat === 'hex'){
				out = base64ToHex(btoa(unescape(encodeURIComponent(out))))
      	  	}
      	}else{
    		//The output is hex from hashes
      	  	if(oformat === 'base64'){
      	  		out = btoa(String.fromCharCode.apply(null, hexToArray(out)));
      	  	}
      	}
        output.val(out);
    }

    var execute = function() {
      try {
      	var format = $('input[name="format"]:checked').val()
      	var message = input.val();
      	if(format === 'base64')
      		message = atob(message);
      	if(format === 'hex')
		    message = hexToArray(message);

        var out = method(message, option.val());
        setOutput(out);

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
      $('input[name="format"]').click(autoUpdate);
      $('input[name="oformat"]').click(autoUpdate);
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
        var value = option.val();
        if (method.update) {
          var batch = 1024 * 1024 * 2;
          var start = 0;
          var total = file.size;
          var current = method;
          reader.onload = function (event) {
            try {
              current = current.update(event.target.result, value);
              asyncUpdate();
            } catch(e) {
              output.val(e);
            }
          };
          var asyncUpdate = function () {
            if (start < total) {
              output.val('hashing...' + (start / total * 100).toFixed(2) + '%');
              var end = Math.min(start + batch, total);
              reader.readAsArrayBuffer(file.slice(start, end));
              start = end;
            } else {
              setOutput(current.hex());
            }
          };
          asyncUpdate();
        } else {
          output.val('hashing...');
          reader.onload = function (event) {
            try {
              setOutput(method(event.target.result, value));
            } catch (e) {
              output.val(e);
            }
          };
          reader.readAsArrayBuffer(file);
        }
      };
    }

    $('#execute').click(execute);

    var parts = location.pathname.split('/');
    $('a[href="' + parts[parts.length - 1] + '"]').addClass('active');
  });
})(jQuery, window, document);

---
title: Base64 Decode File
template: page.jade
method: null
action: Download
auto_update: false
description: Decode and download file from base64 online function
keywords: Base64,online,decode,download
---
<script>
$(document).ready(function() {
  var download = $('<a class="btn btn-default" download="base64"/>').text('Download');
  download.click(function() {
    var base64Str = $('#input').val();
    console.log(base64Str);
    download.attr('href', 'data:application/octet-stream;base64,' + base64Str);
  });
  $('#execute').replaceWith(download);
  $('.output').remove();
});
</script>

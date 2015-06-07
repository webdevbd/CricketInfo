function fixiFrame () {
   if ((android) && (androidVersion > 3)) {
      iFrameContentHeight = document.getElementById('theiFrame').contentDocument.body.offsetHeight;
      document.getElementById('theiFrame').style.height = iFrameContentHeight + 'px';
   }
}
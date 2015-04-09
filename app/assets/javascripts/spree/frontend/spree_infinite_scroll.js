
$(function() {
  $('#content nav.pagination').hide();
  $('#products').infinitescroll({
    navSelector: "#content ul.pagination",
    nextSelector: "#content ul.pagination a[rel=next]",
    itemSelector: "#content #products div",
    loading: {
      msgText  : "Loading...",
      finishedMsg: ""  
    }
  });
});

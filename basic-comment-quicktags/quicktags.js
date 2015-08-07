// (function ($) {
//   $(document).ready(function($) {
    quicktags({
      id: "comment",
      buttons: "link,em,strong"
    });
    quicktags({
      id: "bbp_reply_content",
      buttons: "link,em,strong"
    });
    quicktags({
      id: "bbp_topic_content",
      buttons: "link,em,strong"
    });
    quicktags({
      id: "posttext",
      buttons: "link,em,strong"
    });
   // QTags.addButton('image','resim','[resim]','[/resim]','I','');
        QTags.addButton( 'tag', 'resim', prompt_image );
    function prompt_image(e, c, ed) {
        prmt = prompt('Resim adresini girin:');
        if ( prmt === null ) return;
        rtrn = '[resim]' + prmt + '[/resim]';
        this.tagStart = rtrn;
        QTags.TagButton.prototype.callback.call(this, e, c, ed);
    }
    QTags.addButton("ispiyon","ispiyon","[ispiyon]","[/ispiyon]","ispiyon","");
    
    QTags.addButton("smiley_button","smiley",toggle_smiley_menu);

    var smiley_element = jQuery('#smiley_container');

    function toggle_smiley_menu() {
      if (smiley_element.css('display') == 'block') {
        smiley_element.css('display','none');
      } else {
        smiley_element.css('display','block');
      }
    }

    function smiley_insert(str) {
      box=jQuery("#comment");
      box.val(box.val()+" "+str+" ");
      box.focus();
    }

//   });
// })(jQuery);

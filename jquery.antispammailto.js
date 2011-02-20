/**
 * jQuery antispammailto plugin
 * Simple jQuery plugin that transforms a link into a mailto: link to prevent from spamming
 * @name jquery.antispammailto.js
 * @author Vincent Dieltiens - www.vincentdieltiens.be
 * @version DEV-0.1
 * @date February 20 2011
 * @category jQuery plugin
 * @copyright (c) 2011 Vincent Dieltiens (www.vincentdieltiens.com)
 * @license CC Attribution-No Derivative Works 2.5 Brazil - http://creativecommons.org/licenses/by-nd/2.5/br/deed.en_US
 */
(function($){
  $.fn.antispammailto = function(options) {
    
    var options = $.extend({}, $.fn.antispammailto.defaults, options);
    
    return this.each(function(){
      
      // Only take care of <a> tags
      if( $(this).is('a') ) {
        
        if( options.user == null || options.domain == null ) {
          return;
        }
          
        if( options.onlyAtRollover )  {
          $(this).hover(function(){
            $(this).attr('href', 'mailto:'+options.user+'@'+options.domain);
          }, function(){
            $(this).attr('href', '#');
          });
        } else {
          $(this).attr('href', 'mailto:'+options.user+'@'+options.domain);
        }
        
        if( options.htmlToo )
          $(this).html('<span>'+options.user+'</span>@<span>'+options.domain+'</span>');
      }
    });
    
  }
  
  $.fn.antispammailto.defaults = {
    user: null,
    domain: null,
    htmlToo: true,
    onlyAtRollover: false
  }
})(jQuery);
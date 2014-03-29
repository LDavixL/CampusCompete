(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(".uib_w_5").click(function(evt)
        {
         activate_page("#frontpage"); 
        });
}
 $(document).ready(register_event_handlers);
})();

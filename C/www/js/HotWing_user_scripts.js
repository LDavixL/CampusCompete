(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(".uib_w_2").click(function(evt)
        {
            window.location.href = 'index.html'; 
        });
}
 $(document).ready(register_event_handlers);
})();

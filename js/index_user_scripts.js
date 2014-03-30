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
            //Submit
            var txtFile = new XMLHttpRequest();
            var allText;
            var lines;
            
            txtFile.open("GET", "https://raw.githubusercontent.com/LDavixL/CampusCompete/master/test.txt", true);
            txtFile.onreadystatechange = function() {
                if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
                    if (txtFile.status === 200) {  // Makes sure it's found the file.
                        allText = txtFile.responseText; 
                        lines = txtFile.responseText.split("\n"); // Will separate each line into an array
                        var temp = "";
                        var tog = false;
                        lines.forEach(function(entry) {
                                temp+=entry+ " ";
                                tog = !tog;
                                if(!tog){
                                    alert(temp);
                                    temp = "";
                                }
                        });
                    }
                }
            }
            txtFile.send(null);
        });
        
        $(".uib_w_5").click(function(evt)
        {
         activate_page("#frontpage"); 
        });
        
        $(".uib_w_21").click(function(evt)
        {
         activate_page("#listpage"); 
        });
        $(".uib_w_28").click(function(evt)
        {
         activate_page("#listpage"); 
        });
        $(".uib_w_31").click(function(evt)
        {
         activate_page("#listpage"); 
        });
        $(".uib_w_34").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        //button to close pop
            alert("User: "+(document.newchal.title.value));
            alert("Pass: "+(document.newchal.disc.value));  
            var tit = (document.newchal.title.value);
            var disc = document.newchal.disc.value;            
            loadDoc();
            WriteToFile();
         $("#bs-modal-0").modal("toggle");  
        });
        $(".uib_w_30").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        //Button to open pop
         $("#bs-modal-0").modal("toggle");  
        });
        $(".uib_w_35").click(function(evt)
        {
         activate_page("#frontpage"); 
        });
        $(".uib_w_11").click(function(evt)
        {
         activate_page("#HotWings"); 
        });
        
        
        $(".uib_w_46").click(function(evt)
        {
        /* your code goes here */ 
        });
        $(".uib_w_7").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#popupsignup").modal("toggle");  
        });
        
        
        $("#signupfrontpage").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#popupsignup").modal("toggle");  
        });
        $("#submitsign").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#entrysubmission").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#submipop").modal("toggle");  
        });
        $("#uploadphoto").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#entrysubbuttonfin").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#submipop").modal("toggle");  
        });
        $("#bowling-subentfin").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#bowling-popup").modal("toggle");  
        });
        $("#bowling-subentry").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#bowling-popup").modal("toggle");  
        });
        $("#subenty").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#HHF-subpop").modal("toggle");  
        });
        $("#hhf-subentfin").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#HHF-subpop").modal("toggle");  
        });
        $("#timesubmit").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#Pz-popout").modal("toggle");  
        });
        $("#Pz -subentpre").click(function(evt)
        {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#Pz-popout").modal("toggle");  
        });
        $("#HBBowlingScore").click(function(evt)
        {
         activate_page("#Bowling"); 
        });
        
        $("#Jzpuz-list").click(function(evt)
        {
         activate_page("#Puzzle"); 
        });
        $("#Back-Bowl").click(function(evt)
        {
         activate_page("#listpage"); 
        });
        $("#Back-HHF").click(function(evt)
        {
         activate_page("#listpage"); 
        });
        $("#backpuz").click(function(evt)
        {
         activate_page("#listpage"); 
        });
        $("#HHF-list ").click(function(evt)
        {
         activate_page("#HighestHighFive"); 
        });
}
 $(document).ready(register_event_handlers);
})();
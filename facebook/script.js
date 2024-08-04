$(document).ready(function(){
    $("#signup-form").validate(
    {
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            sname:{
                required:true,
                minlength:3
                
            },
            mob:{
                required:true,
                minlength:10
            },
            passww:{
                required:true,
                minlength:4
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Mandatory",
                minlength:"Enter atleast 4 characters"
            }
        }
    })
})


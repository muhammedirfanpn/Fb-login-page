$(document).ready(function(){
    $("#signup-form").validate({
            rules:{
                fname:{
                    required:true,
                    minlength:4,
                    maxlength:10
                },
                sname:{
                    required:true,
                    minlength:4,
                    maxlength:10
                },
                dob:{
                    required:true,
                    minlength:4
                },
                email:{
                    required:true,
                    minlength:4,
                    email:true
                
                },
                password:{
                    required:true,
                    minlength:6
                },
                gender:{
                    required:true,
                },
                
            },
            messages:{
                fname:{
                    required:"Enter first name",
                },
                sname:{
                    required:"Enter surname",
                },
                dob:{
                    required:"Enter date of birth",
                },
                email:{
                    required:"Enter email",
                },
                password:{
                    required:"Enter password",
                },
                gender:{
                    required:"Enter gender",
                }
            }
            
        })
})
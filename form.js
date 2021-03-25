function validateform(){  
    var name=document.myform.name.value;  
    var mail=document.myform.mail.value; 
    var message=document.myform.message.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;
    }  
    
    if (mail==null || mail==""){  
        alert("mail can't be blank");  
        return false;
      }  
    
    if(message==null || message==""){  
        alert("Message can't be blank");  
        return false;
    }
    }  
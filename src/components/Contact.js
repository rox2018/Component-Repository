import React, { Component } from 'react';

class Contact extends Component {
    render() {
  
      return(
        <aside id="contact-me">
           <a href="#">Stay In Touch</a>
               <i class="far fa-arrow-alt-circle-up"></i>
           
   
           <header>
               <h1>Contact Me</h1>
           </header>
   
            <form action="#" method="post">
               <div class="form-field">
               <label for="user_name">Name</label> 
               <input type="text" name="user_name" required="">
               </input>
               
               </div>
               <div class="form-field">
               <label for="user_email">Email</label> 
               <input type="email" name="user_email" required=""></input>
               </div>
               <div class="form-field">
               <textarea name="message"></textarea>
               </div>
                <button type="submit">Submit</button> 
               <input type="submit" value="Contact me! 😃"></input>
           </form> 
       </aside>
       )
     }
   }





export default Contact;
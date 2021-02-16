import React from "react";

function Form() {
    return (
<form class="signup">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="email-input" placeholder="Email" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="password-input" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    
  </form>
    )
}

export default Form;

import React from 'react';



 class Landing extends React.Component { 
        constructor(props){
         super(props)
        }
            Geo = () => {
                navigator.geolocation.getCurrentPosition(function(position) {
                    alert(position.coords.latitude, position.coords.longitude);
                  });
                };

                componentDidMount(){
                    window.fbAsyncInit = function() {
                      window.FB.init({
                        appId      : '<YOUR_APP_ID>',
                        cookie     : true,  // enable cookies to allow the server to access
                                          // the session
                        xfbml      : true,  // parse social plugins on this page
                        version    : 'v2.1' // use version 2.1
                      });
                  
                      // Now that we've initialized the JavaScript SDK, we call
                      // FB.getLoginStatus().  This function gets the state of the
                      // person visiting this page and can return one of three states to
                      // the callback you provide.  They can be:
                      //
                      // 1. Logged into your app ('connected')
                      // 2. Logged into Facebook, but not your app ('not_authorized')
                      // 3. Not logged into Facebook and can't tell if they are logged into
                      //    your app or not.
                      //
                      // These three cases are handled in the callback function.
                      window.FB.getLoginStatus(function(response) {
                        this.statusChangeCallback(response);
                      }.bind(this));
                    }.bind(this);
                  
                    // Load the SDK asynchronously
                    (function(d, s, id) {
                      var js, fjs = d.getElementsByTagName(s)[0];
                      if (d.getElementById(id)) return;
                      js = d.createElement(s); js.id = id;
                      js.src = "//connect.facebook.net/en_US/sdk.js";
                      fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                  }
                  
                  // Here we run a very simple test of the Graph API after login is
                  // successful.  See statusChangeCallback() for when this call is made.
                 testAPI = () => {
                  alert("I told you not to push it");
                  };
              


    render(){
    return(
        <div style={{textAlign:'center'}}>
         <h1>Events Will Show Up Below</h1>
           Will request GeoLocation and fetch events nearest to the user
           <button onClick={this.Geo}>Request Location</button>
           
           <button onClick={this.testAPI}>DONT PUSH seriously...</button>
          
        </div>
    );
};

}

export default Landing;
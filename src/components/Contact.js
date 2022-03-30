import React from 'react';


function Contact() {
    return(
        <div>
            <h1>Contact Us</h1>
            <div className="dropdown">
                <label htmlFor="pickone">Please choose an option:</label><br />
                <br />
                <div className="dropdown-content">
                    
                    <a href='/recommend'>Recommend an Organization</a><br />
                    <a href="#">Review your experience </a>

                </div>
            </div>
            <h2>Have a comment or complain? Contact us directly:</h2>
            <p>Batoul Alkarim: <br /> batoulalkarim1@gmail.com <br /> 
            LinkedIn: <a href="https://www.linkedin.com/in/batoul-alkarim-421172108/" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png" width="30" alt="linkedin shiny icon logo" /></a>
            <br />Email: <a href="mailto:batoulalkarim1@gmail.com"><img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-file-gmail-icon-svg-wikimedia-commons-0.png" width="35" alt="logo gmail png file gmail icon svg wikimedia commons" /></a>
            <br />
            Phone: (720)-862-8063
            </p>
            <h3>Are you a fan of our work? Follow us on social media!</h3>
            <div className="socialMedia">
              <a href="http://www.instagram.com/batoulalkarim"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" width="40" alt="logo ig" /></a>
              <a href="http://www.twitter.com/batoulalkarim"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-icon-png-logo-2.png" width="40" alt="twitter bird icon png logo" /></a>             
              <a href="https://www.github.com/batoulalkarim" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" width="40" alt="512x512 logo github icon" /></a>
            </div>
        </div>
    )
}

export default Contact 
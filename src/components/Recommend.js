import React from 'react';

function Recommend() {

    function handleSubmit(){
        alert('Thank you for your recommendation! We will vet this organization and consider adding them to our cult')
    }
    return(
        <div className='recForm'>
            <h1>Do you know of an Organization not yet listed?</h1>
            <h3> We would like to hear about them! <br /> Please leave us a detailed description of this Organization <br />and your information so that we can continue to get water to people in need.</h3>
            <form className="orgForm" onSubmit={handleSubmit}>
                <label htmlFor="recfname">First name:</label><br />
                <input type="text" id="recfname" name="recfname"></input><br />
                <label htmlFor="reclname">Last name:</label> <br />
                <input type="text" id="reclname" name="reclname"></input> <br />
                <label htmlFor="contact">(optional)Your Email:</label><br />
                <input type="text" id="contact" name="contact"></input><br />
                <label htmlFor="orgname">Organization name:</label><br />
                <input type="text" id="orgname" name="orgname"></input><br />
                <label htmlFor="orglocation">Organization location:</label><br />
                <input type="text" id="orglocation" name="orglocation"></input>
                <h5>How did you hear about this Organization and why do you think we should work with them?</h5>
                <textarea rows = "5" cols ="40" name="description">
                </textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Recommend
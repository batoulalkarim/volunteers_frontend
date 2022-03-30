import React from 'react';

function Recommend() {
    return(
        <div className='recForm'>
            <h1>Do you know of an Organization not yet listed?</h1>
            <h3> We would like to hear about them! Please leave us a detailed description of this Organization and your information so that we can continue to get water to people in need.</h3>
            <form>
                <label htmlFor="recfname">First name:</label><br />
                <input type="text" id="recfname" name="recfname"></input><br />
                <label htmlFor="reclname">Last name:</label><br />

                <input type="text" id="reclname" name="reclname"></input>
            </form>
        </div>
    )
}

export default Recommend
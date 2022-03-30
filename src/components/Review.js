import React from 'react';

function Review() {

    function handleSubmit(){
        alert('Thank you for your feedback')
    }
    return(
        <div className="reviewForm">
            <h1>Review Your Experience With Live Well</h1>
            <form className='reviewForm' onSubmit={handleSubmit}>
                <label htmlFor="reviews">Which Organization did you work with?</label>
                <br />
                <select name="orgs" id="orgs">
                    <option value="waterwell">Water Well</option>
                    <option value="hopeforall">Hope For All</option>
                    <option value="loveandwater">Love and Water</option>
                    <option value="life">Life</option>
                    <option value="drinkable">Drinkable</option>
                    <option value="resolutions">Resolutions</option>
                </select>
                <br />
                <br />
                <label htmlFor="reviews">Which task did you complete?</label>
                <br />
                <select name="orgs" id="orgs">
                    <option value="building">Building Filters</option>
                    <option value="packandship">Packing and Shipping</option>
                    <option value="installation">Installing Water Filters</option>
                </select>
                <br />
                <br />
                <label>Did you have a Comment, Complain, or Question?</label>
                <br />
                <select>
                <option value="comment">Comment</option>
                <option value="complain">Complaint</option>
                <option value="question">Question</option>
                </select>
                <br />
                <br />
                <label>Describe/Ask below:</label>
                <br />
                <textarea rows = "5" cols ="40" name="description">
                </textarea>
                <br />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default Review
import React,{useEffect, useState} from 'react';
import CommitedCard from './CommitedCard';

function YourCommits(onRemoveCommitmentClick){

    const[commits, setCommits] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/tasks")
        .then(res => res.json())
        .then(data => {
            setCommits(data);
            console.log(data)
        })
    }, [])

    const commitedList = commits.map((commit) => {
        return(<CommitedCard key={commit.id} onRemoveCommitmentClick={onRemoveCommitmentClick} commit={commit}/>)
    })

    return(
        
        <div className="commitscontainer">
            <h1>**This is where we'll put all of the commits that have been added**</h1>
            {commitedList}
        </div>
    )
}

export default YourCommits 
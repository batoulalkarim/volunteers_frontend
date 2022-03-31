import React, { useEffect, useState } from 'react';
import Organization from './Organization';
import Task from './Task';
// import CommittedOrganizations from './CommittedOrganizations';
// import DropDownMenu from './DropDownMenu'
// import OrganizationPresenter from './OrganizationPresenter';


function Dashboard() {
 
    const [organizations, setOrganizations] = useState([]);
    const [commitList , setCommitList] = useState([])
    const [commits, setCommits] = useState([])

    function handleRemoveCommit (commit) {
        setCommitList(commits.filter(commitedTask => commitedTask.id !== commit.id))
          fetch(`http://localhost:8080/tasks/` + commit.id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
        }


    function handleAddToCommitList (addcommit, task) {
        if(commitList.every(organization => organization.id !== addcommit.id)){
          setCommitList([...commitList, addcommit])
          fetch(`http://localhost:8080/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            description: addcommit[task],
            time_commitment_hours: 8,
            name: addcommit.name,
            commited_tasks: task,
            volunteer_id: 1,
            organization_id: addcommit.id
        })
      })
        .then((r) => r.json())
        .then((data) => console.log(data))
      }
      }

      console.log(commitList)
      console.log(commits + "Commits")


   
    

    useEffect(() => {
        fetch("http://localhost:8080/organizations")
        .then(res => res.json())
        .then(data => {
            setOrganizations(data);
            console.log(data)
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/tasks")
        .then(res => res.json())
        .then(data => {
            setCommits(data);
            console.log(data)
        })
    }, [])

    
    return (
        <div className='dbbg'>
        <h2 className='db'> DashBoard </h2>
        <div className='boxes'>
        <Organization organizations={organizations} onCommitmentClick={handleAddToCommitList} />
        <Task commitList={commitList} onRemoveCommitmentClick={handleRemoveCommit} commits={commits}/>
        </div>
        </div>
        
    );
}

// onRemoveCommitmentClick={handleremoveCommit}
// onCommitmentClick={handleaddToCommitList}

export default Dashboard;
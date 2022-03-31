import React, { useEffect, useState } from 'react';
import Organization from './Organization';
import Task from './Task';
// import CommittedOrganizations from './CommittedOrganizations';
// import DropDownMenu from './DropDownMenu'
// import OrganizationPresenter from './OrganizationPresenter';


function Dashboard() {
 
    const [organizations, setOrganizations] = useState([]);
    const [commitList , setCommitList] = useState([])

    function handleaddToCommitList (addcommit) {
        if(commitList.every(organization => organization.id !== addcommit.id)){
          setCommitList([...commitList, addcommit])
          fetch(`http://localhost:8080/organizations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addcommit),
      });
      }
      }

      console.log(commitList)

    //   function handleremoveCommit (removeCommit) {
    //     setCommitList(commitList.filter(Organization => Organization.id !== removeCommit.id))
    //       fetch(`http://localhost:8080/organizations/` + Organization.id, {
    //         method: "DELETE",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
    //     }


   
    

    useEffect(() => {
        fetch("http://localhost:8080/organizations")
        .then(res => res.json())
        .then(data => {
            setOrganizations(data);
            console.log(data)
        })
    }, [])

    
    return (
        <div className='dbbg'>
        <h2 className='db'> DashBoard </h2>
        <div className='boxes'>
        <Organization organizations={organizations} onCommitmentClick={handleaddToCommitList} />
        <Task commitList={commitList} onCommitmentClick={handleaddToCommitList}/>
        </div>
        </div>
        
    );
}

// onRemoveCommitmentClick={handleremoveCommit}
// onCommitmentClick={handleaddToCommitList}

export default Dashboard;
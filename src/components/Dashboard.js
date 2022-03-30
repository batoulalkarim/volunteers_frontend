import React, { useEffect, useState } from 'react';
import Organization from './Organization';
import Task from './Task';
// import CommittedOrganizations from './CommittedOrganizations';
// import DropDownMenu from './DropDownMenu'
// import OrganizationPresenter from './OrganizationPresenter';


function Dashboard() {
 
    const [organizations, setOrganizations] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false)

   
    

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
        <Organization organizations={organizations} onClick={() => setButtonPopup(true)} trigger={buttonPopup} setTrigger={setButtonPopup}/>
        <Task organizations={organizations} />
        </div>
        </div>
        
    );
}

export default Dashboard;
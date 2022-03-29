import React, { useEffect, useState } from 'react';
import Organization from './Organization';
// import CommittedOrganizations from './CommittedOrganizations';
// import DropDownMenu from './DropDownMenu'
// import OrganizationPresenter from './OrganizationPresenter';

function Dashboard() {
 
    const [organizations, setOrganizations] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:8080/organizations")
        .then(res => res.json())
        .then(data => {
            setOrganizations(data);
        })
    }, [])

    return (
        <div>
        <h2 className='db'> DashBoard </h2>
        
        <Organization organizations={organizations} />
        
        </div>
    );
}

export default Dashboard;
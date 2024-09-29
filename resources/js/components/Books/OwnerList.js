// OwnerList.js
import React from 'react';

const OwnerList = ({ owners, onApproveOwner }) => {
    return (
        <div>
            {owners.map(owner => (
                <div key={owner.id}>
                    <h3>{owner.name}</h3>
                    <p>Email: {owner.email}</p>
                    <button onClick={() => onApproveOwner(owner.id)}>Approve Owner</button>
                </div>
            ))}
        </div>
    );
};

export default OwnerList;

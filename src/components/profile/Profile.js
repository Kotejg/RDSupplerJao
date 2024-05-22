import React, { useState } from 'react'
import pharmacyIcon from '../../images/pharmacyIcon.png'
import './Profile.css'

function Profile() {


    return (
        <>
            <div className="container-profile">
                <img className='img-jao' src={pharmacyIcon} />
                <div className="d-flex">
                    <div className="aling">
                        <span>Filial</span>
                        <span>RD033</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Profile
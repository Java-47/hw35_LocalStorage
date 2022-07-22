import React from 'react'
import { friends } from '../utils/constants';
import Friend from './Friend';

const DreamTeam = () => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((item, index) => <Friend key={index} photo={item} number={index + 1}/>)}
        </section>
    )
}

export default DreamTeam
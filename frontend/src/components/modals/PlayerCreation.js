import React, {useState} from 'react';
import PlayerCreationForm from '../forms/PlayerCreationForm';
import Modal from "./Modal";

/**
 * Button component calling a player creation modal.
 */
const PlayerCreation = ( {setCreated} ) => {
    const [modalStatus, setModalStatus] = useState(false)
    const form = <PlayerCreationForm setCreated={setCreated}/>

    return (
        <div className='creation-btn'>
            <button
                className={'modal-opening green-btn'}
                onClick={() => {
                    setModalStatus(true)
                }}
            >
                Create a player
            </button>
            < Modal
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
                title={"Creation of a player"}
                body={form}
            />
        </div>
    );
};

export default PlayerCreation;
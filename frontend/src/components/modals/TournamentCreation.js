import React, {useEffect} from 'react'
import {useState} from "react";
import Modal from "../modals/Modal";
import TournamentCreationForm from "../forms/TournamentCreationForm";
import useAxios from "../../utils/useAxios";
import { getFormattedUrlApi } from '../../utils/genericFunctions';

/**
 * Button component calling a tournament creation modal.
 */
const TournamentCreation = () => {
    const [modalStatus, setModalStatus] = useState(false)
    const [playersOptions, setPlayersOptions] = useState([])
    const [nextPage, setNextPage] = useState('')
    const [readyForRender, setReadyForRender] = useState(false)
    const form = <TournamentCreationForm playersOptions={playersOptions} />

    const axios = useAxios()


    async function getPlayersList (url) {
        try {
            const tempList = playersOptions
            const response = await axios.get(url)
            response.data.results.map(player => {
                return tempList.push({
                    value: player.number,
                    label: player.username
                })
            })
            setPlayersOptions(tempList)

            if (response.data.next != null) {
                setNextPage(getFormattedUrlApi(response.data.next))
            } else {
                setNextPage('')
                setReadyForRender(true)
            }

        } catch(error) {
            console.log(error)
        }
    }

    useEffect( () => {
        const url = '/api/players/'
        getPlayersList(url)
    }, [])

    useEffect(() => {
        if (nextPage) getPlayersList(nextPage)
    }, [nextPage])

    return (
        <div className='creation-btn'>
            <button
                className={'modal-opening green-btn'}
                onClick={() => {
                    setModalStatus(true)
                }}
            >
                Create a tournament
            </button>
            {readyForRender && < Modal
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
                title={"Creation of a tournament"}
                body={form}
            />}
        </div>
    );
}

export default TournamentCreation

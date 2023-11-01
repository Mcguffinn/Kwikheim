import axios from 'axios';
import { useState, useEffect } from 'react'

const ServerStats = () => {
    const [serverStatus, setServerStatus] = useState({});

    useEffect(() => {
        axios.get('https://amp.kwiklab.live:2456/status')
        .then((response) => {
            setServerStatus(response.data);
        })
        .catch((error) => {
            console.error('Failed to fetch Valheim server status:', error);
        });
    }, []);

    console.log(serverStatus)
    return (
        <div>
            <h1>Valheim Server Status</h1>
            <p>Server Name: {serverStatus.serverName}</p>
            <p>Players Online: {serverStatus.playersOnline}</p>    
        </div>
    )
}

export default ServerStats
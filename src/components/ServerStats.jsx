import axios from 'axios';
import { useState, useEffect } from 'react'

const ServerStats = () => {
    const [serverStatus, setServerStatus] = useState({});
    const steamApiKey = '8ABC72E33069237F67219B4C5625A87B';
    const serverIp = '97.102.204.113';
    const port = '2457'

    useEffect(() => {
        axios.get(`https://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?key=${steamApiKey}&addr=${serverIp}%3A${port}`)
        .then((response) => {
            setServerStatus(response.data);
        })
        .catch((error) => {
            console.error('Failed to fetch Valheim server status:', error);
        });
    }, []);

    console.log(serverStatus.response)
    return (
        <div>
            <h1>Valheim Server Status</h1>
            {serverStatus ? (
                <div>
                    {setTimeout(() => {
                        <p>{serverStatus.response.servers}</p>
                    }, 8000)}
                </div>
            ) : (
                <p>Loading server status...</p>
            )}    
        </div>
    )
}

export default ServerStats
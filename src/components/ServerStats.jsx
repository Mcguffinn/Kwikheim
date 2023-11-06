import { useState, useEffect } from 'react'
import axios from 'axios'
import { throttle } from 'lodash';

const ServerStats = () => {
    const [serverInfo, setServerInfo] = useState({})
    const [error, setError] = useState(null)

    const apiUrl = 'https://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?'
    const serverIp = '97.102.204.113:2457'

    const throttleApiCall = throttle(() => {

        axios.get(`https://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?&addr=${serverIp}`)
        .then((response) => {
            setServerInfo(response.data.response);
        })
        .catch((error) => {
            console.error('Failed to fetch Valheim server status:', setError(error));
        });
    }, 3000)

    useEffect(() => {
        throttleApiCall()
        // console.log(serverInfo?.servers[0])
    }, []);
    
    const connectToServer = () => {
        if ( serverInfo.success && serverInfo.servers.length > 0) {
            const gameServer = serverInfo.servers[0]
            const serverAddress = `${gameServer.addr}:${gameServer.gameport}`
            window.open(serverAddress, '_blank')
        }
    }

    
    return (
        <>
            {error && <p>{error}</p>}
            {serverInfo.servers != null ?  (
                <button onClick={connectToServer}>{serverInfo.servers[0].addr ? 'ᛃᛟᛁᚾ': 'public'}</button>
            ) :  <div>Text</div> } 
            {/* {serverInfo.servers[0].addr} */}
           
        </>
    )
}

export default ServerStats


import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import logo from '../assets/logo.png'

const ServerStats = () => {
    const [serverInfo, setServerInfo] = useState({})
    const [error, setError] = useState(null)

    const apiUrl = 'https://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?'
    const serverIp = '97.102.204.113:2457'
    const steamApiKey = '8ABC72E33069237F67219B4C5625A87B'
    const port = '2457'

    useEffect(() => {
        axios.get(`https://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?key=${steamApiKey}&addr=${serverIp}%3A${port}`)
        .then((response) => {
            setServerInfo(response.data.response);
        })
        .catch((error) => {
            console.error('Failed to fetch Valheim server status:', error);
        });
    }, []);
    // useEffect(() => {
    //     axios
    //         .get(apiUrl, {
    //             params: {
    //                 addr: serverIp,
    //             }
    //         })
    //         .then((response) => {
    //             if (response.data && response.data.success) {
    //                 setServerInfo(response.data)
    //             } else {
    //             setError('No game server found at this IP address.')
    //             }
    //         })
    //         .catch((err) => {
    //             setError('Error fetching game server information')
    //             console.error(err)
    //         })

    //         console.log(response.data)
    // }, [])
    
    const connectToServer = () => {
        if ( serverInfo.success && serverInfo.servers.length > 0) {
            const gameServer = serverInfo.servers[0]
            const serverAddress = `${gameServer.addr}:${gameServer.gameport}`
            window.open(serverAddress, '_blank')
        }
    }

    console.log(serverInfo)
    return (
        <div>
            {error && <p>{error}</p>}
            {serverInfo && serverInfo.servers.length > 0 && (
                // <div> 
                //     <p>Game Server IP: {serverInfo.servers[0].addr}</p>
                //     <p>Game Server Port: {serverInfo.servers[0].gameport}</p>
                // </div>
                <div className="frame">
                    <div className="div-hero">
                        <img src={logo} className="div-logo" alt="logo" />
                        <p className="text-hero">Kwikheim</p>
                        <button><p className="button-wrapper">ᛃᛟᛁᚾ</p></button>
                    </div>
                </div>
             )}
        </div>
    )
}

export default ServerStats

{/* <h1>Valheim Server Status</h1>
            {serverStatus ? (
                <div>
                    {setTimeout(() => {
                        <p>{serverStatus.response.servers}</p>
                    }, 8000)}
                </div>
            ) : (
                <p>Loading server status...</p>
            )}    */}
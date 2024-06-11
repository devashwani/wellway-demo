import React from 'react'
import { useReactPWAInstall } from 'react-pwa-install'
import myLogo from "/logo90.png";

const AppInstallHeader = () => {    

    const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

    const handleClick = () => {
        pwaInstall({
          title: "Install WellWay Application",
          logo: myLogo,
          features: (
            <ul>
              <li>Support Chat</li>
              <li>Faster experience</li>
              <li>Works offline</li>
            </ul>
          ),
          description: "Get the best experience with the native application ",
        })
          .then(() => alert("App installed successfully!"))
          .catch(
            () => console.log("User opted out from installing")
          );
    };


    return (

      supported() && !isInstalled() ? (
        <div style={{padding: '20px', background: '#030303b5', width: '100%', position: 'fixed', bottom: '0', 'zIndex':'999', opacity: '0.9'}}>
            <button type="button" onClick={handleClick} className="btn btn-primary">
              Install App
            </button>
            </div>
      ) : <></>
        
        
      );
       
}

export default AppInstallHeader

import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import SideMenu from '../components/SideMenu'
import './Qrcodescan.css'


const Qrcodescan = () => {

    const cameraRef = useRef(null);
    const [qrCode, setQrCode] = useState("");
  
    useEffect(() => {
      const scanner = new Html5QrcodeScanner(
        "camera-screen",
        {
          fps: 10,
          qrbox: { width: 300, height: 200 },
        },
        false
      );
  
      scanner.render(
        (decodedText) => {
          setQrCode(decodedText);
          scanner.clear();
          setTimeout(() => {
            window.location.href = decodedText;
          }, 1000);
        },
        (error) => {
          console.warn(error);
        }
      );
  
      return () => {
        scanner.clear();
      };
    }, []);
  
    return (
        <div>
        <SideMenu/>
      <div className="container-qr">
        <div className="box-qr">
          <div id="camera-screen" ref={cameraRef}></div>
          {qrCode && <p className="qr-result">QR Code: {qrCode}</p>}
          <div className="scanner-line"></div>
        </div>
      </div>
      </div>
  )
}

export default Qrcodescan

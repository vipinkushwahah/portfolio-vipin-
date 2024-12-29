// src/QRCodeGenerator.js
import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import './qr.css';
import vipin from '../assat/vipin.jpg'

const QRCodeGenerator = () => {
  const url = "https://vipin-kushwaha-portfolio.netlify.app";

  return (
    <div className="qr-container">
      <h1>Scan the QR Code to Open the URL</h1>
      <QRCode 
        value={url}
        size={256}
        qrStyle="dots"
        logoImage={vipin}
        logoWidth={50}
        logoHeight={50}
        quietZone={10}
        eyeRadius={[
          // top/left eye
          {
            outer: [10, 10, 0, 10],
            inner: [10, 10, 0, 10],
          },
          // top/right eye
          [10, 10, 10, 0],
          // bottom/left
          [10, 10, 10, 10],
        ]}
        logoOpacity={1}
        removeQrCodeBehindLogo={true}
      />
      <p>{url}</p>
    </div>
  );
};

export default QRCodeGenerator;

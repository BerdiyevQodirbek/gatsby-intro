import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { FiCamera, FiRefreshCw } from 'react-icons/fi';
import { Modal, ModalClose, ModalContainer } from '../../styles/WebCame';



const WebcamCapture = ({ fileUrl, hideModal }) => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState('user');
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      fileUrl(imageSrc);
      hideModal();
    },
    [webcamRef],
    );


    const camToggler = useCallback(() => {
      const data = facingMode === 'user' ? { exact: 'environment' } : { exact: 'user' };
      setFacingMode(data);
    });
    
    return (
      <Modal>
      <ModalContainer>
        <ModalClose onClick={() => hideModal()}>X</ModalClose>
        <div className="web-cam">
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
            screenshotQuality={0.60}
            videoConstraints={{ width: 200, height: 200, facingMode }}
            className="web-cam"
            mirrored={true}
          />
          <div className='web-cam__buttons'>
            <button type="button" onClick={capture}>
              <FiCamera size="20" />
              {' '}
              Save
            </button>
            <button type="button" onClick={camToggler} className="web-cam-toggler">
              <FiRefreshCw size="20" />
            </button>
          </div>

        </div>
      </ModalContainer>
    </Modal>
  );
};

export default WebcamCapture;
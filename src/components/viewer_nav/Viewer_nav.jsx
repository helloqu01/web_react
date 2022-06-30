import React from 'react'
import './Viewer_nav.css'
import arrow_Button from '../../icon/arrow_Button.png'
import case_icon from '../../icon/case_icon.png'
import download_icon from '../../icon/download_icon.png'
import link_icon from '../../icon/link_icon.png'
import link_icon2 from '../../icon/info_2.png'
import camera from '../../icon/camera.png'
import { Link } from 'react-router-dom';
import ClipboardText from '../../icon/ClipboardText.png'
import Modal from './Modal'
import { useState } from 'react'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver';

const Viewer_nav = (data_info) => {
  
console.log("nav:"+data_info.data_info2);
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen_2, setModalOpen_2] = useState(false);

    const openModal_2 = () => {
      setModalOpen_2(true);
    };
    const closeModal_2 = () => {
      setModalOpen_2(false);
    };

    const onDownloadBtn = () => {
       html2canvas(document.querySelector("body")).then(canvas => {
        saveAs(canvas.toDataURL('image/png'),"capture-test.png");
        });
    };

  return (
    
    <div  className='nav2'>
         <div className='left-container'>
            <div className='back_icon'><Link   to={"/"}><i> <img src={arrow_Button}></img></i></Link></div>
            <div className='case_name'>{data_info.data_info}</div>
            <div className='form_name'>{data_info.data_status}</div>
        </div>
        <div className='right-container'>
            <div className='camera' onClick={onDownloadBtn}><i><img src={camera}></img></i></div>
            <div className='download_icon' onClick={openModal}><i><img src={download_icon}></img></i></div>
            <div className='case_icon' onClick={openModal_2} ><i> <img src={case_icon}></img></i></div>
            <div className='link_icon'><i> <img src={link_icon}></img></i></div>
        </div> 

        <Modal open={modalOpen} close={closeModal} header="파일 다운로드">
        <div className="madal">
          <div className="modal_header">
            <h3>파일 다운로드</h3><div className="Premium"> Premium 기능</div>
          </div>
          <div className="blue">Premium 기능은 한시적으로 모든 사용자에게 제공됩니다. 향후 멤버쉽 플랜에 따라 사용 조건이 달라질 수 있습니다.</div>
          <p >메시 형식</p>
          <div className="gray">
            <p>메시 파일을 아래 포맷으로 변환 가능합니다.</p>
            <div className="inputs">
              <label><input type="checkbox" className="file_type" value="Mash"/> Mash</label>
              <label><input type="checkbox" className="file_type" value="OBJ"/> OBJ</label>
              <label><input type="checkbox" className="file_type" value="PLY"/> PLY</label>
               <label><input type="checkbox" className="file_type" value="STL"/> STL</label>
            </div>
          </div>
            <div className="info">
              <img src={link_icon2}></img><p>선택된 포맷은  해당 햅에서 생성된 결과 파일에 적용됩니다.</p>
            </div>
            <div className="info">
              <img src={link_icon2}></img><p>첨부 파일은 변환되지 않고 기존 포맷을 유지합니다.</p>
            </div>
          </div>
          
        </Modal>   


        <Modal open={modalOpen_2} close={closeModal_2} header="케이스 정보">
       
          <div className="info_l">
            <div className="case_info">
              <h3>케이스 정보</h3>
              <div className="case">
                <p>케이스 이름 :</p><p>test's Case</p>
                <p>환자 이름 :</p><p>test</p>
                <p>스캔한 날짜 :</p><p>2022-04-22</p>
              </div>
            </div>
            <div className="order_info">
              <h3>주문</h3>
              <div className="order">
                <p>주문 아이디 :</p><p>test's Case</p>
                <p>파트너 :</p><p>test</p>
                <p>주문한 날짜 :</p><p>2022-04-22</p>
                <p>배송일 :</p><p>2022-04-27</p>
              </div>
            </div>
            
            <div className="info_r">
              <div className="info">
                {/* <img src={ClipboardText}></img>
                <img src={link_icon2}></img><p>현재 폼 정보 없음</p> */}
              </div>
            </div>
          </div>
        </Modal>

    </div>
  )
}

export default Viewer_nav
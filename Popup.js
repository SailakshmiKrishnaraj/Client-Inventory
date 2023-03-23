import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { CgClose } from 'react-icons/cg';
import { Hidepopup } from './request/popup';

function Popup({ show,action,rowdata}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website,setWebsite] = useState("");
  useEffect(() => {
    if(action === "View"){
      if(Object.keys(rowdata).length > 5){
        setName(rowdata.name);
        setUserName(rowdata.username);
        setEmail(rowdata.email);
        setPhone(rowdata.phone);
        setWebsite(rowdata.website)
      }
    }
  },[])
  
  return (
     <Modal
      show={show}
      centered
      size={"xl"}
    >
      <div></div>
       <Modal.Header> {action==='View' && "View"} <CgClose className='closeBtn' onClick={() => dispatch(Hidepopup())} /></Modal.Header>
    
       <Modal.Body>
        <form>
          <div className="form-group  row">
            <label className="col-sm col-form-label col-form-label-sm">Name  </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
          <div className="form-group  row">
            <label className="col-sm col-form-label col-form-label-sm">UserName </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
          <div className="form-group required row">
            <label className="col-sm col-form-label col-form-label-sm">  Email </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
          <div className="form-group  row">
            <label className="col-sm col-form-label col-form-label-sm">PhoneNumber  </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
          <div className="form-group  row">
            <label className="col-sm col-form-label col-form-label-sm">Website </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="form-group">
          <button className='buttonStyle' type="button" onClick={()=>dispatch(Hidepopup())}>
            Close
          </button>
        </div>
      </Modal.Footer>
      
    </Modal>
  )
}
function mapStateToProps(state) {
  const { show, action ,rowdata} = state.popupReducer;
  return {
         show,  action,rowdata
  };
}

export default connect(mapStateToProps, null)(Popup)




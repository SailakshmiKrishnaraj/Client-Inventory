import { Component } from 'react';
import InventoryTableHeader from '../../MainComponents/header/InventoryTableHeader';
import CustomMaterialTable from './CustomMaterialTable';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setData ,ViewData } from '../../request/popup';
import Footerlogo from '../../assets/images/Footerlogo.png';
import Popup from '../../Popup';

class InventoryTable extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
         this.props.setData();
        

    }
    
    render() {
   
        return (
            <>
            
                <div className="header">
                    <InventoryTableHeader />
                </div>
                <div className="body mtableScrollbar" >
                    <CustomMaterialTable />
                </div>
                {/* {show}=this.props; */}
                {this.props.show && <Popup/>} 
                <footer className='footer-textStyle'><span >Developed By<img src={Footerlogo} className='footer-logo' alt='#' /></span></footer>
            </>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setData,ViewData
        },
        dispatch
    );
}

function mapStateToProps(state) {
    const { show, data,action} = state.popupReducer;

    return {
        show, data,action
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(InventoryTable)               
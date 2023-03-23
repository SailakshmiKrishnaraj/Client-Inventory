import React from "react";
import MaterialTable from "material-table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ImEye } from "react-icons/im";
import { ViewData } from "../../request/popup";
function CustomMaterialTable({ data,ViewData}) {

    // const purchaseFormatter = () => {
    //     debugger;
    //     let purchaseData = {...data};
    //     let clientdetail = [{...purchaseData,postId:id,id:data.length}];
    //     return clientdetail
    // }
    const columns = [
    { title: 'Name', field: 'name',defaultGroupOrder: 0  },
    { title: 'UserName', field: 'username' },
    { title: 'Email', field: 'email' },
    { title: 'Phone Number', field: 'phone' },
    { title: 'Website', field: 'website' },
   ];
    const Tabledata = data ? data : [];
    return (
        <MaterialTable
            title="Client Inventory"
            columns={columns}
            data={Tabledata}
            actions={[
                {
                    icon:()=><ImEye color='#414a59' size={12} className="CursorPointer"  />,
                    tooltip:"view Client Details",
                    onClick:(event,params)=>{
                        ViewData(params)
                       
                    
                    }
                }
            ]}
    
            options={{
                grouping:true,
                paging: false,
                showTitle: false,
                searchFieldAlignment: 'right',
                actionsColumnIndex: -1,
                maxBodyHeight: "80vh",
                headerStyle: {
                    padding: '2px 2px',
                    backgroundColor: "#251D2A",
                    color: "whitesmoke",
                    fontFamily: 'Arial',
                    fontSize: '14px',
                    textAlign: 'center',
                    border: "1px solid #E0E0E0",
                    position: 'sticky',
                    top: '0px',
                    zIndex: '10'
                },
                actionsCellStyle: { border: "1px solid #757575" },
                cellStyle: {
                    padding: '2px',
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    textAlign: 'center',
                    maxWidth: '200px',
                    whiteSpace: 'nowrap',
                    textOverflow: "ellipsis"
                },
                searchFieldStyle: {
                    width: '100%',
                    backgroundColor: 'white',
                    // border: 'none',
                    outline: 'none',
                    padding: '0px',
                    borderRadius: '2px',
                    textDecoration: "none"
                },
                sorting: false,
                rowStyle: x => {
                    if (x.tableData.id % 2) {
                        return { backgroundColor: "#ededed" }
                    }
                    else {
                        return { backgroundColor: "#ffffff" }
                    }
                },
            }}
            

        />
    )
}


function mapStateToProps(state) {
    const { show,data,rowdata } = state.popupReducer;
    return {
        data,rowdata,show
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            ViewData
        },
        dispatch
    );
}
export default connect(mapStateToProps,matchDispatchToProps)(CustomMaterialTable);
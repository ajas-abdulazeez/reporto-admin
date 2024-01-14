import React from 'react'
import { FaDonate, FaEdit, FaTrash } from 'react-icons/fa'
import GetRequest from '../../Service/GetRequest';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./style.css";


const ReportTableRows = ({slno,id,category,description,latitude,longitude,location,lastActivity,status}) => {
    const userID = localStorage.getItem("userid");
    const consumeFood=()=>{
         GetRequest('consume/food?foodId='+id)
          .then(data => {
              console.log(data)});
              toast.success("Food item has been consumed!", {
                position: toast.POSITION.TOP_RIGHT
              });
            }

    const removeFood=()=>{
        GetRequest('remove/food/item?foodItemId='+id)
            .then(data => {
                console.log(data)});
                toast.success("Food item has been removed!", {
                position: toast.POSITION.TOP_RIGHT
                });
        }
      
      

  return (
        <div className="collections-table-row">
                    <div className="table-row-data">{slno}</div>
                    <div className="table-row-data">{category}</div>
                    <div className="table-row-data">{lastActivity}</div>
                    <div className="table-row-data-location">{location}</div>   
                    <div className="table-row-data">{latitude}</div>
                    <div className="table-row-data">{longitude}</div>
                    <div className="table-row-data">{status === "closed" ? (<span class="expired-info-banner"> {status}</span>) : (<span class="active-info-banner">{status}</span>) }</div> 
                    
                    <div className="table-row-data"> {status !== 'closed' && status !== 'pending'? (
                                        <div className="consume-primary-btn" onClick={consumeFood}>Review</div>):(<div className="consume-primary-btn-disabled">consume</div>) }</div>
            <ToastContainer closeButton={false}/>
            </div>  
    )
}

export default ReportTableRows

                
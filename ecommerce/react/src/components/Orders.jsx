import React from 'react'

const Orders = () => {
    return (
        <>
            <div className="container mt-5">
    <div className="row">
        <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center activity">
                {/* <div><i className="fa fa-clock-o"></i><span className="ml-2">11h 25m</span></div> */}
                <div><span className="activity-done">Your Orders(4)</span></div>
                {/* <div className="icons"><i className="fa fa-search"></i><i className="fa fa-ellipsis-h"></i></div> */}
            </div>
            <div className="mt-3">
                <ul className="list list-inline">
                    <li className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon"></i>
                            <div className="ml-2">
                                <h6 className="mb-0">Ladies Summer Pack</h6>
                                <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                    <div><i className="fa fa-calendar-o"></i><span className="ml-2">22 May 2020 11:30 PM</span></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column mr-2">
                                <div className="profile-image">87,500</div><span className="date-time">COD</span>
                            </div> 
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Orders

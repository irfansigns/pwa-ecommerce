<div className="modal fade"  id="guestModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Customer Information</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">           
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Name</label>
                      <input type="text" value={loginMod.gsname} onChange={handleGuest} className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={loginMod.gsmail}  onChange={handleGuest} className="form-control" id="email" aria-describedby="emailHelp" />
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobilenum">Mobile Number</label>
                    <input type="text" value={loginMod.gscontact} onChange={handleGuest} className="form-control" id="contact" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your Mobile number with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" value={loginMod.gsaddress} onChange={handleGuest} className="form-control" id="address" />
                  </div>       

                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" type="submit" className="btn btn-primary ml-1">Place Order
                  
                  </button>
                  
                </form>           
                
              </div>
              
              
            </div>
          </div>
        </div>
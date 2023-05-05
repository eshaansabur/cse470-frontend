import React from 'react';

const MakeOrder = () => {
    const handleOrder = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const address=event.target.address.value;
        const phone=event.target.phone.value;
        const details=event.target.details.value;
        const proceed = window.confirm("Do you want to make this order?")
        if(proceed){
            console.log(name, address, phone, details)
            //send data to the server
            fetch('https://cse470.onrender.com/makeOrder', {
                method: 'POST',
                body: JSON.stringify({
                    name, address, phone, details
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((data) => console.log(data));
                event.target.reset();
            }
    }
    return (
        <div className='container makeorder'>
           <div className="row text-start mt-5">
           <div className="col-12 col-md-12 col-lg-12">
            <h3>Make an Order</h3>
           <form onSubmit={handleOrder} className='w-50'>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Address</label>
                <input type="text" name="address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Phone</label>
                <input type="text" name="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Order Details</label>
                <input type="text" name="details" class="form-control py-4" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="submit" class="btn btn-primary">Make Order</button>
            </form>
           </div>
            </div> 
        </div>
    );
};

export default MakeOrder;
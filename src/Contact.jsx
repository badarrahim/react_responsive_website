import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        description: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname} . My phone Number is ${data.phone}`)

    }
    return (

        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact US
               </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name="fullname" value={data.fullname} onChange={InputEvent} />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone No.</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" required name="phone" value={data.phone} onChange={InputEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Description</label>
                                <textarea class="form-control" id="" cols="30" rows="3" required name="description" value={data.description} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
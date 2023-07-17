import React from "react";
import "./Add.scss";

function Add() {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g I will do something I will really good at"
            />
            <label htmlFor="">Category</label>
            <input type="text" placeholder="Music" />
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="brief description of your service to the customers
            "
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service title</label>
            <input type="text" placeholder="eg. one-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="short description of your service"
            ></textarea>
            <label htmlFor="">Delivery Time(eg. 3 days)</label>
            <input type="number" min={1} />
            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />
            <label htmlFor="">Add features</label>
            <input type="text" placeholder="eg. page design" />
            <input type="text" placeholder="eg. file uploading" />
            <input type="text" placeholder="eg. setting up a domain" />
            <input type="text" placeholder="eg. hosting" />
            <label htmlFor="">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;

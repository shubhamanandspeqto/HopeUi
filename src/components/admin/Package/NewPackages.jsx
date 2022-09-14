import React from 'react'
import "./NewPackages.css";

export default function NewPackages() {
  return (
    <>
      <div className="NewPackageForm container">
        <div className="headFlex container">
          <h1>Create New Package</h1>
          <p style={{ color: "rgba(138, 146, 166, 1)" }}>Create a New Package</p>
        </div>
        <form>
          <div className="conatiner Nameflex">
            <label className='my-2' style={{ color: "rgba(138, 146, 166, 1)" }} htmlFor="Name">Package Name</label>
            <input className='Inputclassfor' style={{ border: '1px solid rgba(115, 138, 254, 1)' }} type="text" name="Name" id="Name" />
          </div>

          <div className="conatiner Descriptionflex">
            <label className='my-2' style={{ color: "rgba(138, 146, 166, 1)" }} htmlFor="Name">Package Description</label>
            <input className='Inputclassfor' style={{ border: '1px solid rgba(115, 138, 254, 1)' }} type="text" name="Name" id="Name" />
          </div>

          <div className="row align-items ">
            <div className="col-md-12 my-2  " style={{ paddingTop: '35px' }}>
              <button className=" img-margin-2 container-button-color11">
                <span className='mx-2'>
                  <img src="/assets/plusicon1.png" />
                </span>
                <p>Attached saved documents</p>

              </button>
            </div>
            <div className="col-md-12 my-2">
              <button className=" img-margin-2 container-button-color12">
                <span className='mx-2'>
                  <img src="/assets/plusicon1.png" />
                </span>
                <p>Attach issues Shares</p>

              </button>
            </div>
            <div className="col-md-12 my-2">
              <button className=" img-margin-2 container-button-color13">
                <span className='mx-2'>
                  <img src="/assets/plusicon1.png" />
                </span>
                <p>Attach Issued Proofs</p>

              </button>
            </div>
            <div className="col-md-12 my-2">
              <button className=" img-margin-2 container-button-color14">
                <span className='mx-2'>
                  <img src="/assets/plusicon1.png" />
                </span>
                <p>Attach Additional tasks Line up</p>

              </button>
            </div>
          </div>

          <div className="container my-2 Checkboxflex">
            <input type="checkbox" name="Tick" id="tick" />  <p className='mx-2' style={{ color: "rgba(138, 146, 166, 1)" }}>Require Reciver to submit file.</p>
          </div>

          <div className="Createflex">
            <button
              type="button"
              className="btn btn-primary "
              style={{ width: "11vw" }}
            >
              <p>Create</p>
            </button>
          </div>


        </form>
      </div>
    </>
  )
}

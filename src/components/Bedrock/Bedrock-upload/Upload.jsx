import React from "react";
import "../Bedrock-upload/Upload.css";

import { BsUpload } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineDropbox } from 'react-icons/ai'
import { DiGoogleDrive } from 'react-icons/di'
import { successPopup } from "../../../utils/PopupMessages";
import { useEffect } from "react";
import { useState } from "react";

export default function Upload() {

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => {
    console.log(file);
    let formdata = new FormData();
    formdata.append("file", file)
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <br />
        <span style={{ fontSize: '14px', color: 'red' }}>*Add Documents Details Below</span>
      </li>
    )
  }
  );

  return (
    <div>
      <div className="special-page-container">
        <div className="d-flex justify-content-between special-page-heading bed-padding px-4 py-5">
          <div className="d-flex flex-column">
            <h2>Hello! Welcome to Bedrock.</h2>
            <p>
              You are currently using the invite-only product version of
              Bedrock.
            </p>
          </div>
        </div>

        <div className="bedrock">
          <div className="container">
            <div className="row">
              <section className="bedrockProfile">
                <div className="container">
                  <div className="row bedrock-row">
                    <div className="col-md-4">
                      <div className="bedrock-image">
                        <img
                          src="/assets/beared-guy.png"
                          alt="bearedguy"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bedrock-content">
                        <p className="lead">
                          Upload<span>- user name</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bedrock-upload-button">
                        <button className="btn">Upload</button>
                        <p>My Documents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bedrockUpload">
                <div className="container">
                  <div className="row card-row-2">
                    <div className="col-md-5">
                      <div className="bedrockUpload-card">
                        <div className="bedrockUpload-card-content">
                          <h3>Select a document</h3>
                          {/* <img
                            src="/assets/bedrock-dot.png"
                            alt=""
                            className="img-fluid"
                          /> */}
                        </div>
                        {/* <button className="btn">
                          Click Here to Browse Files
                        </button> */}
                        {/* <div class="btn-group"> */}
                        <div className="pb-3">
                          <button type="button" className="d-flex gap-2 align-items-center">
                            <BsUpload color="white" size={20} />
                            <p onClick={open} className="d-flex justify-content-between">Upload</p>
                          </button>
                        </div>

                        {/* </div> */}

                        <div className="drag-drop-container">
                          <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some file here</p>
                            {/* <button type="button" onClick={open}>
                              Open File Dialog
                            </button> */}
                            <div className="btn-group">
                              <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                Upload File
                              </button>
                              <ul className="dropdown-menu dropdown-menu-lg-end m-0 p-0">
                                <li>
                                  <p onClick={open} className="d-flex gap-2 align-items-center p-2">
                                    <span><RiComputerLine /></span>
                                    <label>Browse Computer</label>
                                  </p>
                                </li>

                                <li>
                                  <p className="d-flex gap-2 align-items-center p-2">
                                    <span><AiOutlineDropbox /></span>
                                    <label>Dropbox</label>
                                  </p>
                                </li>

                                <li>
                                  <p className="d-flex gap-2 align-items-center p-2">
                                    <span><DiGoogleDrive /></span>
                                    <label>Google Drive</label>
                                  </p>
                                </li>

                              </ul>
                            </div>

                          </div>
                          <aside>
                            <ul className="my-0 py-0 pt-1">{files}</ul>
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-1">
                      <img
                        src="/assets/arrow.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="row card-row">
                    <div className="col-md-5">
                      <div className="bedrockUpload-card">
                        <div className="bedrockUpload-card-content">
                          <h3>Add Document Details</h3>
                          <img
                            src="/assets/bedrock-dot.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <form>
                          <div class="mb-3">
                            <label for="" class="form-label">
                              Document Title
                            </label>
                            <input type="text" class="form-control" />
                          </div>
                          <div class="mb-3">
                            <label for="" class="form-label">
                              Document Description
                            </label>
                            <input type="text" class="form-control" />
                          </div>

                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bedrockUpload">
                <div className="container">
                  <div className="row card-row-2">
                    <div className="col-md-5">
                      <div className="bedrockUpload-card">
                        <div className="bedrockUpload-card-content">
                          <h3>Sign Transaction</h3>
                          <img
                            src="/assets/bedrock-dot.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <button className="btn">Sign Transaction</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

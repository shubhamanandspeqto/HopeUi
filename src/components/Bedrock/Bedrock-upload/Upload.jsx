import React from "react";
import "../Bedrock-upload/Upload.css";

import { BsUpload } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineDropbox } from 'react-icons/ai'
import { DiGoogleDrive } from 'react-icons/di'
import { errorPopup, successPopup } from "../../../utils/PopupMessages";
import { useEffect } from "react";
import { useState } from "react";
import { dropboxKey, googleDriveClientID, googleDriveClientSecret, googleDriveKey } from "../../../utils/Keys";

import { useDropzone } from 'react-dropzone';
import ReactDropboxChooser from "react-dropbox-chooser";
import useDrivePicker from 'react-google-drive-picker'
import axios from "axios";

export default function Upload() {

  const [selectedFile, setSelectedFile] = useState();
  const [alertMessage, setAlertMessage] = useState("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const [documentTitle, setDocumentTitle] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");

  const [fileUploadLoading, setFileUploadLoading] = useState(false);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  // let files = acceptedFiles.map(file => {
  //   console.log(file);
  //   return ({
  //     html: <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //       <br />
  //       {/* <span style={{ fontSize: '14px', color: 'red' }}>*Add Documents Details Below</span> */}
  //     </li>,
  //     file: file
  //   })
  // }
  // );

  // For Drag and Drop or Browse From Computer
  useEffect(() => {
    console.log(acceptedFiles);
    if (!acceptedFiles.length) return
    let newImage = {
      html: <li key={acceptedFiles[0].name}>
        {acceptedFiles[0].name} - {acceptedFiles[0].size} bytes
        <br />
      </li>,
      file: acceptedFiles[0]
    }

    setSelectedFile(newImage)
  }, [acceptedFiles])

  // For Select File From Dropbox
  const onSuccess = (file) => {
    console.log(file);
    let newImage = {
      html: <li key={file[0].name}>
        {file[0].name} - {file[0].bytes} bytes
        <br />
      </li>,
      file: file[0]
    }
    setSelectedFile(newImage);
  }

  // For Cancel Upload Of Dropbox
  const onCancel = () => {
    console.log("User Cancelled Upload");
  }

  // Google Drive

  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = (e) => {
    e.preventDefault()
    openPicker({
      clientId: googleDriveClientID,
      developerKey: googleDriveKey,
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }

  // For Uploading File Selected By User
  const uploadFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return errorPopup("File Not Selected")
    console.log(selectedFile);

    setFileUploadLoading(true)
    let formData = new FormData();
    formData.append('file', selectedFile.file)

    axios.post('https://bedrock-backend.herokuapp.com/file-upload', formData, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((res) => {
      console.log(res);
      setUploadedFileUrl(res.data?.data)
      successPopup(res?.data?.msg)
      setAlertMessage("*Add Documents Details Below")
      setFileUploadLoading(false)
    }).catch((err) => {
      console.log(err);
      errorPopup(err?.response?.data?.message)
      setFileUploadLoading(false)
    })

  }

  const submitDocumentDetails = (e) => {
    e.preventDefault()
    console.log(documentTitle, documentDescription, uploadedFileUrl);
  }

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
                        {/* <div className="btn-group"> */}
                        <div className="pb-3">
                          <button disabled={fileUploadLoading} onClick={(e) => { uploadFile(e) }} type="button" className="d-flex gap-2 align-items-center">
                            <BsUpload color="white" size={20} />
                            <p className="d-flex justify-content-between">Upload</p>
                            {
                              fileUploadLoading && <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: 16 }} />
                            }
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
                                  <ReactDropboxChooser
                                    appKey={dropboxKey}
                                    success={files => onSuccess(files)}
                                    cancel={() => onCancel()}
                                    multiselect={false} >
                                    <p className="d-flex gap-2 align-items-center p-2">
                                      <span><AiOutlineDropbox /></span>
                                      <label>Dropbox</label>
                                    </p>
                                  </ReactDropboxChooser>
                                </li>

                                {/* <li>
                                  <p
                                    onClick={(e) => { handleOpenPicker(e) }}
                                    className="d-flex gap-2 align-items-center p-2">
                                    <span><DiGoogleDrive /></span>
                                    <label>Google Drive</label>
                                  </p>
                                </li> */}

                              </ul>
                            </div>

                          </div>
                          <aside>
                            {
                              selectedFile && <ul className="my-0 py-0 pt-1">{selectedFile?.html}</ul>
                            }
                            {
                              alertMessage && <span style={{ fontSize: '14px', color: 'red' }}>*Add Documents Details Below</span>
                            }
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
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Document Title
                            </label>
                            <input value={documentTitle} onChange={(e) => { setDocumentTitle(e.target.value) }} type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Document Description
                            </label>
                            <input value={documentDescription} onChange={(e) => { setDocumentDescription(e.target.value) }} type="text" className="form-control" />
                          </div>

                          <button onClick={(e) => { submitDocumentDetails(e) }} type="submit" className="btn btn-primary">
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

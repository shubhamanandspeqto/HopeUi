import axios from 'axios';
import React, { useContext, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDropzone } from 'react-dropzone';
import ReactDropboxChooser from "react-dropbox-chooser";
import { useEffect } from 'react';
import { useRef } from 'react';
import { UserContext } from '../../../ContextAPI/Context';
import { URLS } from '../../../utils/ApiURLs';
import { errorPopup, successPopup } from '../../../utils/PopupMessages';
import { dropboxKey } from '../../../utils/Keys';
import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineDropbox } from 'react-icons/ai'

export default function IssueNew({ singleFormData, handleRefresh }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isConditionsAccepted, setIsConditionsAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();

    const [issuedShareDocument, setIssuedShareDocument] = useState("");
    const issuedShareDocumentRef = useRef();
    const [issuedShareFormData, setIssuedShareFormData] = useState({
        company_name: '',
        company_ticker: '',
        share_type: '',
        share_price: '',
        shares: '',
        market_value: '',
    })

    const [formError, setFormError] = useState({
        company_name: '',
        company_ticker: '',
        share_type: '',
        share_price: '',
        shares: '',
        market_value: '',
    })

    let userDetails = useContext(UserContext)
    const { userInfo, address } = userDetails;

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });

    useEffect(() => {
        console.log(singleFormData);
        if (singleFormData) {
            const { company_name, company_ticker, market_value, share_price, share_type, shares, document_url } = singleFormData;
            setIssuedShareFormData({
                company_name,
                company_ticker,
                share_type,
                share_price,
                shares,
                market_value,
            })
        } else {
            setIssuedShareFormData({
                company_name: '',
                company_ticker: '',
                share_type: '',
                share_price: '',
                shares: '',
                market_value: '',
            })
        }
    }, [singleFormData])

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === "company_name") {
            if (value.length < 3) setFormError({ ...formError, company_name: "Length Must be greater than 3" })
            else setFormError({ ...formError, company_name: "" })
        }

        if (name === "company_ticker") {
            if (value.length < 3) setFormError({ ...formError, company_ticker: "Length Must be greater than 3" })
            else setFormError({ ...formError, company_ticker: "" })
        }

        if (name === "share_type") {
            if (value.length < 3) setFormError({ ...formError, share_type: "Length Must be greater than 3" })
            else setFormError({ ...formError, share_type: "" })
        }

        if (name === "share_price") {
            if (isNaN(+value)) return setFormError({ ...formError, share_price: "Quantity Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, share_price: "Quantity Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, share_price: "" })
            else setFormError({ ...formError, share_price: "" })
        }

        if (name === "shares") {
            if (isNaN(+value)) return setFormError({ ...formError, shares: "Price Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, shares: "Price Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, shares: "" })
            else setFormError({ ...formError, shares: "" })
        }

        if (name === "market_value") {
            if (isNaN(+value)) return setFormError({ ...formError, market_value: "Price Must be a number" })
            else if (!isNaN(+value) && (+value <= 0)) setFormError({ ...formError, market_value: "Price Must be greater than 0." })
            if (value.includes('-') || value.startsWith(' ') || String(value).endsWith(' ')) return
            if (value.includes('.')) {
                let count = 0;
                for (let i = 0; i < String(value).length; i++) {
                    if (String(value).charAt(i) == '.')
                        count++;
                }
                if (count > 1) return
            }
            if (!isNaN(+value)) setFormError({ ...formError, market_value: "" })
            else setFormError({ ...formError, market_value: "" })
        }

        setIssuedShareFormData({
            ...issuedShareFormData, [name]: value
        })
    }

    const handleUploadDocument = (e) => {
        e.preventDefault();
        issuedShareDocumentRef.current.click();
    }

    const handleFileChange = (e) => {
        setIssuedShareDocument(e.target.files[0])
    }

    const resetFormData = () => {
        setIssuedShareFormData({
            company_name: '',
            company_ticker: '',
            share_type: '',
            share_price: '',
            shares: '',
            market_value: '',
        })
        setIssuedShareDocument("")
        setIsConditionsAccepted(false)
        setSelectedFile()
    }

    const handleCreateButton = (e) => {
        e.preventDefault();
        // setIsSubmitted(true)
        setIsLoading(true);
        console.log(issuedShareFormData);
        console.log(issuedShareDocument);


        const { company_name, company_ticker, market_value, share_price, share_type, shares } = issuedShareFormData;

        if (singleFormData) {
            let bodyContent = new FormData()
            bodyContent.append('company_name', company_name)
            bodyContent.append('company_ticker', company_ticker)
            bodyContent.append('market_value', market_value)
            bodyContent.append('share_price', share_price)
            bodyContent.append('share_type', share_type)
            bodyContent.append('shares', shares)
            if (issuedShareDocument) {
                console.log(issuedShareDocument);
                bodyContent.append('file', issuedShareDocument)
            } else {
                bodyContent.append('file', "")
            }

            axios.put(`${URLS.updateIssuedShare}/${singleFormData.id}`, bodyContent, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                setIsLoading(false)
                resetFormData()
                successPopup(res.data.message)
                handleRefresh();
                // setIsSubmitted(true);
            }).catch(error => {
                console.log(error);
                setIsLoading(false)
                errorPopup("Some Error Occured")
            })
        } else {
            if (!issuedShareDocument) {
                setIsLoading(false)
                return errorPopup("Document is not selected")
            }
            let bodyContent = new FormData();
            bodyContent.append('company_name', company_name)
            bodyContent.append('company_ticker', company_ticker)
            bodyContent.append('market_value', market_value)
            bodyContent.append('share_price', share_price)
            bodyContent.append('share_type', share_type)
            bodyContent.append('shares', shares)
            bodyContent.append('email', userInfo?.email)
            bodyContent.append('file', issuedShareDocument)

            axios.post(`${URLS.createIssuedShares}/${address}`, bodyContent, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                console.log(res);
                setIsLoading(false)
                resetFormData()
                successPopup(res.data.message)
                setIsSubmitted(true)
                // handleRefresh()
            }).catch(error => {
                console.log(error);
                setIsLoading(false)
                errorPopup("Some Error Occured")
            })
        }
    }

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
        setIssuedShareDocument(acceptedFiles[0]);
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

    return (
        <div className='issue-new-container my-4'>
            {
                !isSubmitted ? <>
                    <h3 className='text-center'>Issue New</h3>
                    <p className='text-center pb-3'>Create a new issuance</p>
                    <div>
                        <form onSubmit={handleCreateButton} className='d-flex flex-column gap-4 issue-new-form px-5'>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="company_name" >Company Name </label>
                                    <input required value={issuedShareFormData.company_name} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="company_name" id="companyName" />
                                    {
                                        formError.company_name &&
                                        <span className='form-error-value'>{formError.company_name}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="company_ticker" >Company Ticker </label>
                                    <input required value={issuedShareFormData.company_ticker} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="company_ticker" id="companyTicker" />
                                    {
                                        formError.company_ticker &&
                                        <span className='form-error-value'>{formError.company_ticker}</span>
                                    }
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_type" >Share Type </label>
                                    <input required value={issuedShareFormData.share_type} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="share_type" id="shareType" />
                                    {
                                        formError.share_type &&
                                        <span className='form-error-value'>{formError.share_type}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="share_price" >Share Price </label>
                                    <input required value={issuedShareFormData.share_price} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="share_price" id="sharePrice" />
                                    {
                                        formError.share_price &&
                                        <span className='form-error-value'>{formError.share_price}</span>
                                    }
                                </div>
                            </div>

                            <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="shares" >Shares</label>
                                    <input required value={issuedShareFormData.shares} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="shares" id="shares" />
                                    {
                                        formError.shares &&
                                        <span className='form-error-value'>{formError.shares}</span>
                                    }
                                </div>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="market_value" >Market Value</label>
                                    <input required value={issuedShareFormData.market_value} onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="market_value" id="market_value" />
                                    {
                                        formError.market_value &&
                                        <span className='form-error-value'>{formError.market_value}</span>
                                    }
                                </div>
                            </div>

                            {/* <div className='d-flex m-0 p-0 gap-2'>
                                <div className='w-50 m-0 p-0'>
                                    <label htmlFor="quantity" >Quantity</label>
                                    <input onChange={(e) => { handleInputChange(e) }} className='w-100' type="text" name="quantity" id="quantity" />
                                </div>
                            </div> */}

                            <div className="drag-drop-container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some file here</p>
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                Upload File
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="m-0 p-0">
                                                <Dropdown.Item>
                                                    <p onClick={open} className="d-flex gap-2 align-items-center p-2">
                                                        <span><RiComputerLine /></span>
                                                        <label>Browse Computer</label>
                                                    </p>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
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
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>

                                <aside>
                                    {
                                        selectedFile && <ul className="my-0 py-0 pt-1">{selectedFile?.html}</ul>
                                    }
                                    {
                                        // alertMessage && <span style={{ fontSize: '14px', color: 'red' }}>{alertMessage}</span>
                                    }
                                </aside>
                            </div>

                            {/* <div className='d-flex justify-content-center issue-new-upload-button'>
                                <button onClick={(e) => { handleUploadDocument(e) }}
                                    className='py-3 px-4'>+ Upload Issuance Documents</button>
                                <input ref={issuedShareDocumentRef} onChange={(e) => { handleFileChange(e) }} type="file" />
                            </div> */}

                            <div className='w-100 d-flex flex-column'>
                                {
                                    singleFormData &&
                                    <a className='pb-2 w-100 text-center'
                                        href={singleFormData.document_url} target='_blank'>View Document</a>
                                }
                                {/* {
                                    issuedShareDocument &&
                                    <ul>
                                        <li>{issuedShareDocument.name}, {issuedShareDocument.type}, {issuedShareDocument.size} bytes</li>
                                    </ul>
                                } */}
                            </div>

                            <div className='d-flex justify-content-center gap-2 issue-new-conditions'>
                                <input required id='conditionsCheckbox' onChange={() => { setIsConditionsAccepted(!isConditionsAccepted) }} type="checkbox" checked={isConditionsAccepted} />
                                <label htmlFor='conditionsCheckbox'>I agree with the terms of use</label>
                            </div>

                            <div className='d-flex justify-content-center issue-new-create-button'>
                                <button
                                    disabled={formError.company_name || !issuedShareFormData.company_name || formError.company_ticker || !issuedShareFormData.company_ticker || formError.market_value || !issuedShareFormData.market_value || formError.share_price || !issuedShareFormData.share_price || formError.share_type || !issuedShareFormData.share_type || formError.shares || !issuedShareFormData.shares || !isConditionsAccepted}
                                    // onClick={(e) => { handleCreateButton(e) }}
                                    className='py-2 px-4 d-flex gap-2 align-items-center'
                                    type='submit'>
                                    Create
                                    {
                                        isLoading && <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: 16 }} />
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </> :
                    <>
                        <h3 className='text-center'>Success</h3>
                        <p className='text-center pb-5'>Shares issued successfully. </p>

                        <div className='view-issued-shares d-flex justify-content-center'>
                            <button onClick={(e) => {
                                e.preventDefault();
                                handleRefresh();
                                setIsSubmitted(false)
                            }} className='px-4 py-2'>View Issued Shares</button>
                        </div>

                        <p className='text-center mt-5 text-decoration-underline'>View on chain</p>
                    </>
            }
        </div>
    )
}

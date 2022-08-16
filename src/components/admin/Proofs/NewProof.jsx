import React from 'react'

export default function NewProof() {
    return (
        <div className='mt-5 pt-5'>

            <div className='d-flex new-proof-first-row justify-content-around flex-wrap'>

                <div className='p-4 card gap-4'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-between align-items-center new-proof-card-header'>
                            <p>Identity Proof</p>
                            <img src="/assets/menuDots.png" alt="" />
                        </div>
                    </div>
                    <div className='new-proof-card-button'>
                        <button className='d-flex w-100 justify-content-center align-items-center gap-3'>
                            <img src="/assets/onfido-logo.svg" alt="" />
                            <p>Connect Onfido</p>
                        </button>
                    </div>
                </div>

                <div className='p-4 card gap-4'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-between align-items-center new-proof-card-header'>
                            <p>Identity Proof</p>
                            <img src="/assets/menuDots.png" alt="" />
                        </div>
                    </div>
                    <div className='new-proof-card-button'>
                        <button className='d-flex w-100 justify-content-center align-items-center gap-3'>
                            <img src="/assets/pitchbook-logo.svg" alt="" />
                            <p>Connect Onfido</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center my-5'>
                <img src="/assets/Down-Arrow.svg" alt="" />
            </div>

            <div className='d-flex justify-content-center new-proof-second-row'>
                <div className='p-4 card gap-4'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-between align-items-center new-proof-card-header'>
                            <p>Issue On-chain Proof</p>
                            <img src="/assets/menuDots.png" alt="" />
                        </div>
                    </div>
                    <div className='new-proof-card-content'>
                        <form className='d-flex flex-column gap-2'>
                            <div className='d-flex flex-column gap-2'>
                                <label htmlFor="proofTitle">Proof Title (e.g. “My Identity Verification”)</label>
                                <input type="text" name="proofTitle" id="proofTitle" />
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <label htmlFor="proofDesc">Proof Desc.</label>
                                <input type="text" name="proofDesc" id="proofDesc" />
                            </div>
                        </form>
                    </div>
                    <div className='new-proof-card-button-solid'>
                        <button className='d-flex w-100 justify-content-center align-items-center gap-3 py-2'>
                            Issue On-Chain Proof
                        </button>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center my-5'>
                <img src="/assets/menuDots.png" alt="" />
            </div>

            <div className='d-flex justify-content-center new-proof-second-row mb-5'>
                <div className='p-4 card gap-4'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-between align-items-center new-proof-card-header'>
                            <p>Validate An Existing Proof</p>
                            <img src="/assets/menuDots.png" alt="" />
                        </div>
                    </div>
                    <div className='new-proof-card-content'>
                        <form className='d-flex flex-column gap-2'>
                            <div className='d-flex flex-column gap-2'>
                                <label htmlFor="proofKey">Enter Proof Key:</label>
                                <input type="text" name="proofKey" id="proofKey" />
                            </div>
                        </form>
                    </div>
                    <div className='new-proof-card-button-solid'>
                        <button className='d-flex w-100 justify-content-center align-items-center gap-3 py-2'>
                            Verify On-Chain Proof
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

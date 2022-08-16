import React from 'react'
import './Kanban.css'

export default function Kanabn() {

    const card = (heading) => {
        return (
            <div className='kanban-card p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <nav className='breadcrumb-container' aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 p-0">
                            <li className="breadcrumb-item active breadcrumb-item-css" aria-current="page">Dashboard</li>
                            <li className="breadcrumb-item active breadcrumb-item-css" aria-current="page">List</li>
                        </ol>
                    </nav>
                    <img src="/assets/menuDots.png" alt="" />
                </div>

                <p className='mt-3'>{heading}</p>

                <div className='d-flex kanban-card-icons align-items-center gap-2 my-3'>
                    <div><img src="/assets/flagIcon.png" alt="" /></div>
                    <div><img src="/assets/calenderIcon.png" alt="" /></div>
                    <div><img src="/assets/editIcon.png" alt="" /></div>
                    <div><img src="/assets/dropdownIcon.png" alt="" /></div>
                </div>

                <div className='d-flex kanban-card-add-menu align-items-center mt-4 mb-2'>
                    <div className='first'>AT</div>
                    <div className='second'>WE</div>
                    <div className='third'>GK</div>
                    <div><img src="/assets/PlusIcon.png" alt="" /></div>
                </div>
            </div>
        )
    }

    return (
        <div className='special-page-container'>

            <div className='d-flex justify-content-between special-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h2>Hello Devs !</h2>
                    <p>We are on a mission to help developers like you to build beautiful projects for FREE.</p>
                </div>
                <div>
                    <button>
                        <img src="/assets/VoiceIcon.png" alt="" />
                        Announcments
                    </button>
                </div>
            </div>

            <div className='kanaban-searchbar d-flex justify-content-between m-2 px-4 mx-4 py-3'>
                <div>
                    <img src="/assets/Filter.png" alt="" />
                    <input className='mx-2' type="text" placeholder='Filter By Task Name...' />
                </div>

                <div className='d-flex gap-3'>
                    {/* <img src="" alt="" /> */}

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by:
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <span>Group by:</span>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by:
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/assets/Send.png" alt="" className='px-2' />
                            Share:
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='kanban-body row m-0 p-3'>
                <div className='col-md-3 gap-4 d-flex flex-column'>
                    <div className='kanban-heading d-flex p-3 justify-content-between'>
                        <p className='kanban-open-projects'>Open Projects  05</p>
                        <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <div className='kanban-new-task d-flex p-3 justify-content-between align-items-center'>
                        <p>New Task</p>
                        <img src="/assets/PlusIcon.png" alt="" />
                    </div>

                    {card("Create Sidebar in Dashboard")}
                    {card("General Improvement in Landing pages")}
                    {card("Product List view Changes")}
                    {card("Add Multiple theme options")}
                </div>

                <div className='col-md-3 gap-4 d-flex flex-column'>
                    <div className='kanban-heading d-flex p-3 justify-content-between'>
                        <p className='kanban-progress-projects'>In Progress  02</p>
                        <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <div className='kanban-new-task d-flex p-3 justify-content-between align-items-center'>
                        <p>New Task</p>
                        <img src="/assets/PlusIcon.png" alt="" />
                    </div>

                    {card('Notification Module Setting')}
                    {card('Admin Panel Customization')}
                </div>

                <div className='col-md-3 gap-4 d-flex flex-column'>
                    <div className='kanban-heading d-flex p-3 justify-content-between'>
                        <p className='kanban-reviews-projects'>Reviews  01</p>
                        <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <div className='kanban-new-task d-flex p-3 justify-content-between align-items-center'>
                        <p>New Task</p>
                        <img src="/assets/PlusIcon.png" alt="" />
                    </div>

                    {card('Sidebar in Dashboard Themes')}
                </div>

                <div className='col-md-3 gap-4 d-flex flex-column'>
                    <div className='kanban-heading d-flex p-3 justify-content-between'>
                        <p className='kanban-closed-projects'>Closed  03</p>
                        <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <div className='kanban-new-task d-flex p-3 justify-content-between align-items-center'>
                        <p>New Task</p>
                        <img src="/assets/PlusIcon.png" alt="" />
                    </div>

                    {card('Login screen update in mobile app')}
                    {card('Login screen update in mobile app')}
                    {card('Helpdesk in Dashboard Themes')}
                </div>
            </div>
        </div>
    )
}

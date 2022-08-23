import React ,{useState} from 'react'
import '../WidgetCard/WidgetCard.css';
import { Rating } from 'react-simple-star-rating'




export default function WidgetCard() {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
      setRating(rate)
    }
    return (
        <>
            <div className='widget-card-container'>

                <div className='d-flex justify-content-between widget-card-heading py-5 px-4'>
                    <div className='d-flex flex-column'>
                        <h2>Hello Devs !</h2>
                        <p>We are on a mission to help developers like you to build beautiful projects for free.</p>
                    </div>
                    <div>
                        <button>
                            <img src="/assets/VoiceIcon.png" alt="" />
                            Announcments
                        </button>
                    </div>
                </div>
                <div className="row widget-card p-3">
                    <div className="widget-card widget-card-body col-md-4">
                        <div className='widget-card-body-first'>
                        <p className='birthday-name text-centerga'>Regina Miles</p>
                            <p className='Regina-para2'>Trainer Expert</p>
                            {/* <div className='star '>
                                <img src="..\assets\Star 6.png" alt="" />
                                <img src="..\assets\Star 6.png" alt="" />
                                <img src="..\assets\Star 6.png" alt="" />
                                <img src="..\assets\Star 9.png" alt="" />
                                <img src="..\assets\Star 9.png" alt="" />
                            </div> */}
                              <Rating size={25} onClick={handleRating} ratingValue={rating} />
                        </div>
                        <div className="widget-card-body-second">
                            <img src="..\assets\beared-guy.png" alt="" />
                        </div>
                        <div className="widget-card-body-third">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                            <div className='beared-icons'>
                                <img src="..\assets\Video.png" alt="" />
                                <img src="..\assets\Calendar.png" alt="" />
                                <img src="..\assets\Frame 36170.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="widget-card-body col-md-4">
                        <div className='row d-flex mb-4'>
                            <div className="col-md-3">
                                <img src="..\assets\Orion_reload 1.png" alt="" />
                            </div>
                            <div className="col-md-6">
                            <p className='birthday-name text-start'>Conversion</p>
                            </div>
                            <div className="col-md-3">
                                <img src="..\assets\bedrock-dot.png" alt="" />
                            </div>

                        </div>



                        <div className='conversion-input '>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control conversion-form" placeholder="1000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary conversion-button" type="button">GRD</button>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control conversion-form" placeholder="100" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary conversion-button" type="button">USD</button>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control conversion-form" placeholder="150" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary conversion-button" type="button">Euro</button>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary w-100 button-background">Archivel</button>
                        </div>
                    </div>
                    <div className="widget-card-body col-md-4">
                        <div className='row mb-3'>
                            <div className="col-md-9 holiday">
                                <div className="row"><p className='birthday-name text-start'>59</p></div>
                                <div className="row"><p className='birthday-name text-start'>Holidays</p></div>
                           
                            </div>
                            <div className="col-md-3 holiday-smile">
                                <img src="..\assets\Frame 35623.png" alt="" />
                            </div>

                        </div>

                        <div className="row mb-2">
                            <div className="col-md-4 cone">
                                <img src="..\assets\Cone-min.png" alt="" />
                            </div>
                            <div className="col-md-8 cone-para w-80 ">
                                <p >Web workshop</p>
                                <p >1 hour ago</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 holiday-para3 w-100 ">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi?</p>
                            </div>
                        </div>
                        <div className="row holiday-para3 ">

                            <p>-Agens Reppligers</p>
                            <p>-Managements</p>
                            <p>-Creative Sprint</p>


                        </div>


                    </div>
                </div>

                <div className="row widget-card p-4">
                    <div className="widget-card2-body col-md-4 admin-id-card1 birthday-img">
                        <div className='row birthday-img '>
                            <div className='row mb-3'><p className='birthday-name text-start'>Upcoming Birthday</p></div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515.png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Anna Mull</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (1).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jacob Jones</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (2).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jenny Wilson</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515.png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Leslie Alexander</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="widget-card2-body col-md-5 admin-id-card2">
                        <div className="row">
                            <div className="col-md-3 icoSpher-img">
                                <img src="..\assets\IcoSphere-min.png" alt="" />
                            </div>
                            <div className="col-md-5">
                            <p className='birthday-name text-start'>Wade Warren</p>
                            <p className='birthday-date text-start'>6 hour ago</p>
                            </div>
                        </div>
                        <div className="row twitter-para">
                        <p className='text-start holiday-para3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure animi consequatur libero beatae! Saepe magni eligendi, numquam deserunt recusandae qui facere, fugit laudantium dolores voluptate doloribus debitis eum pariatur!</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="..\assets\Frame 35516.png" alt="" />
                                        <p className='d-inline'>Like</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="..\assets\Rectangle 608.png" alt="" />
                                        <p className='d-inline'>140</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="..\assets\Frame 33861.png" alt="" />
                                <p className='d-inline'>99 Share</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row d-flex align-content-left mb-2">
                            <div className="col-md-2 sphere-img">
                                <img src="..\assets\Sphere-min.png" alt="" />
                            </div>
                            <div className="col-md-10">
                                <p className='text-start'>Paul Molive</p>
                                <p className=' wade-para text-start holiday-para3'>Lorem ipsum dolor sit amet, consectetur elit.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"placeholder='Recipient’s Username' />

                            </div>
                        </div>
                    </div>
                    <div className="widget-card2-body col-md-3 admin-id-card3">
                        <div className='row birthday-img'>
                            <div><p className='Regina-para1 mb-3 text-start'>Stories</p></div>
                            <div className='row d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515.png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Anna Mull</p>
                                    <p className='birthday-date'>1 hour ago</p>
                                </div>
                            </div>
                            <div className='row d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (1).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jacob Jones</p>
                                    <p className='birthday-date'>4 hour ago</p>
                                </div>
                            </div>
                            <div className='row d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (2).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jenny Wilson</p>
                                    <p className='birthday-date'>9 hour ago</p>
                                </div>
                            </div>


                            <button type="button" className="btn btn-primary w-100 button-background">See All</button>
                        </div>

                    </div>


                </div>
                <div className="row widget-card p-4">
                    <div className="widget-card2-body col-md-4 gallery-row-card1">
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <p className='birthday-name text-start'>Gallery</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p className='birthday-date text-end'>132 pics</p>
                            </div>
                        </div>
                        <div className="row d-flex mb-5">
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35676.png" alt="" />
                            </div>
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35677.png" alt="" />
                            </div>
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35678.png" alt="" />
                            </div>
                        </div>
                        <div className="row d-flex mb-5">
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35679 (1).png" alt="" />
                            </div>
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35680.png" alt="" />
                            </div>
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35681.png" alt="" />
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35677.png" alt="" />
                            </div>
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35679 (1).png" alt="" />
                            </div>
                            <div className="col-md-4 shape-img">
                                <img src="..\assets\Frame 35678.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="widget-card2-body col-md-4 gallery-row-card2">
                        <div className="row mb-4">
                            <p className='birthday-name text-start'>Twitter feed</p>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 twitter-img">
                                <img src="..\assets\Frame 35522555.png" alt="" />
                            </div>
                            <div className="col-md-9">
                                <p className='Suggestion-name text-start'>Jane Cooper</p>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className='mutual-friends text-start'>@jane59</p>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="..\assets\Orion_checkmark 1.png" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row twitter-para mb-2">
                            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="row mb-2">
                            <p className='hash-para text-start'>#Html #Bootstrp</p>
                        </div>
                        <div className="row">
                            <p className='text-start mutual-friends'>07 Jan 2020</p>
                        </div>
                        <hr />

                        <div className="row mb-2">
                            <div className="col-md-3 twitter-img">
                                <img src="..\assets\Frame 35522525.png" alt="" />
                            </div>
                            <div className="col-md-9">
                                <p className='Suggestion-name text-start'>Jane Cooper</p>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className='mutual-friends text-start'>@jane59</p>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="..\assets\Orion_checkmark 1.png" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row twitter-para mb-2">
                            <p className='text-start holiday-para3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="row mb-2">
                            <p className='hash-para text-start'>#Html #Bootstrp</p>
                        </div>
                        <div className="row">
                            <p className='text-start mutual-friends'>07 Jan 2020</p>
                        </div>
                        <hr />

                    </div>


                    <div className="widget-card2-body col-md-4 gallery-row-card3">
                        <div className="row mb-4">
                            <p className='birthday-name text-start'>Suggestions</p>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3">
                                <img src="..\assets\Frame 355252 (2).png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <p className='Suggestion-name text-start'>Paul Molive</p>
                                <p className='mutual-friends text-start'>4 mutual friends</p>
                            </div>
                            <div className="col-md-2">
                                <img src="..\assets\Frame 35550.png" alt="" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3">
                                <img src="..\assets\Frame 355252 (1).png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <p className='Suggestion-name text-start'>Robert Fox</p>
                                <p className='mutual-friends text-start'>4 mutual friends</p>
                            </div>
                            <div className="col-md-2">
                                <img src="..\assets\Frame 35550.png" alt="" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3">
                                <img src="..\assets\Frame 35522.png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <p className='Suggestion-name text-start'>Jenny Wilson</p>
                                <p className='mutual-friends text-start'>4 mutual friends</p>
                            </div>
                            <div className="col-md-2">
                                <img src="..\assets\Frame 35550.png" alt="" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3">
                                <img src="..\assets\Frame 355255.png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <p className='Suggestion-name text-start'>Cody Fisher</p>
                                <p className='mutual-friends text-start'>4 mutual friends</p>
                            </div>
                            <div className="col-md-2">
                                <img src="..\assets\Frame 35550.png" alt="" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3">
                                <img src="..\assets\Frame 35522 (1).png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <p className='Suggestion-name text-start'>Bessie Cooper</p>
                                <p className='mutual-friends text-start'>4 mutual friends</p>
                            </div>
                            <div className="col-md-2">
                                <img src="..\assets\Frame 35550.png" alt="" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3">
                                <img src="..\assets\Frame 35522 (2).png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <p className='Suggestion-name text-start'>Wade Warren</p>
                                <p className='mutual-friends text-start'>4 mutual friends</p>
                            </div>
                            <div className="col-md-2">
                                <img src="..\assets\Frame 35550.png" alt="" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-3">
                                <img src="..\assets\Frame 35522 (3).png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <p className='Suggestion-name text-start'>Guy Hawkins</p>
                                <p className='mutual-friends text-start'>4 mutual friends</p>
                            </div>
                            <div className="col-md-2">
                                <img src="..\assets\Frame 35550.png" alt="" />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

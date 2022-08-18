import React from "react";
import "./WidgetBasic.css";
import Progressbar from "../../common/Progress_bar";

export default function Widget() {
  return (
    <div className="widget-basic-page-container">
      <div className="d-flex justify-content-between widget-basic-page-heading py-5 px-4">
        <div className="d-flex flex-column">
          <h2>Hello Devs !</h2>
          <p>
            We are on a mission to help developers like you to build beautiful
            projects for FREE.
          </p>
        </div>
        <div>
          <button>
            <img src="/assets/VoiceIcon.png" alt="" />
            Announcments
          </button>
        </div>
      </div>

      <div className="row widget-card p-3">
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Impressions
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img className="arrowpicture1" src="/assets/Arrow - Up Square.png" alt="" />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#C03221" progress="70" height={10} />
          </div>
        </div>

        {/* <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Engaments Rate
            </p>
            <div className="d-flex justify-content-between ">
            <h4>2.648</h4>
            <img src="/assets/arrow1.png" alt=""/>
            <p className="widget-para  d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar
              bgcolor="#C03221"
              height={10}
            />
            </div>
            
          </div>
        </div> */}

        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Engaments Rate
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img className="arrowpicture" src="/assets/arrow1.png" alt="" />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#068B92" progress="70" height={10} />
          </div>
        </div>

        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Engaments Rate
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img className="arrowpicture" src="/assets/arrow1.png" alt="" />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#17904B" progress="70" height={10} />
          </div>
        </div>
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Engaments Rate
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img className="arrowpicture" src="/assets/arrow1.png" alt="" />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#344ED1" progress="70" height={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

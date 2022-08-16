import React from "react";
import "../Bedrock-ai/Ai.css";

function Ai() {
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
                    <div className="col-md-6">
                      <div className="bedrock-image">
                        <img
                          src="/assets/beared-guy.png"
                          alt="bearedguy"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="bedrock-content">
                        <p className="lead">
                          Upload<span>- Admin</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="kanaban-searchbar bedrock-searchbar d-flex justify-content-between m-2 px-4 mx-3 py-3">
          <div>
            <img src="/assets/Filter.png" alt="" />
            <input
              className="mx-2"
              type="text"
              placeholder="Filter By Task Name..."
            />
          </div>

          <div className="d-flex gap-3">
            {/* <img src="" alt="" /> */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="/assets/Send.png" alt="" className="px-2" />
                Invite to task portal
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="kanban-new-task d-flex p-3 justify-content-between align-items-center">
                <p>New Task</p>
                <img src="/assets/PlusIcon.png" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="kanban-new-task d-flex p-3 justify-content-between align-items-center">
                <p>New Task</p>
                <img src="/assets/PlusIcon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="aiDemo">
              <div className="kanban-heading d-flex p-3 justify-content-between">
                <p className="kanban-open-projects">Demo NDA Document.docx</p>
                <img src="/assets/menuDots.png" alt="" />
              </div>
            </div>
            <div className="aiDemo">
              <div className="kanban-heading d-flex p-3 justify-content-between">
                <p className="kanban-open-projects">
                  Shares Purchase Agreement.pdf
                </p>
                <img src="/assets/menuDots.png" alt="" />
              </div>
            </div>
            <div className="aiDemo">
              <div className="kanban-heading d-flex p-3 justify-content-between">
                <p className="kanban-open-projects">Shareholder Captable.xls</p>
                <img src="/assets/menuDots.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="kanban-card p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <nav
                        className="breadcrumb-container"
                        aria-label="breadcrumb"
                      >
                        <ol className="breadcrumb m-0 p-0">
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            [BED15]
                          </li>
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            List
                          </li>
                        </ol>
                      </nav>
                      <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <p className="mt-3">
                      Download .docx file, edit name and date, save and export
                      file as .pdf, upload .pdf file to cloud.{" "}
                    </p>

                    <div className="d-flex kanban-card-icons align-items-center gap-2 my-3">
                      <div>
                        <img src="/assets/flagIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/calenderIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/editIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/dropdownIcon.png" alt="" />
                      </div>
                    </div>

                    <div className="d-flex kanban-card-add-menu align-items-center mt-4 mb-2">
                      <div className="first">AT</div>
                      <div className="second">WE</div>
                      <div className="third">GK</div>
                      <div>
                        <img src="/assets/PlusIcon.png" alt="" />
                      </div>
                    </div>
                    <div className="karbon-button">
                      <button className="btn">Call</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="kanban-card p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <nav
                        className="breadcrumb-container"
                        aria-label="breadcrumb"
                      >
                        <ol className="breadcrumb m-0 p-0">
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            Dashboard plan
                          </li>
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            List
                          </li>
                        </ol>
                      </nav>
                      <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <p className="mt-3">
                      {" "}
                      Notify me everytime over <strong> [2.5%] </strong>worth of
                      shares in SpaceX are transferred
                    </p>

                    <div className="d-flex kanban-card-icons align-items-center gap-2 my-3">
                      <div>
                        <img src="/assets/flagIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/calenderIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/editIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/dropdownIcon.png" alt="" />
                      </div>
                    </div>

                    <div className="d-flex kanban-card-add-menu align-items-center mt-4 mb-2">
                      <div className="first">AT</div>
                      <div className="second">WE</div>
                      <div className="third">GK</div>
                      <div>
                        <img src="/assets/PlusIcon.png" alt="" />
                      </div>
                    </div>
                    <div className="karbon-button">
                      <button className="btn">Call</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="kanban-card p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <nav
                        className="breadcrumb-container"
                        aria-label="breadcrumb"
                      >
                        <ol className="breadcrumb m-0 p-0">
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            API
                          </li>
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            List
                          </li>
                        </ol>
                      </nav>
                      <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <p className="mt-3">
                      Send an email to <strong>[Priority Seller List]</strong>{" "}
                      asking if they have any sellers willing to sell{" "}
                      <strong>[Company Name]</strong> for less than{" "}
                      <strong>[Share Price]</strong>
                    </p>

                    <div className="d-flex kanban-card-icons align-items-center gap-2 my-3">
                      <div>
                        <img src="/assets/flagIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/calenderIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/editIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/dropdownIcon.png" alt="" />
                      </div>
                    </div>

                    <div className="d-flex kanban-card-add-menu align-items-center mt-4 mb-2">
                      <div className="first">AT</div>
                      <div className="second">WE</div>
                      <div className="third">GK</div>
                      <div>
                        <img src="/assets/PlusIcon.png" alt="" />
                      </div>
                    </div>
                    <div className="karbon-button">
                      <button className="btn">Call</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-11 mt-5">
                  <div className="kanban-card p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <nav
                        className="breadcrumb-container"
                        aria-label="breadcrumb"
                      >
                        <ol className="breadcrumb m-0 p-0">
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            Dashboard plan
                          </li>
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            List
                          </li>
                        </ol>
                      </nav>
                      <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <p className="mt-3">
                      Send individual emails to{" "}
                      <strong>[Priority Contact List]</strong> telling them I’m
                      looking to sell <strong>[10%]</strong> of all{" "}
                      <strong>[Company name]</strong>
                      shares
                    </p>

                    <div className="d-flex kanban-card-icons align-items-center gap-2 my-3">
                      <div>
                        <img src="/assets/flagIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/calenderIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/editIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/dropdownIcon.png" alt="" />
                      </div>
                    </div>

                    <div className="d-flex kanban-card-add-menu align-items-center mt-4 mb-2">
                      <div className="first">AT</div>
                      <div className="second">WE</div>
                      <div className="third">GK</div>
                      <div>
                        <img src="/assets/PlusIcon.png" alt="" />
                      </div>
                    </div>
                    <div className="karbon-button">
                      <button className="btn">Call</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 mt-5">
                  <div className="kanban-card p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <nav
                        className="breadcrumb-container"
                        aria-label="breadcrumb"
                      >
                        <ol className="breadcrumb m-0 p-0">
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            Dashboard plan
                          </li>
                          <li
                            className="breadcrumb-item active breadcrumb-item-css"
                            aria-current="page"
                          >
                            List
                          </li>
                        </ol>
                      </nav>
                      <img src="/assets/menuDots.png" alt="" />
                    </div>

                    <p className="mt-3">
                      Aggregate this week’s largest secondary market
                      transactions and export it to an XLS file.
                    </p>

                    <div className="d-flex kanban-card-icons align-items-center gap-2 my-3">
                      <div>
                        <img src="/assets/flagIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/calenderIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/editIcon.png" alt="" />
                      </div>
                      <div>
                        <img src="/assets/dropdownIcon.png" alt="" />
                      </div>
                    </div>

                    <div className="d-flex kanban-card-add-menu align-items-center mt-4 mb-2">
                      <div className="first">AT</div>
                      <div className="second">WE</div>
                      <div className="third">GK</div>
                      <div>
                        <img src="/assets/PlusIcon.png" alt="" />
                      </div>
                    </div>
                    <div className="karbon-button">
                      <button className="btn">Call</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai;

import React, { useEffect, useState } from 'react'
import './RunningJob(Home).css'

const RunningJob = ({ percentage, Error }) => {

    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (Error || percentage < 0 || percentage > 100 || isNaN(percentage)) {
            setHasError(false);
        } else {
            setHasError(true);
        }
    }, [Error, percentage]);


    return (


        <div className="container-runningjob">
            <div className="box-runningjob">

                <div className="box-content-runningjob">
                    <div className="hub-details-runningjob">

                        <p className="hub-name-runningJob">Hub Name</p>
                        <p className="hub-subtext-runningjob">Kerala Hostel, Kochi</p>

                    </div>

                    <div className="machine-details-runningjob">
                        <p className="machine-name-runningjob">Machine Name</p>
                        <p className="machine-subtext-runningjob">#123456</p>
                    </div>

                    <div className="Time">
                        <p className="End-Time">End Time</p>
                        <p className="machine-subtext">10:30 am</p>
                    </div>
                </div>

                <div className="loader-container">
                    {hasError ? (
                        <div className="error-circle">
                            <div className="error-message">Stopped!</div>
                        </div>
                    ) : (
                        <div className="circular-progress">
                            <svg className="progress-svg" viewBox="0 0 100 100">
                                <circle
                                    className="progress-background"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                />
                                <circle
                                    className="progress-bar"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    style={{ strokeDashoffset: 282.6 - (282.6 * 50) / 100 }}
                                />
                            </svg>
                            <div className="progress-percentage">{50}%</div>
                        </div>
                    )}
                </div>

            </div>


            <div className="box-runningjob">

                <div className="box-content-runningjob">
                    <div className="hub-details-runningjob">

                        <p className="hub-name-runningJob">Hub Name</p>
                        <p className="hub-subtext-runningjob">Kerala Hostel, Kochi</p>

                    </div>

                    <div className="machine-details-runningjob">
                        <p className="machine-name-runningjob">Machine Name</p>
                        <p className="machine-subtext-runningjob">#123456</p>
                    </div>

                    <div className="Time">
                        <p className="End-Time">End Time</p>
                        <p className="machine-subtext">10:30 am</p>
                    </div>
                </div>


                <div className="loader-container">
                    {hasError ? (
                        <div className="error-circle">
                            <div className="error-message">Stopped!</div>
                        </div>
                    ) : (
                        <div className="circular-progress">
                            <svg className="progress-svg" viewBox="0 0 100 100">
                                <circle
                                    className="progress-background"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                />
                                <circle
                                    className="progress-bar"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    style={{ strokeDashoffset: 282.6 - (282.6 * 86) / 100 }}
                                />
                            </svg>
                            <div className="progress-percentage">{86}%</div>
                        </div>
                    )}
                </div>

            </div>


        </div>
    )
}

export default RunningJob

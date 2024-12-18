import React, { useEffect, useState } from 'react'
import './RunningJob.css'
import SideMenu from '../components/SideMenu'

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
        <div>
            <SideMenu />
          
            <div className="container-jobs">
            <div className="box-jobs">

            <div className="box-content-job">
            <div className="hub-details-job">

                <p className="hub-name-job">Hub Name</p>
                <p className="hub-subtext-job">Kerala Hostel, Kochi</p>

            </div>

            <div className="machine-details-job">
                <p className="machine-name-job">Machine Name</p>
                <p className="machine-subtext-job">#123456</p>
            </div>

            <div className="Time-job">
                <p className="End-Time-job">End Time</p>
                <p className="Time-subtext-job">10:30 am</p>
            </div>
        </div>

        <div className="loader-container-job">
            {hasError ? (
                <div className="error-circle-job">
                    <div className="error-message-job">Stopped!</div>
                </div>
            ) : (
                <div className="circular-progress-job">
                    <svg className="progress-svg-job" viewBox="0 0 100 100">
                        <circle
                            className="progress-background-job"
                            cx="50"
                            cy="50"
                            r="45"
                        />
                        <circle
                            className="progress-bar-job"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ strokeDashoffset: 282.6 - (282.6 * 75) / 100 }}
                        />
                    </svg>
                    <div className="progress-percentage-job">{75}%</div>
                </div>
            )}
        </div>
       
       
            
            </div>
            <div className="box-jobs">
            
            <div className="box-content-job">
            <div className="hub-details-job">

                <p className="hub-name-job">Hub Name</p>
                <p className="hub-subtext-job">Kerala Hostel, Kochi</p>

            </div>

            <div className="machine-details-job">
                <p className="machine-name-job">Machine Name</p>
                <p className="machine-subtext-job">#123456</p>
            </div>

            <div className="Time-job">
                <p className="End-Time-job">End Time</p>
                <p className="Time-subtext-job">10:30 am</p>
            </div>
        </div>

        <div className="loader-container-job">
            {hasError ? (
                <div className="error-circle-job">
                    <div className="error-message-job">Stopped!</div>
                </div>
            ) : (
                <div className="circular-progress-job">
                    <svg className="progress-svg-job" viewBox="0 0 100 100">
                        <circle
                            className="progress-background-job"
                            cx="50"
                            cy="50"
                            r="45"
                        />
                        <circle
                            className="progress-bar-job"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ strokeDashoffset: 282.6 - (282.6 * 51) / 100 }}
                        />
                    </svg>
                    <div className="progress-percentage-job">{51}%</div>
                </div>
            )}
            </div>
            
            
            </div>


            <div className="box-jobs">
            
               <div className="box-content-job">
            <div className="hub-details-job">

                <p className="hub-name-job">Hub Name</p>
                <p className="hub-subtext-job">Kerala Hostel, Kochi</p>

            </div>

            <div className="machine-details-job">
                <p className="machine-name-job">Machine Name</p>
                <p className="machine-subtext-job">#123456</p>
            </div>

            <div className="Time-job">
                <p className="End-Time-job">End Time</p>
                <p className="Time-subtext-job">10:30 am</p>
            </div>
        </div>

        <div className="loader-container-job">
            {hasError ? (
                <div className="error-circle-job">
                    <div className="error-message-job">Stopped!</div>
                </div>
            ) : (
                <div className="circular-progress-job">
                    <svg className="progress-svg-job" viewBox="0 0 100 100">
                        <circle
                            className="progress-background-job"
                            cx="50"
                            cy="50"
                            r="45"
                        />
                        <circle
                            className="progress-bar-job"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ strokeDashoffset: 282.6 - (282.6 * 36) / 100 }}
                        />
                    </svg>
                    <div className="progress-percentage-job">{36}%</div>
                </div>
            )}
            </div>
            
            
            </div>
            <div className="box-jobs">
            
            <div className="box-content-job">
            <div className="hub-details-job">

                <p className="hub-name-job">Hub Name</p>
                <p className="hub-subtext-job">Kerala Hostel, Kochi</p>

            </div>

            <div className="machine-details-job">
                <p className="machine-name-job">Machine Name</p>
                <p className="machine-subtext-job">#123456</p>
            </div>

            <div className="Time-job">
                <p className="End-Time-job">End Time</p>
                <p className="Time-subtext-job">10:30 am</p>
            </div>
        </div>

        <div className="loader-container-job">
            {hasError ? (
                <div className="error-circle-job">
                    <div className="error-message-job">Stopped!</div>
                </div>
            ) : (
                <div className="circular-progress-job">
                    <svg className="progress-svg-job" viewBox="0 0 100 100">
                        <circle
                            className="progress-background-job"
                            cx="50"
                            cy="50"
                            r="45"
                        />
                        <circle
                            className="progress-bar-job"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ strokeDashoffset: 282.6 - (282.6 * 86) / 100 }}
                        />
                    </svg>
                    <div className="progress-percentage-job">{86}%</div>
                </div>
            )}
            </div>
            
            
            
            </div>
         
           
           
            
          </div>  


            

        </div>
    )
}

export default RunningJob

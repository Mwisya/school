import React from 'react'
// import {TbBuildingCastle} from 'react-icons/tb'
import './schoolInspectionService.css'

const SchoolInspectionService = () => {
    return (
        <div className='schoolinspection-report-container flex-c'>
        <div className='schoolinspection-report-wrapper'>

            <div className='schoolinspection-report-header'>
                <span>SIS Inspection Report</span>
                {/* <TbBuildingCastle/> */}
            </div>
            <p className='schoolinspection-report'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur eveniet ipsa iste itaque, exercitationem soluta officia, ut aliquid dignissimos est vel quisquam rem, repellat molestias amet laudantium assumenda magni. Quia animi labore eveniet quaerat officia qui magni deleniti natus dignissimos neque ex quisquam cupiditate quo, obcaecati tenetur blanditiis nobis vitae voluptates molestias architecto, quas facere provident eius porro? Cumque architecto quibusdam ipsum voluptatibus obcaecati velit, maxime ipsa culpa at! Voluptatem excepturi at beatae porro alias reprehenderit veniam sapiente cumque nesciunt ullam accusantium aliquam optio distinctio impedit et inse nam consectetur quod ratione! Veritatis, doloremque. Odit ducimus iste eum facilis molestias quisquam a perspiciatis? Laborum suscipit maiores facilis voluptates nemo necessitatibus enim hic, animi vero culpa neque ! Ipsum ipsa beatae delectus libero iusto fuga quam corrupti et voluptatem. Non ipsum quidem, reiciendis beatae repellat maiores corporis possimus ut atque assumenda incidunt earum tempora aut illo iusto facilis velit labore vero eaque dolorum asperiores.</p>
            <button disabled="disabled" className='download-btn'>Download Report</button>
        </div>
        </div>
    )
}

export default SchoolInspectionService

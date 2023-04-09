import React from "react";
import texts from "../htmlTextsEnglish";
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';



function Education(props) {

	function isEducation(section) {
        return section.component === "Skills" && (section.idiom === "any" || section.idiom === props.idiom);
    }
    
	const educ = texts.filter(isEducation);


    return (
        <div>

		{educ[0].content[1]}



		<div className=" row">
			<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{educ[1].content[1]}
					</div>
					<div className="mdc-card__content">
						{educ[2].content[1]}
						{educ[2].content[2]}
						{educ[2].content[3]}
						{educ[2].content[4]}
					</div>
				</div>
			</div>
			<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{educ[3].content[1]}
					</div>
					<div className="mdc-card__content">
						{educ[4].content[1]}
						{educ[4].content[2]}
						{educ[4].content[3]}
						{educ[4].content[4]}
					</div>
				</div>
				</div>
				<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{educ[7].content[1]}
					</div>
					<div className="mdc-card__content">
						{educ[8].content[4]}
						{educ[8].content[2]}
						{educ[8].content[1]}
						{educ[8].content[3]}

					</div>
				</div>
			</div>
			<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{educ[5].content[1]}	
					</div>
					<div className="mdc-card__content">
						{educ[6].content[1]}
						{educ[6].content[2]}
						{educ[6].content[3]}
						{educ[6].content[4]}					
					</div>
				</div>
			</div>


		</div>

   
    	</div>
    );
}

export default Education;
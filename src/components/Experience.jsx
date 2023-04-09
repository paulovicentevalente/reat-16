import React from "react";
import Divider from '@mui/material/Divider';
import { TextsmsTwoTone } from "@mui/icons-material";
import texts from "../htmlTextsEnglish";

function Experience(props) {

    function isExperience(section) {
        return section.component === "Experience" && (section.idiom === "any" || section.idiom === props.idiom);
    }
    const title = texts.filter(isExperience);

    return (
        <div >
			<div className="row">
                <div className="experience-box col-lg-3">
                    {title[0].content[1]}
                </div>
                <div className="experience-box col-lg-9">
                <h4></h4>
                </div>

            </div>
            <div className="row">
                <Divider />
            </div>
            {/* Increase numbering every time a new experience is inserted. Experience must be inserted in the order that it will appear. */}
            <div className="row">
                <div className="col-lg-3">
                    {title[25].content[1]}
                    {title[26].content[1]}
                    {title[27].content[1]}
                </div>
                <div className="col-lg-9">
                    {title[28].content[1]}
                </div>
            </div>
            <div className="row">
                <Divider />
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {title[1].content[1]}
                    {title[2].content[1]}
                    {title[3].content[1]}
                </div>
                <div className="col-lg-9">
                    {title[4].content[1]}
                </div>
            </div>
            <div className="row">
                <Divider />
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {title[29].content[1]}
                    {title[30].content[1]}
                    {title[31].content[1]}
                </div>
                <div className="col-lg-9">
                    {title[32].content[1]}
                </div>
            </div>
            <div className="row">
                <Divider />
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {title[33].content[1]}
                    {title[34].content[1]}
                    {title[35].content[1]}
                </div>
                <div className="col-lg-9">
                    {title[36].content[1]}
                </div>
            </div>
            <div className="row">
                <Divider />
            </div>
            <div className="row">
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {title[5].content[1]}
                    {title[6].content[1]}
                    {title[7].content[1]}
                    {title[7].content[2]}
                    {title[7].content[3]}
                    {title[7].content[4]}
                </div>
                <div className="col-lg-9">

                    {title[8].content[1]}
                    {title[8].content[2]}

                    <p></p>
                    {title[8].content[3]}
                    {title[8].content[4]}
                </div>
            </div>
            <div className="row">
                <Divider />
            </div>
            
            <div className="row">
            </div>


            <div className="row">
                <div className="col-lg-3">
                    {title[9].content[1]}
                    {title[10].content[1]}
                    {title[11].content[1]}
                </div>
                <div className="col-lg-9">
                {title[12].content[1]}
                </div>
            </div>
            <div className="row">
            </div>
            <div className="row">
                <Divider />
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {title[13].content[1]}
                    {title[14].content[1]}
                    {title[15].content[1]}
                </div>
                <div className="col-lg-9">
                    {title[16].content[1]}
                </div>
            </div>
            <div className="row">
                <Divider />
            </div>
            <div className="row">
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {title[17].content[1]}
                    {title[18].content[1]}
                    {title[19].content[1]}
                </div>
                <div className="col-lg-9">
                    {title[20].content[1]}
                </div>
            </div>
            <div className="row">
                <Divider />
            </div>
            <div className="row">
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {title[21].content[1]}
                    {title[22].content[1]}
                    {title[23].content[1]}
                </div>
                <div className="col-lg-9">
                    {title[24].content[1]}
                </div>
            </div>

        </div>

   

    );
}

export default Experience;
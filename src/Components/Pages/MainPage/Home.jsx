import React from "react";
import Banner_Section from "../Sections/Banner_Section/Banner_Section";
import About_Me_Section from "../Sections/About_Me_Section/About_Me_Section";
import Qualification_Section from "../Sections/Qualification_Section/Qualification_Section";
import Skill_Section from "../Sections/Skill_Section/Skill_Section";
import Certificate_Section from "../Sections/Certificate_Section/Certificate_Section";
import Project_Section from "../Sections/Project_Section/Project_Section";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
           
            <Banner_Section />
            <About_Me_Section></About_Me_Section>
            <Qualification_Section></Qualification_Section>
            <Skill_Section></Skill_Section>
            <Certificate_Section></Certificate_Section>
            <Project_Section></Project_Section>

        </div>
    );
}
export default Home;
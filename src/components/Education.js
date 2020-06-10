import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`

const Heading = styled.div`
h3 {
    margin: 0px;
}
`

const College = styled.div`
display: flex;
flex-direction: column;
`

const CollegeHeader = styled.div`
`
const Description = styled.div``

const Name = styled.div`
display: inline-block;
`

const Location = styled.div`
display: inline-block;
`

const Date = styled.div`
display: inline-block;
float: right;
`

const Degree = styled.div`
display: inline-block;
`

const GPA = styled.div`
display: inline-block;
`

function Education(props) {
    console.log(props);

    var education = null;

    if(props.colleges){
        education = props.colleges.map( college => {

            return (
                <College key={college.name}>
                    <CollegeHeader>
                        <Name>{college.name},</Name>&nbsp;
                        <Location>{college.location}</Location>
                        <Date>{college.graduationDate}</Date>
                    </CollegeHeader>
                    <Description>
                        <Degree>{college.degree},</Degree>&nbsp;
                        <GPA>{college.gpa}</GPA>
                    </Description>
                </College>
            );

        });
    }


    
    return (
        <Layout>
            <Heading>
                <h3>Education</h3>
            </Heading>
            {education}
        </Layout>
    );
    
}

export default Education;
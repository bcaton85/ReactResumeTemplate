import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
`

const Heading = styled.div`
h3 {
    margin: 0px;
}

`

const Job = styled.div`
margin-top: 8px;
`

const JobHeader = styled.div`

`

const Company = styled.div`
display: inline-block;
h4 {
    margin-top: 0px;
    margin-bottom: 0px;
}
`

const Position = styled.div`
display: inline-block;
`

const Date = styled.div`
display: inline-block;
float: right;
`

const Bullets = styled.ul`
margin-top: 4px;
margin-bottom: 6px;
`
const Bullet = styled.li`
margin-bottom: 10px;
`


function Experience(props) {
    console.log(props);
    console.log(props.jobs);

    var experience = null;
    if(props.jobs){
        experience = props.jobs.map( job => {
            console.log(job);
            return (
                <Job key={job.company}>
                    <JobHeader>
                        <Company>
                                <h4>{job.company}</h4>
                        </Company>
                        <Date>
                            {job.date}
                        </Date>
                    </JobHeader>
                    <Position>
                            {job.position}
                        </Position>
                    <Bullets>
                        {getBullets(job.bullets)}
                    </Bullets>
                </Job>
            );
            
        });
    }

    function getBullets(bullets) {
        console.log(bullets);
        return bullets.map( bullet => {
            return (<Bullet key={bullet}>{bullet}</Bullet>)
        });
    }
    
    
    return (
        <Layout>
            <Heading>
                <h3>Experience</h3>
            </Heading>
            {experience}
        </Layout>
    );
}

export default Experience;
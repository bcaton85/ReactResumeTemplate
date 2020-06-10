import React, { useEffect, useState } from 'react';
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

const Header = styled.div`

`

const Name = styled.div`
display: inline-block;
`

const Date = styled.div`
display: inline-block;
float:right;
`

const Description = styled.div`

`

function Volunteer(props) {
    console.log(props);

    var volunteerWork = null;

    if(props.volunteerWork){
        volunteerWork = props.volunteerWork.map( work => {

            return (
                <>
                    <Header>
                        <Name>{work.name}</Name>
                        <Date>{work.date}</Date>
                    </Header>
                    <Description>
                        {work.description}
                    </Description>
                </>
                
            );

        });
    }


    
    return (
        <Layout>
            <Heading>
                <h3>Volunteer Work</h3>
            </Heading>
            {volunteerWork}
        </Layout>
    );
    
}

export default Volunteer;
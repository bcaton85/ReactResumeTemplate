import React from 'react';
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

const List = styled.ul`
margin-top: 2px;
margin-bottom: 0px;
`

function Technologies(props) {

    var technologies = null;

    if(props.technologies){
        technologies = props.technologies.map( technology => {
            return (<li> {technology} </li>);
        });
    }
    
    return (
        <Layout>
            <Heading>
                <h3>Technologies</h3>
            </Heading>
            <List>
                {technologies}
            </List>
        </Layout>
    );
    
}

export default Technologies;
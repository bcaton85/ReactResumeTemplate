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

function Frameworks(props) {

    var frameworks = null;

    if(props.frameworks){
        frameworks = props.frameworks.map( framework => {
            return (<li> {framework} </li>);
        });
    }
    
    return (
        <Layout>
            <Heading>
                <h3>Frameworks</h3>
            </Heading>
            <List>
                {frameworks}
            </List>
        </Layout>
    );
    
}

export default Frameworks;
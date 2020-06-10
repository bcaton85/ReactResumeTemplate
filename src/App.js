import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteer from './components/Volunteer';
import Languages from './components/Languages';
import Frameworks from './components/Frameworks';
import Technologies from './components/Technologies';
import Interests from './components/Interests';

const Layout = styled.div`
  display: flex;
  justify-content: center;
`

const Page = styled.div`
  size: letter portrait;
  border: solid black;
  height: 11in;
  width: 8.5in;

  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'header header'
    'leftnav rightnav';

    font-size: 1em;

`

const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  margin-top: 2%;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  width: 66%;

`

const LeftNav = styled.div`
  grid-area: leftnav;
  display: flex;
  flex-direction: column;

`

const RightNav = styled.div`
  grid-area:rightnav;
  display: flex;
  flex-direction: column;

`

const Name = styled.h1`
margin: 0px;
`

const Title = styled.h3`
margin: 0px;
`

const ContactInfo = styled.div`
display: flex;
flex-direction: column;
p {
  margin: 0px;
}
`
const ContactEntry = styled.div`
display: flex;
flex-direction: row;
`



function App() {
  const [fields, setFields] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:3001`)
      .then(res => res.json())
      .then(response => setFields(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <Layout>
      <Page>
      <Header>
        <Heading>
          <Name>{fields.header}</Name>
          <Title>{fields.subHeader}</Title>
        </Heading>
        <ContactInfo>
          <ContactEntry>
            <img style={{width:"17px",marginRight:"4%"}} src="https://img.icons8.com/ios/50/000000/important-mail.png"></img>
            <p>{fields.email}</p>
          </ContactEntry>
          <ContactEntry>
            <img style={{width:"17px",marginRight:"4%"}} src="https://img.icons8.com/wired/64/000000/domain.png"/>
            <p>{fields.website}</p>
          </ContactEntry>
        </ContactInfo>
      </Header>
      <LeftNav>
        <Languages languages={fields.languages}></Languages>
        <Frameworks frameworks={fields.frameworks}></Frameworks>
        <Technologies technologies={fields.technologies}></Technologies>
        <Interests interests={fields.interests}></Interests>
      </LeftNav>
      <RightNav>
        <Experience jobs={fields.experience}></Experience>
        <Education colleges={fields.education}></Education>
        <Volunteer volunteerWork={fields.volunteerWork}></Volunteer>
      </RightNav>
    </Page>
    </Layout>
  );
}

export default App;

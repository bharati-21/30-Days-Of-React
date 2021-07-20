import React from 'react';
import ReactDOM from 'react-dom';
import nestaImg from './images/Nesta.PNG';
import reactImg from './images/1280px-React-icon.svg.png';
import jsImg from './images/JavaScript-Logo.png';
import htmlImg from './images/HTML.svg';

// const headerStlyes = {backgroundColor: "aqua", padding: "1rem", color: "navy"};

// const mainStyles = {
//   padding: "1rem",
//   color: "#333",
//   backgroundColor: "#f4f4f4"
// }

// const footerStyles = {
//   padding: "1rem",
//   backgroundColor: "aqua",
//   textAlign: "center",
//   color: "navy",
// }

// const prerequisitesImgStyles = {
//   width: '150px'
// }

// const welcomeMessage = "Welcome to my Blog!";
// const subtitle = "Getting Started with ReactJS";
// const authorName = {
//   fName: 'Bharati',
//   lName: 'Subramanian'
// };

// const date = '20th July 2021';

// const currentYear = new Date().getFullYear();
// const birthYear = 2021;
// const authorAge = currentYear - birthYear;

// const prerequisites = ['HTML', 'CSS', 'JavaScript'];

// const header = (
//   <header style={headerStlyes}>
//     <h1>{welcomeMessage}</h1>
//     <h2>{subtitle}</h2>
//     <p>Author: <strong>{authorName.fName + " " + authorName.lName}</strong></p>
//     <small>Date: {date}</small>
//   </header>
// )

// const lis = []
// prerequisites.forEach((p, key) => {
//   lis.push(<li key={key}>{p}</li>);
// });



// const main = (
//   <main style={mainStyles}>
//     <section>
//       <h2>Prerequisites for ReactJS</h2>
//       <ul>{lis}</ul>
//       <div className="prerequisites-img">
//         <img src={htmlImg} style={prerequisitesImgStyles} alt="HTML logo"></img>
//         <img src={jsImg} style={prerequisitesImgStyles} alt="JS logo"></img>
//         <img src={reactImg} style={prerequisitesImgStyles} alt="React logo"></img>
//       </div>
//     </section>
//     <div>
//       <img src={nestaImg} alt="Nesta Archeron"></img>
//     </div>
//   </main>
// );


// const footer = (
//   <footer style={footerStyles}>
//     <div className="footer-wrapper">
//       <small>Bharati Subramanian &copy; 2021</small>
//     </div>
//   </footer>
// )

// const app = (
//   <div className="body-wrapper">
//     {header}
//     {main}
//     {footer}
//   </div>
// )

/* Exercise 2 */

// const H1Styles = {
//   textTransform: 'uppercase',
//   fontFamily: 'Consolas',
//   marginBottom: '2rem'
// };

// const H3Styles = {
//   marginBottom: '3rem'
// }

// const appStyles = {
//   backgroundColor: "lightskyblue",
//   padding: "1rem",
//   textAlign: "center",
//   fontFamily: 'arial'
// };

// const inputStyles = {
//   border: 'none',
//   outline: 'none',
//   fontSize: '1rem',
//   color: '#333',
//   padding: '0.5rem 0.75rem',
//   margin: '1rem',
//   borderRadius: '0.5rem'
// }

// const buttonStyles = {
//   background: "salmon",
//   color: "white",
//   width: "200px",
//   borderRadius: "0.5rem",
//   padding: "0.5rem 0.75rem",
//   margin: "1rem",
//   outline: 'none',
//   border: 'none',
//   fontSize: '1.2rem',
//   fontWeight: 'bold'
// };

// const hOne = (
//   <h1 style={H1Styles}>Subscribe</h1>
// )

// const hThree = (
//   <h3 style={H3Styles}>Sign up with your email address to receive news and updates</h3>
// )

// const inputDiv = (
//   <div class="input-div">
//     <input
//       type="text"
//       id="fname"
//       className="fname"
//       placeholder="First Name"
//       style={inputStyles}
//     ></input>
//     <input
//       type="text"
//       id="lname"
//       className="lname"
//       placeholder="Last Name"
//       style={inputStyles}
//     ></input>
//     <input
//       type="email"
//       id="email"
//       className="email"
//       placeholder="Email"
//       style={inputStyles}
//     ></input>
//   </div>
// );

// const button = (
//   <button className="subscribe" style={buttonStyles}>Subscribe</button>
// )

/* Exercise 3 */
const appStyles = {
  backgroundColor: "#f4f4f4",
  padding: "1rem",
  textAlign: 'center',
  fontFamily: 'arial'
};

const imgStyles = {
  width: "300px",
  height: '320px',
  borderRadius: '50%'
}

const buttonStyles = {
  backgroundColor: 'skyblue',
  color: 'white',
  fontFamily: 'arial',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  border: 'none',
  outline: 'none',
  display: 'inline-block',
  margin: '1rem 1rem 1rem 0',
  padding: '0.5rem 0.75rem',
  borderRadius: '0.5rem'
}

const skills = (
  <div className="skills" style={{margin: '2rem'}}>
    <button style={buttonStyles}>HTML</button>
    <button style={buttonStyles}>CSS</button>
    <button style={buttonStyles}>Sass</button>
    <button style={buttonStyles}>JS</button>
    <button style={buttonStyles}>Java</button>
    <button style={buttonStyles}>Python</button>
    <button style={buttonStyles}>React</button>
    <button style={buttonStyles}>Node</button>
    <button style={buttonStyles}>Git</button>
    <button style={buttonStyles}>C</button>
    <button style={buttonStyles}>SQL</button>
    <button style={buttonStyles}>ASP.NET</button>
    <button style={buttonStyles}>PHP</button>
  </div>
);

const imgName = (
  <div>
    <img style={imgStyles} src={nestaImg} alt="Nesta Archeron"></img>
    <h2 style={{fontFamily: 'consolas', textTransform: 'uppercase'}}>Bharati Subramanian</h2>
    <p style={{color: '#444'}}>Frontend Developer, India</p>
    {skills}
    <small>Joined July 20, 2021</small>
  </div>
)

const app = (
  <div style={appStyles}>
    {imgName}
  </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
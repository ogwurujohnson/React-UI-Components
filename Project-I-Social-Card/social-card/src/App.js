import React from 'react';
import './App.css';

// components
import Header from './components/HeaderComponents/HeaderContainer';
import Card from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const headerText = {
  title: "Lambda School",
  handle: "@LambdaSchool .",
  content: "Let’s learn React by building simple interfaces with components, Don’t to overthink it, just keep it simple and have fun. Once you are comfortable using components you are well on your way mastering React",
  img: "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
}

const cardContent = {
  image: "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
  title: "Get started with React",
  content: "React makes it painless to create interactive UIs. Design simple views or each state in your application",
  link: "reactjs.org",
}

const footerContent = {
  like: "https://img.icons8.com/ios/50/000000/hearts.png",
  likeValue: 0,
  retweet: "https://img.icons8.com/windows/32/000000/retweet.png",
  retweetValue: 0,
  message: "https://img.icons8.com/ios/50/000000/new-post.png",
  comment: "https://img.icons8.com/metro/26/000000/topic.png",
}

const methods = {
  onClick: () => {
    alert('interactive button clicked');
  },

  redirectLink: () => {
    window.location.href = "https://www.reactjs.org";
  }
  
}


const App = () => {
  return (
    <div className="App">
      <div className="mainContainer">
        <Header content = {headerText}/>
        <Card content = {cardContent} method={methods}/>
        <Footer content= {footerContent} method={methods} />
      </div>
    </div>
  );
};

export default App;
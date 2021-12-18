import classes from './App.module.css'
import Item from "./components/Item";
import image1 from './images/Nayem.jpg';
import image2 from './images/brad.jpg'
import image3 from './images/mosh-hamedani-v1.jpg'
function App() {
  return (
    <>
    <h1 className={classes.title}>Some of developer and their details</h1>
    <div className={classes.App}>
     <div>
     <Item href="https://www.google.com/"name="HM Nayem"image={image1} details="Myself HM Nayem (Hasan Mahmud Nayem). Once I have studied software engineering at one of the reputed private university in our country. But for some reason now I am dropout.
I was started learning technology since 2011 and till now I am studing. I love to learn new technologies also I love to teach people about new technology.
That's why I found 'Twinkle Cats'.  But I have a huge plan to change the way we are learning right now. I am working for my dream.f content he upload in his youtube channel" />
       </div>
       <div>
       <Item 
       name="Brad Traversy"image={image2} details="I started coding in 2008 at the age of 26. I started off freelancing, then worked as a full-time developer and then created my own agency.

I loved working as a developer, but I realized that teaching was my true passion. I became a full-time content creator and educator in 2016.

I show people that they don't have to be a straight A student or a genius to learn to code.I show people that they don't have to  I break down complex concepts by showing you how to implement them in project-based courses and tutorials."/>
       </div>
       <div>
       <Item name="Mosh hamedani" image={image3}details="Mosh (Moshfegh) Hamedani is a passionate and pragmatic software engineer specializing in web application development with ASP.NET MVC, Web API, Entity Framework, Angular, Backbone, HTML5, and CSS. He started programming at the age of seven on a Commodore 64 and fell in love with it I show people that they don't have to be a straight A student or a genius to learn to code.I show people that they don't have to be a straight A student or a genius to learn to code."/>
       </div>
     
    
     
    </div>
    </>
  );
}

export default App;

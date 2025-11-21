import './Body.css';
import acc from '../../assets/Acc.jpg';
import courseradly from '../../assets/Coursera dl.jpg';
import freecodecamp from '../../assets/freecodecamp.jpg';
import java from '../../assets/java_basic.jpg';
import courserams from '../../assets/Coursera MS.jpg';
const edu = [
    {
        id:1,
        date:'Job Simulation',
        name:'by Forage',
        img: acc,
        dis:'I gained practical experience in four key areas of modern software development. I learned to apply Object Oriented Programming (OOP) principles to structure code, use Code Refactoring to improve its design and maintainability, understand the workflow of Continuous Integration (CI) for automating builds and tests, and utilize Agile Planning methodologies for managing projects in an iterative, team-based environment.',
    },
    {
        id:2,
        date:'Supervised ML',
        name:'by Coursera',
        img: courseradly,
        dis:'I learned the fundamentals of supervised learning. I gained experience in building Regression models, like Linear Regression, to predict continuous numerical values. I also learned to implement Classification models, such as Logistic Regression, to predict discrete categories. The course covered the essential machine learning workflow, including data preprocessing, model training, and evaluation.',
    },
    {
        id:3,
        date:'Responsive Web Design',
        name:'by freeCodeCamp',
        img: freecodecamp,
        dis:'I learned how to build websites that adapt to different screen sizes, from mobile phones to desktops. This involved mastering HTML5 for web structure and CSS3 for styling. The core of the program focused on creating responsive layouts using modern techniques like CSS Flexbox, CSS Grid, and Media Queries. I also learned web accessibility best practices and applied all these skills by building a series of portfolio projects.',
    },
    {
        id:4,
        date:'Java Programming Basics',
        name:'by HackerRank',
        img: java,
        dis:'I demonstrated my proficiency in the foundational concepts of the Java language. This includes a solid understanding of core Java syntax, data types, operators, control flow structures (like loops and conditional statements), and the ability to solve problems using basic data structures such as arrays and strings.',
    },
    {
        id:5,
        date:'Azure Cognitive Services',
        name:'by Coursera',
        img: courserams,
        dis:"I learned how to use Microsoft's pre-built AI models to analyze images. This involved provisioning the Azure Cognitive Services, connecting them to an application, and making API calls to perform computer vision tasks such as identifying objects or extracting text from images.",
    },
];
const Body = () => {
  return (
    <>
    <div className="c-mainbody" id='certificate-section'>
      <h2>Certifications</h2>
      {edu.map(certificate => (
      <div className='c-card' key={certificate.id}>
        <div className='c-info'>
          <div className='c-titlebox'>
            <div className='c-accentbar'></div>
            <div className='c-title'>
              <h3>{certificate.date}</h3>
              <h4>{certificate.name}</h4>
            </div>
          </div>
          <div className='c-discription'>
            <p>{certificate.dis}</p>
          </div>
        </div>
        <div className='c-image'>
          <img src={certificate.img} alt="Certificate" />
        </div>
      </div>
      ))}
    </div>
    </>

  );
};
export default Body
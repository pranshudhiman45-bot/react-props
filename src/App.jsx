import './App.css'
import Card from './components/Card'
import AmazonLogo from './assets/images.png'
import GoogleLogo from './assets/download.png'
import MetaLogo from './assets/download (1).png'
import AppleLogo from './assets/download (2).png'
import NetflixLogo from './assets/download (3).png'
import MicrosoftLogo from './assets/images (1).png'
import UberLogo from './assets/download (4).png'
import AirbnbLogo from './assets/download (5).png'
import StripeLogo from './assets/download (6).png'
import LinkedinLogo from './assets/download (7).png'
 const jobOpenings = [
  {
    brandLogo: GoogleLogo,
    companyName: "Google",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India"
  },
  {
    brandLogo: MetaLogo,
    companyName: "Meta",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Hyderabad, India"
  },
  {
    brandLogo: AmazonLogo,
    companyName: "Amazon",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Chennai, India"
  },
  {
    brandLogo: AppleLogo,
    companyName: "Apple",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: NetflixLogo,
    companyName: "Netflix",
    post: "Frontend Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote, India"
  },
  {
    brandLogo: MicrosoftLogo,
    companyName: "Microsoft",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Pune, India"
  },
  {
    brandLogo: UberLogo ,
    companyName: "Uber",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Gurgaon, India"
  },
  {
    brandLogo: AirbnbLogo ,
    companyName: "Airbnb",
    post: "UI/UX Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 62,
    location: "Remote, India"
  },
  {
    brandLogo: StripeLogo,
    companyName: "Stripe",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo:LinkedinLogo,
    companyName: "LinkedIn",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 63,
    location: "Bangalore, India"
  }
];



function App() {
  return (
    <div className="container-fluid">
      {jobOpenings.map((elm) => (
        <Card company={elm.companyName} post={elm.post} tag1={elm.tag1} tag2={elm.tag2} pay={elm.pay} brandlogo={elm.brandLogo} location={elm.location}/>
      ))}
    </div>
  );
}

export default App

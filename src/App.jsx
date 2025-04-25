import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">✨ 김동식 과제 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="김동식"
        description="GSITM 10기 진주 부트캠프"
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://homeworkpages.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🍉 Homework
        </a>
        <a
          className="link-button"
          href="https://roa-family-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🍎 RoaFamily
        </a>
      </div>
    </div>
  );
}

export default App;

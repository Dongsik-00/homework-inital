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
          href="https://homework-ashen-iota.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🍉 개발 지원서
        </a>
        <a
          className="link-button"
          href="https://apple-snowy-nine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🍎 사과
        </a>
        <a
          className="link-button"
          href="https://mic-ten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🎤 마이크
        </a>
        <a
          className="link-button"
          href="https://trend-cyan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         😎 트렌드
        </a>
        <a
          className="link-button"
          href="https://gomdori-gilt.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🧸 곰돌이
        </a>
        <a
          className="link-button"
          href="https://travel-ten-inky.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         ✈️ 여행
        </a>
      </div>
    </div>
  );
}

export default App;

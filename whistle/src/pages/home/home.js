import React, { useState } from 'react';
import './home.css';
import '../../fonts/font.css';

function Home() {
  const [clicked1, setClicked1] = useState([]);
  const [clicked2, setClicked2] = useState([]);
  const [clicked3, setClicked3] = useState([]);

  const handleButtonClick1 = (index) => {
    const updatedClicked = [...clicked1];
    updatedClicked[index] = !updatedClicked[index];
    setClicked1(updatedClicked);
  }

  const handleButtonClick2 = (index) => {
    const updatedClicked = [...clicked2];
    updatedClicked[index] = !updatedClicked[index];
    setClicked2(updatedClicked);
  }

  const handleButtonClick3 = (index) => {
    const updatedClicked = [...clicked3];
    updatedClicked[index] = !updatedClicked[index];
    setClicked3(updatedClicked);
  }

  const buttonContents = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '울산광역시',
    '대전광역시',
    '세종특별자치시',
    '경기도',
    '강원특별자치도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주특별자치도'
  ];

  const buttonContents2 = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구'
  ];

  const buttonContents3 = [
    '신사동',
    '압구정동',
    '논현동',
    '청담동',
    '삼성동',
    '대치동',
    '역삼동',
    '도곡동',
    '개포동',
    '일원본동',
    '일원동',
    '수서동',
    '세곡동'
  ];

  return (
    <div className="container">
      <div className="boxTitle1">광역시도</div>
      <div className="box1">
        {buttonContents.map((content, index) => (
          <div className="buttonContainer1" key={index}>
            <button
              className={`button1 ${clicked1[index] ? 'clicked' : ''}`}
              onClick={() => handleButtonClick1(index)}
              style={{ color: clicked1[index] ? 'blue' : 'black' }}
            >
              {content}
            </button>
          </div>
        ))}
      </div>
      <div className="boxTitle2">시군구</div>
      <div className="box2">
        {buttonContents2.map((content, index) => (
          <div className="buttonContainer2" key={index}>
            <button
              className={`button2 ${clicked2[index] ? 'clicked' : ''}`}
              onClick={() => handleButtonClick2(index)}
              style={{ color: clicked2[index] ? 'blue' : 'black' }}
            >
              {content}
            </button>
          </div>
        ))}
      </div>
      <div className="boxTitle3">읍면동</div>
      <div className="box3">
        {buttonContents3.map((content, index) => (
          <div className="buttonContainer3" key={index}>
            <button
              className={`button3 ${clicked3[index] ? 'clicked' : ''}`}
              onClick={() => handleButtonClick3(index)}
              style={{ color: clicked3[index] ? 'blue' : 'black' }}
            >
              {content}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
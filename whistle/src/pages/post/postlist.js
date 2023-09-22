import React, { useState } from 'react';
import './postlist.css'; 
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import sample from '../../images/sample.jpg';


function Board() {
  const samplePosts = [
    { id: 1, image: img1, rating: '★★★★☆', title: '한남동 스테이크 맛집 ♡ 주말 데이트 일상', 
    content: '한남동에서 즐기는 맛있는 브런치',
    hashtags: ['#한남동', '#브런치'] },
    { id: 2, image: img2, rating: '★★★★★', title: '나 홀로 2박 3일 일본 여행',
    content: '남들 일할 때 떠나는 나 홀로 2박 3일 일본 여행, 혼자서도 잘 해요!',
    hashtags: ['#일본', '#오사카'] },
    { id: 3, image: img3, rating: '★★★★★', title: '카운팅 스타, 밤 하늘의 펄~',
    content: '밤 하늘 별 보기 좋은 국내 명소 10선',
    hashtags: ['#별보러가자', '#공기좋은곳'] },
    { id: 4, image: img4, rating: '★★★★★', title: '무더운 여름, 예술로 이겨내기',
    content: '에디터 선정 올 여름 구경 가기 좋은 전시회',
    hashtags: ['#전시회', '#국립현대미술관'] },
    { id: 5, image: img5, rating: '★★★☆☆', title: '뜨거운 축제의 현장, 대전으로!',
    content: '안녕하세요! 나나입니다. 오늘은 대전에 다녀온 후기를 작성해볼까 하는데요!',
    hashtags: ['#대전광역시', '#0시축제'] },
    { id: 6, image: sample, rating: '☆☆☆☆☆', title: 'Sample Post', content: '샘플입니다.',
    hashtags: ['#Hashtag1', '#Hashtag2'] },
    { id: 7, image: sample, rating: '☆☆☆☆☆', title: 'Sample Post', content: '샘플입니다.',
    hashtags: ['#Hashtag1', '#Hashtag2'] },
    { id: 8, image: sample, rating: '☆☆☆☆☆', title: 'Sample Post', content: '샘플입니다.',
    hashtags: ['#Hashtag1', '#Hashtag2'] },
    { id: 9, image: sample, rating: '☆☆☆☆☆', title: 'Sample Post', content: '샘플입니다.',
    hashtags: ['#Hashtag1', '#Hashtag2'] },
    { id: 10, image: sample, rating: '☆☆☆☆☆', title: 'Sample Post', content: '샘플입니다.',
    hashtags: ['#Hashtag1', '#Hashtag2'] },
    { id: 11, image: 'image1.jpg', rating: 4.5, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hashtags: ['tag1', 'tag2'] },
  ];

  const postsPerPage = 5;
  const totalPages = Math.ceil(samplePosts.length / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentPosts = samplePosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="board">
      <div className="boardHeader">
        <div className="boardTitle">POST</div>
      </div>

      {currentPosts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.image} alt="Post Image" className="postImage" />
          <div className="postInfo">
            <div className="postRating">{post.rating}</div>
            <div className="postTitle">{post.title}</div>
            <div className="postContentSummary">{post.content}</div>
            <div className="postHashtags">{post.hashtags.join(' ')}</div>
          </div>
        </div>
      ))}

          <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </button>
          ))}
        </div>
    </div>

    
  );
}

export default Board;

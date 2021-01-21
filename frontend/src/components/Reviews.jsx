import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import WriteReview from './WriteReview';
import TabReview from './TabReview';
import Pagenation from './Pagenation';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [ratingList, setRatingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const getReviews = () => {
    axios.get('/api/reviews')
      .then((res) => {
        setReviews(res.data);
      });
  };

  const getRatings = () => {
    axios.get('/api/ratings')
      .then((ratings) => {
        setRatingList(ratings.data);
      });
  };
  // const get = async () => {
  //   setLoading(true);
  //   const res = await axios.get('/api/reviews');
  //   setList(res.data);
  //   setLoading(false);
  // };

  useEffect(() => {
    getRatings();
    getReviews();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  console.log(reviews);
  return (
    <div className="wrapper">
      <div className="mainReview">
        <Menu total={reviews.length} />
        <WriteReview />
        <TabReview ratings={ratingList} list={currentPosts} loading={loading} />
        <Pagenation
          postsPerPage={postsPerPage}
          totalPosts={reviews.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Reviews;

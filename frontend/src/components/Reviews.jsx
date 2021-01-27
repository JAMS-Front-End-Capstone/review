import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import WriteReview from './WriteReview';
import TabReview from './TabReview';
import Pagenation from './Pagenation';
import { rateArray } from './data';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [ratingList, setRatingList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    ratings: [],
    type: [],
    time: [],
    lang: [],
  });
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const next = () => {
    if (indexOfLastPost !== reviews.length) {
      paginate(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage !== 1) {
      paginate(currentPage - 1);
    }
  };

  useEffect(() => {
    getRatings();
    getReviews();
  }, []);

  return (
    <div className="wrapper">
      <div className="mainReview">
        <Menu total={reviews.length} />
        <WriteReview />
        <TabReview
          ratings={ratingList}
          list={currentPosts}
          rateArray={rateArray}
        />
        <Pagenation
          postsPerPage={postsPerPage}
          totalPosts={reviews.length}
          paginate={paginate}
          currentPage={currentPage}
          prev={prev}
          next={next}
        />
      </div>
    </div>
  );
};

export default Reviews;

/* eslint-disable camelcase */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Menu from './Menu';
import WriteReview from './WriteReview';
import TabReview from './TabReview';
import Pagenation from './Pagenation';
import { rateArray } from './data';
const API_PROXY = document.getElementById('proxyUrl') ? document.getElementById('proxyUrl').attributes[2].nodeValue : '';

const Reviews = ({ item_id }) => {
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
  const API_review = `/api/reviews/${item_id}`;
  const API_ratings = `/api/ratings/${item_id}`;

  const getReviews = () => {
    axios.get(API_PROXY + API_review)
      .then((res) => {
        setReviews(res.data);
      });
  };

  const getRatings = () => {
    axios.get(API_PROXY + API_ratings)
      .then((ratings) => {
        setRatingList(ratings.data);
      });
  };

  const handleFilters = useCallback((filter, category) => {
    const newFilters = { ...filters };
    newFilters[category] = filter;

    if (category === 'price') {
      // let priceValues = handlePrice(filter);
      // newFilters[category] = priceValues;
    }

    //showFilteredResults(newFilters)
    setFilters(newFilters);
  }, []);

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
      <div className="Rev-mainReview">
        <Menu total={reviews.length} />
        <WriteReview />
        <TabReview
          ratings={ratingList}
          list={currentPosts}
          rateArray={rateArray}
          handleFilters={handleFilters}
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

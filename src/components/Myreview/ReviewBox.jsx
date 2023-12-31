// ReviewBox.js (또는 해당 파일 이름)
import React, { useState, useEffect } from "react";
import * as S from "./ReviewStyled";
import axios from "axios";

export default function ReviewBox() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        "http://13.209.111.199/api/user/my_reviews", // 요청 URL 변경
        {
          withCredentials: true, // withCredentials 옵션 설정
        }
      );
      setReviews(response.data);
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`http://13.209.111.199/api/review/${reviewId}`, {
        withCredentials: true,
      });

      // 삭제 후, 리뷰 목록을 업데이트하여 삭제된 리뷰를 제거합니다.
      setReviews(reviews.filter((review) => review.review_id !== reviewId));
    } catch (error) {
      console.log("Error deleting review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <S.ReviewEntireTitle>
      리뷰 수정 안내
      <S.Review_Container>
        {reviews.map((review, index) => (
          <S.Review_Item key={index}>
            <S.Review>
              <S.ReviewStoreName>{review.storename}</S.ReviewStoreName>
              {review.images.length > 0 ? (
                <img
                  src={`${review.images[0].image}`}
                  width={"100px"}
                  height={"100px"}
                  alt={`Review Image`}
                />
              ) : (
                <p> </p>
              )}

              <S.ReviewTitle>
                <b>제목</b> {review.title}
              </S.ReviewTitle>
              <S.ReviewContent>{review.content}</S.ReviewContent>
              <S.Review_Delete_Button
                onClick={() => handleDeleteReview(review.review_id)}
              >
                삭제하기
              </S.Review_Delete_Button>
            </S.Review>
          </S.Review_Item>
        ))}
      </S.Review_Container>
    </S.ReviewEntireTitle>
  );
}

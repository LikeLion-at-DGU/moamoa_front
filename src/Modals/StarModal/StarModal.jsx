// StarModal.jsx
import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import StarRating from "../../components/StarRating/StarRating";

export default function StarModal({ setStarmodalOpen }) {
    const modalRef = useRef();
    const imgRef = useRef();
    const [imgFile, setImgFile] = useState(null);
    const imgRef2 = useRef();
    const [imgFile2, setImgFile2] = useState(null);


    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setStarmodalOpen(false);
        }
    };

    const handleImageBoxClick = () => {
        imgRef.current.click(); // 이미지 업로드 input 클릭
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile(reader.result);
            };
        }
    };

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile2(reader.result); // 두 번째 이미지 상태 업데이트
            };
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <S.Overlay>
            <S.StarContainer ref={modalRef}>
                <S.StarModalCloseBtn onClick={() => setStarmodalOpen(false)}>
                    <AiOutlineClose />
                </S.StarModalCloseBtn>
                <S.Star>
                    <S.Star_Left>
                        <S.Star_Title>평가하기</S.Star_Title>
                        <S.Star_Left_Title>평점</S.Star_Left_Title>
                        <StarRating />
                        <S.Star_Left_Image_Title>사진 첨부</S.Star_Left_Image_Title>
                        <S.Star_Left_Images>
                            <S.Star_Left_Image_Container onClick={handleImageBoxClick}>
                                {imgFile ? (
                                    <S.Star_Left_Image_1 src={imgFile} alt="업로드된 이미지" />
                                ) : (
                                    <S.Star_Left_Image_Placeholder>
                                        <FaPlus />
                                    </S.Star_Left_Image_Placeholder>
                                )}
                            </S.Star_Left_Image_Container>
                            <input
                                type="file"
                                accept="image/*"
                                id="profileImg"
                                onChange={handleImageChange}
                                ref={imgRef}
                                style={{ display: "none" }}
                            />

                            <S.Star_Left_Image_Container onClick={() => imgRef2.current.click()}>
                                {imgFile2 ? (
                                    <S.Star_Left_Image_1 src={imgFile2} alt="업로드된 이미지" />
                                ) : (
                                    <S.Star_Left_Image_Placeholder>
                                        <FaPlus />
                                    </S.Star_Left_Image_Placeholder>
                                )}
                            </S.Star_Left_Image_Container>
                        </S.Star_Left_Images>
                        <input
                            type="file"
                            accept="image/*"
                            id="profileImg2"
                            onChange={handleImageChange2}
                            ref={imgRef2}
                            style={{ display: "none" }}
                        />
                    </S.Star_Left>
                    <S.Star_Right>
                        <S.Star_Right_Title>제목</S.Star_Right_Title>
                        <S.Star_Right_Title_Input></S.Star_Right_Title_Input>
                        <S.Star_Right_Content>평가 내용</S.Star_Right_Content>
                        <S.Star_Right_Content_Input></S.Star_Right_Content_Input>
                    </S.Star_Right>
                </S.Star>
            </S.StarContainer>
        </S.Overlay>
    );
}

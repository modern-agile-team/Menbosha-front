import styled from 'styled-components';

//멘토 css

export const MentorCardContainer = styled.div`
  display: flex;
  width: 280px;
  height: 159px;
  border-radius: 10px;
  border: 2px solid #ff792bbf;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    border: 5px solid #ff792bbf;
  }
`;

export const MentorCardContentBox = styled.div`
  width: 140px;
`;

export const MentorCardImageBox = styled.div`
  width: 114px;
  height: 135px;
  background-color: #999;
`;

export const ProfileContentBox = styled.div`
  display: flex;
  width: 232px;
  height: 110px;
`;

export const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > :nth-child(1) {
    width: 43px;
    height: 43px;
    background-color: #3da2ff;
    border: 1px solid #3da2ff;
    border-radius: 5px;
  }
  > :nth-child(2) {
    font-size: 15px;
  }
  > :nth-child(3) {
    font-size: 12px;
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  > :nth-child(3) {
    flex-wrap: wrap;
  }
`;

export const CountBox = styled.div`
  display: flex;
  margin: auto;
`;

export const PopularMentorCardContainer = styled.div`
  width: 280px;
  height: 456px;
  border-radius: 10px;
  border: 2px solid #ff792bbf;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    border: 5px solid #ff792bbf;
  }
`;

export const BadgeBox = styled.div`
  border: 2px solid #000;
  border-radius: 15px;
  height: 166px;
  width: 30.3%;
  margin: 14px;
`;

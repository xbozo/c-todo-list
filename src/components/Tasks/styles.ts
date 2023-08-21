import styled from "styled-components";
import "../../styles/global.css"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;
`

export const TaskItem = styled.section`
  display: flex;
  width: 74rem;
  height: 8rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  padding: 2 1.6rem;
  background: var(--gray_500);
  justify-content: space-between;

  .img-button {
    background: none;
    border: none;
    width: 3rem;
    margin-right: 1rem;
    align-self: center;
  }

  button img {
    width: 100%;
    height: 100%;
  }

  p {
    flex-wrap: wrap;
    max-width: 60rem;
    align-self: center;
  }

  .textCompleted {
    text-decoration: line-through;
    color: var(--gray_300);
  }
`

export const InfoItems = styled.header`
    width: 74rem;
    margin: auto;
    margin-top: 6rem;
    margin-bottom: 2.4rem;

    .info-container {
        margin: auto;
        width: 72rem;
        display: flex;
        justify-content: space-between;
    }

    .created-tasks:nth-child(1) {
        color: var(--blue);
        font-weight: 700;

        span {
            background: var(--gray_400);
            color: var(--gray_100);
            font-weight: bold;
            padding: 3px 9px;
            margin-left: 5px;
            border-radius: 10px;
            font-size: 14px;
        }
    }

    .created-tasks:nth-child(2) {
        color: var(--purple);
        font-weight: 700;

        span {
            background: var(--gray_400);
            color: var(--gray_100);
            font-weight: bold;
            padding: 3px 9px;
            margin-left: 5px;
            border-radius: 10px;
            font-size: 14px;
        }
    }
`



export const CustomButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  margin-left: 1.3rem;
  margin-top: -0.5rem;
  align-self: center;
  border-radius: 50%;

  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid var(--blue);
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--purple);    
  }
`;
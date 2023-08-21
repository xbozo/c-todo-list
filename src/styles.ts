import styled from "styled-components";
import "./styles/global.css"

export const Container = styled.div`
    background: var(--gray_600);
    min-height: 100vh;
    padding: 1rem;

    .header {
        background: var(--gray_700);
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`


export const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: calc(-5.5rem / 2);

    input {
        background: var(--gray_500);
        color: var(--gray_100);
        width: 64rem;
        height: 5.5rem;
        padding-left: 1rem;
        border-radius: 1rem;
        border: none;

        &:placeholder { 
            border: 1px solid var(--gray_300) ;
        }

        &:focus { border: 1px solid var(--purple_dark) }
    }

    button {
        background: var(--blue_dark);
        color: var(--gray_100);
        height: 5.5rem;
        width: 9rem;
        border-radius: 10px;
        border: none;
        transition: all ease 0.15s;

        &:hover { background: var(--blue); }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            line-height: 140%;
            gap: 1rem;
        }
    }
`


export const InfoItems = styled.div`
    width: 74rem;
    margin: auto;
    margin-top: 6rem;

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
            padding: 1px 9px;
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
            padding: 1px 9px;
            margin-left: 5px;
            border-radius: 10px;
            font-size: 14px;
        }
    }
`

export const EmptyTaskContainer = styled.div`
    width: 74rem;
    margin: auto;
    margin-top: 3rem;
    border-top: 1px solid var(--gray_400);
    border-radius: 8px;

    .empty-info {
        display: flex;
        height: 25rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            height: 5.6rem;
            margin-bottom: 16px;
        }

        div { color: var(--gray_300) }

        div:nth-child(2) {
            font-weight: 700;
            margin-bottom: 4px;
        }
    }
`
import styled from "styled-components";
import Card from "../components/Card";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import React from "react";

const LoadMoreBtn = styled.button`
  background-color: var(--terceary);
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: var(--secondary);
  &hover {
    transform: scale(1.1);
  }
  @media (min-width: 720px) {
    width: 200px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const fetchAllGames = ({ pageParam = 1 }) => {
  return axios.get(
    `https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=20&page=${pageParam}&key=c542e67aec3a4340908f9de9e86038af`
  );
};

const AllGamesGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  min-height: 100vh;
  justify-items: center;
`;
export default function Games() {
  const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["games"], fetchAllGames, {
      getNextPageParam: (_lastPage, pages) => {
        // console.log(lastPage.data)
        if (pages.length < 20) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });
  if (isLoading) return "loading...";
  //@ts-ignore
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <h1>New and trending</h1>
      <AllGamesGridContainer>
        {data?.pages.map((group, index) => {
          return (
            <React.Fragment key={index}>
              {group.data.results.map((game: any) => {
                return <Card key={game.id} game={{ ...game, price: 19.99 }} />;
              })}
            </React.Fragment>
          );
        })}
      </AllGamesGridContainer>

      <BtnContainer>
        <LoadMoreBtn disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Load more
        </LoadMoreBtn>
      </BtnContainer>
    </>
  );
}

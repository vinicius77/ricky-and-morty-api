import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Paginator from './Paginator';
import {
  fetchingData,
  fetchingFailed,
  fetchingSuccess,
} from '../redux/actions/charactersActionTypes';
import Character from './Character';

const CharactersContainer = ({
  characters,
  fetchData,
  fetchFailed,
  fetchSuccess,
}) => {
  /** Those piece of local state will control the pagination */
  const [currentPage, setCurrentPage] = useState(
    'https://rickandmortyapi.com/api/character/'
  );
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const goToThePreviousPage = () => {
    setCurrentPage(previousPage);
  };
  const goToTheNextPage = () => {
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;

    fetchData();

    axios
      .get(currentPage, {
        cancelToken,
        headers: { 'Content-Type': 'application/json' },
      })
      .then(({ data }) => {
        fetchSuccess(data.results);
        setPreviousPage(data.info.prev);
        setNextPage(data.info.next);
      })
      .catch((error) => fetchFailed(error.message));

    return () => source.cancel;
  }, [currentPage, fetchData, fetchSuccess, fetchFailed]);

  return (
    <section className="characters-section">
      <div className="max-width">
        <h1>Ricky and Morty Characters</h1>
        {!characters.loading && (
          <Paginator
            goToThePreviousPage={previousPage ? goToThePreviousPage : null}
            goToTheNextPage={nextPage ? goToTheNextPage : null}
          />
        )}
        {characters.loading && !characters.error && <div>Loading ...</div>}

        {characters.error && <div>{characters.error}</div>}

        <ul className="characters-list">
          {characters.data.map((character) => (
            <li key={character.id}>
              <Character character={character} />
            </li>
          ))}
        </ul>

        {!characters.loading && !characters.error && (
          <Paginator
            goToThePreviousPage={previousPage ? goToThePreviousPage : null}
            goToTheNextPage={nextPage ? goToTheNextPage : null}
          />
        )}
      </div>
    </section>
  );
};

/** The mapStateToProps function in simple words, transforms the state coming from Redux
 * in props, allowing to use the state in your application */
const mapStateToProps = (state) => {
  return { characters: state.characters };
};

/** The mapDispatchToProps function allows to dispatch actions which change
 * the state of the application in the Redux store */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchingData());
    },
    fetchFailed: (error) => {
      dispatch(fetchingFailed(error));
    },
    fetchSuccess: (characters) => {
      dispatch(fetchingSuccess(characters));
    },
  };
};

/** connect() connects both the state and dispatch functions
 * previously mapped to props into the React compnonent */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersContainer);

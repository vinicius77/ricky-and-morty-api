import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchingData } from '../redux/actions/charactersActionTypes';

const CharactersContainer = ({ characters, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className="characters">
      <h1>Ricky and Morty Characters</h1>
      {characters.loading && <div>Loading ...</div>}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersContainer);

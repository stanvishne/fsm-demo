import SwapiComponents from '../components/swapi';
export const transitions = {
    PEOPLE: {
        to: 'PLANETS'
    },
    PLANETS: {
        to: 'FILMS'
    },
    FILMS: {
        to: 'STARSHIPS'
    },
    STARSHIPS: {
        to: 'PEOPLE'
    }
};
//console.log('CONSTANTS', SwapiComponents.People)
// const applyAction = (dispatch, url, navigateTo) => {
//     dispatch({type: 'LOAD_DATA', payload: url});
//     navigateTo('planets')
// }

export const actions = {
    PEOPLE: (dispatch, url) => {
        dispatch({ type: 'LOAD_PEOPLE', payload: url });
        //console.log(SwapiComponents.People)
        return SwapiComponents.People;
    },
    PLANETS: (dispatch, url) => {
        dispatch({ type: 'LOAD_PLANETS', payload: url });
        return SwapiComponents.Planets;
    },
    FILMS: (dispatch, url) => {
        dispatch({ type: 'LOAD_FILMS', payload: url });
        return SwapiComponents.Films;
    },
    STARSHIPS: (dispatch, url) => {
        dispatch({ type: 'LOAD_STARSHIPS', payload: url });
        return SwapiComponents.Ships;
    }
};

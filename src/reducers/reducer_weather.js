import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../actions/index';

const initState = { data: [], error: null}

export default function(state = initState , action) {

  if (action.error) {
    action.type = FETCH_WEATHER_ERROR;
  }

  switch (action.type) {

    case FETCH_WEATHER_SUCCESS:
      return {...state, 
        data: [ action.payload.data, ...state.data ],
        error: null
      };
    
    case FETCH_WEATHER_ERROR:
      return {...state, 
        error: action.payload
      };

    default:
      return state;
  }
}

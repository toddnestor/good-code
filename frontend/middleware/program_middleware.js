import { receivePrograms,
  receiveProgram,
  removeProgram,
  receiveProgramErrors,
  FETCH_PROGRAMS,
  FETCH_USER_PROGRAMS,
  FETCH_PROGRAM,
  CREATE_PROGRAM,
  UPDATE_PROGRAM,
  DESTROY_PROGRAM
} from '../actions/program_actions.js';
import {fetchPrograms,
  fetchProgram,
  fetchUserPrograms,
  createProgram,
  updateProgram,
  destroyProgram
} from '../util/programs_api_util.js';
import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const error = e => dispatch(receiveProgramErrors(e.responseJSON));
  const fetchProgramsSuccess = programs => dispatch(receivePrograms(programs));
  const fetchProgramSuccess = program => dispatch(receiveProgram(program));

  const makeProgramSuccess = program => {
    dispatch(receiveProgram(program));
    hashHistory.push(`programs/${program.id}`);
  }

  const removeProgramSuccess = program => {
    dispatch(removeProgram(program));
    hashHistory.push('/');
  }

  switch(action.type) {
    case FETCH_PROGRAMS:
      fetchPrograms(fetchProgramsSuccess, error, action.statusCode);
      return next(action);
    case FETCH_USER_PROGRAMS:
      fetchUserPrograms(fetchProgramsSuccess, error);
      return next(action);
    case FETCH_PROGRAM:
      fetchProgram(action.id, fetchProgramSuccess, error);
      return next(action);
    case CREATE_PROGRAM:
      createProgram(action.program, makeProgramSuccess, error);
      return next(action);
    case UPDATE_PROGRAM:
      updateProgram(action.program, makeProgramSuccess, error);
      return next(action);
    case DESTROY_PROGRAM:
      destroyProgram(action.id, removeProgramSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};


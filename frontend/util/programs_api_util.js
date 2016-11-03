export const fetchUserPrograms = (success, error) => {
  $.ajax({
    url: `api/programs`,
    type: 'GET',
    success,
    error,
    data: { current_user: true }
  });
};

export const fetchPrograms = (success, error) => {
  $.ajax({
    url: `api/programs`,
    type: 'GET',
    success,
    error
  });
};

export const fetchProgram = (id, success, error) => {
  $.ajax({
    url: `api/programs/${id}`,
    type: 'GET',
    success,
    error
  });
};

export const updateProgram = (program, success, error) => {
  $.ajax({
    url: `api/programs/${program.id}`,
    type: 'PATCH',
    success,
    error,
    data: { program }
  });
};


export const createProgram = (program, success, error) => {
  $.ajax({
    url: `api/programs`,
    type: 'POST',
    success,
    error,
    data: { program }
  });
};

export const destroyProgram = (id, success, error) => {
  $.ajax({
    url: `api/programs/${id}`,
    type: 'DELETE',
    success,
    error
  });
};

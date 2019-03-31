import { API_URL } from '../actions/types';
import axios, { AxiosResponse } from 'axios';
import { logout } from '../helpers/logout';
import { authHeader } from '../helpers/authHeader';
import { IExams } from '../actions/interface';

const getExams = () =>
  axios
    .get(`${API_URL}/v1/exams`, { headers: authHeader() })
    .then(handleResponse)
    .then((exams: IExams) => exams);

const handleResponse = (response: AxiosResponse) => {
  if (response.statusText !== 'OK') {
    if (response.status === 401) {
      logout();
    }

    return response.statusText;
  }

  return response.data;
};

export const examsService = {
  getExams
};

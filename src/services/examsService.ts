import { API_URL } from '../actions/types';
import axios from 'axios';
import { logout } from '../helpers/logout';
import { authHeader } from '../helpers/authHeader';
import { IExams } from '../actions/interface';

const getExams = async () => {
  const axiosInstance = axios.create({
    validateStatus: status => {
      return status >= 200 && status <= 503;
    }
  });

  const response = await axiosInstance.get(`${API_URL}/v1/exams`, {
    headers: authHeader()
  });

  const resStatus = response.status;

  if (resStatus === 200) {
    const exams: IExams = response.data;

    return exams;
  } else if (resStatus === 400) {
    return Promise.reject('Bad Request');
  } else if (resStatus === 401) {
    logout();
    location.reload(true);
    return Promise.reject('Unauthorized');
  } else if (resStatus === 403) {
    return Promise.reject('Forbidden');
  } else if (resStatus === 500) {
    return Promise.reject('Внутренняя ошибка сервера.');
  }

  return Promise.reject(response.statusText);
};

export const examsService = {
  getExams
};

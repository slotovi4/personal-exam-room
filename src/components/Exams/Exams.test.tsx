import * as React from 'react';
import { shallow } from 'enzyme';
import Exams, { IProps } from './Exams';
import { getConvertedDate } from '../../helpers/getConvertedDate';

const exam = {
  id: '123',
  date: '02.20.1234',
  qualificationTitle: 'Title name',
  qualificationLevel: '6',
  occupationalStandardTitle: 'standart title',
  examinationCenterName: 'My name',
  address: 'col num 0.8',
  city: 'Moscow',
  status: 'apply',
  statusChangeTime: '1234',
  duration: 60
};

const props: IProps = {
  exams: [exam],
  getUserExams: () => true
};

const wrapper = shallow(<Exams {...props} />);

describe('<Exams /> Component', () => {
  describe('Exams list', () => {
    it('Exams tr showed', () =>
      expect(wrapper.find('tbody tr').length).toBe(1));

    it('Exam th count', () =>
      expect(wrapper.find('tbody tr th').length).toBe(5));

    it('Exams date showed', () =>
      expect(wrapper.find('tbody tr th').get(0)).toEqual(
        <th>{getConvertedDate(exam.date)}</th>
      ));

    it('Exams qualificationTitle & address showed', () =>
      expect(wrapper.find('tbody tr th').get(1)).toEqual(
        <th>
          <h5>{exam.qualificationTitle}</h5>
          <span>{exam.address}</span>
        </th>
      ));

    it('Exams qualificationLevel showed', () =>
      expect(wrapper.find('tbody tr th').get(2)).toEqual(
        <th>{exam.qualificationLevel}</th>
      ));

    it('Exams city showed', () =>
      expect(wrapper.find('tbody tr th').get(3)).toEqual(<th>{exam.city}</th>));

    it('Exams status showed', () =>
      expect(wrapper.find('tbody tr th').get(4)).toEqual(
        <th>{exam.status}</th>
      ));

    it('Exams title showed', () =>
      expect(wrapper.find('.Exams-Title').exists()).toEqual(true));

    it('Exams pre title showed', () =>
      expect(wrapper.find('.Exams-Title_pre').exists()).toEqual(true));
  });
});

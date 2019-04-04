import { getConvertedDate } from '../getConvertedDate';

describe('Helper getConvertedDate', () => {
  it('getConvertedDate return converted date', () => {
    const res = getConvertedDate('2019-04-02T17:00:00+00:00');

    expect(res).toEqual('02.03.2019 в 20:00');
  });
});

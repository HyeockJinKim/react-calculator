import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, getByTestId, getByText } from '@testing-library/react';

import Calculator from "./components/Calculator";

describe('계산기 테스트', () => {
  it('정해진 계산기 모양과 같게 표시되는 지 테스트 (√ 버튼을 추가했는 지)', () => {
    const utils = render(<Calculator/>);
    expect(utils.container).toMatchSnapshot();
  });

  it('40 - 31', () => {
    const utils = render(<Calculator/>);
    let btn_4 = utils.getByText('4');
    let btn_0 = utils.getByText('0');
    let btn_3 = utils.getByText('3');
    let btn_1 = utils.getByText('1');
    let minus = utils.getByText('-');
    expect(utils.getByTestId('display').textContent).toBe('');
    act(() => {
      fireEvent.click(btn_4);
    })
    act(() => {
      fireEvent.click(btn_0);
    })
    act(() => {
      fireEvent.click(minus);
    })
    act(() => {
      fireEvent.click(btn_3);
    })
    act(() => {
      fireEvent.click(btn_1);
    })

    expect(utils.getByTestId('display').textContent).toBe('40-31');


  })
})

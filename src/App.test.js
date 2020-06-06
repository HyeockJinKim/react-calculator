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
    let container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<Calculator />, container);
    });
    let btn_4 = getByText(container, '4');
    let btn_0 = getByText(container, '0');
    let btn_3 = getByText(container, '3');
    let btn_1 = getByText(container, '1');
    let minus = getByText(container, '-');
    expect(getByTestId(container, 'display').textContent).toBe('');
    act(() => {
      fireEvent.click(btn_4);
      fireEvent.click(btn_0);
      fireEvent.click(minus);
      fireEvent.click(btn_3);
      fireEvent.click(btn_1);
    })

    expect(getByTestId(container, 'display')).toBe('40-31');
    document.body.removeChild(container);
  })
})

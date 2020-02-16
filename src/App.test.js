import React from 'react';
import { render, screen, fireEvent, waitForDomChange } from '@testing-library/react';
import { mockRandom, resetMockRandom } from 'jest-mock-random'
import App from './App';

jest.mock('./components/dice', () => jest.fn(({ final, isInProgress }) => (
  <div
    data-testid="dice"
    data-final={final}
    data-is-in-progress={isInProgress}
  />
)))

jest.mock('./components/bar', () => jest.fn(({ level, last }) => (
  <div
    data-testid="bar"
    data-last={last}
    data-level={level}
  />
)))

jest.mock('./components/player', () => jest.fn(({ lost }) => (
  <div
    data-testid="player"
    data-lost={lost}
  />
)))

jest.mock('./components/monster', () => jest.fn(({ lost }) => (
  <div
    data-testid="monster"
    data-lost={lost}
  />
)))

jest.useFakeTimers()

beforeAll(() => {
  mockRandom([0.12, 0.13, 0.14, 0.15])
})

afterAll(() => {
  resetMockRandom()
})

test('renders the component after 2 attacks', () => {
  const { container } = render(<App />)
  waitForDomChange()
  fireEvent.click(screen.getByTestId('attack-button'))
  jest.runAllTimers()

  expect(screen.getAllByTestId('bar')[0]).toHaveAttribute('data-last', "4")
  expect(screen.getAllByTestId('bar')[0]).toHaveAttribute('data-level', "96")
  expect(screen.getAllByTestId('dice')[0]).toHaveAttribute('data-final', "1")
  expect(screen.getAllByTestId('dice')[1]).toHaveAttribute('data-final', "2")

  expect(screen.getAllByTestId('bar')[1]).toHaveAttribute('data-last', "0")
  expect(screen.getAllByTestId('bar')[1]).toHaveAttribute('data-level', "100")
  expect(screen.getAllByTestId('dice')[2]).toHaveAttribute('data-final', "3")
  expect(screen.getAllByTestId('dice')[3]).toHaveAttribute('data-final', "4")

  fireEvent.click(screen.getByTestId('attack-button'))
  jest.runAllTimers()
  waitForDomChange()
  expect(screen.getAllByTestId('bar')[0]).toHaveAttribute('data-last', "4")
  expect(screen.getAllByTestId('bar')[0]).toHaveAttribute('data-level', "92")
  expect(screen.getAllByTestId('bar')[1]).toHaveAttribute('data-last', "0")
  expect(screen.getAllByTestId('bar')[1]).toHaveAttribute('data-level', "100")

  expect(container).toMatchSnapshot()
})

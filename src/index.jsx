import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';

const initialState = {
  cart: [],
  womens: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
    {
      id: 2,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
    {
      id: 3,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
  ],
  mens: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
    {
      id: 2,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
    {
      id: 3,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
    {
      id: 2,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
    {
      id: 3,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/200/?random',
    },
    {
      id: 4,
      name: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/300/?random',
    },
    {
      id: 5,
      name: 'Product 1',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/300/?random',
    },
    {
      id: 6,
      name: 'Product 1',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/300/?random',
    },
    {
      id: 7,
      name: 'Product 1',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/300/?random',
    },
    {
      id: 8,
      name: 'Product 1',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/300/?random',
    },
    {
      id: 9,
      name: 'Product 1',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/300/?random',
    },
    {
      id: 10,
      name: 'Product 1',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget tincidunt nisl nisl eget.',
      image: 'https://picsum.photos/200/300/?random',
    },
  ],
};

//conect redux and redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

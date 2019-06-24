import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

function App() {
  return (
      <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <div>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                        <Route path="/streams/show" exac component={StreamShow} />
                    </div>
                </BrowserRouter>
            </div>
      </Provider>
  );
}

export default App;

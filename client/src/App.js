import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header';

function App() {
  return (
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
  );
}

export default App;

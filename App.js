import React from 'react';
import './App.css';
import quoteArray from './QuoteArray';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            index: 0,
            text: quoteArray[0].text,
            author: quoteArray[0].author,
            color: quoteArray[0].color
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const i = (this.state.index + 1) % quoteArray.length;
        this.setState({
            index: i,
            text: quoteArray[i].text,
            author: quoteArray[i].author,
            color: quoteArray[i].color
        })
    }

    render(){
        return(
            <div
              className="bodyy"
              style={{backgroundColor: this.state.color}}>
                <div className='content' id="quote-box">
                    <h1 id="text">{this.state.text}</h1>
                    <h5 id="author">- {this.state.author}</h5>
                    <button
                        id="tweet-quote"
                        className='lbutton'>
                        <a
                          href={"twitter.com/intent/tweet?text=" + this.state.text}
                          target="_blank"
                          rel = "noopener noreferrer"
                          style={{color: this.state.color, fontSize: '32px' }}>
                          <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </button>
                    <button
                        id="new-quote"
                        className='rbutton'
                        onClick={this.handleClick}
                        style={{backgroundColor: this.state.color}}>
                        New Quote
                    </button>
                </div>
            </div>
        )
    }
}

export default App;

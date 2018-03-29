import React, {Component} from 'react';
const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = "UCXgGY0wkgOznnHvSEVmE3A";
const maxCount = 20;
let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${maxCount}`;


class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
          resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked() {
           fetch(finalURL)
                .then((response) => response.json())
                .then((responseJson) => {
                    const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                    this.setState({resultyt});
                    // console.log(this.state.resultyt);
                })
                .catch((error) => {
                    console.error(error);
                });
    }
    render() { 
        console.log(this.state.resultyt);
        return (
            <div>
                <button className="btn" onClick={this.clicked}>Youtube Videos</button>
                {
                    this.state.resultyt.map((link,i) => {
                        let frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>;
                        return frame;

                    })
                    
                }
                {this.frame}
            </div>
        );
    }
}

export default Youtube;
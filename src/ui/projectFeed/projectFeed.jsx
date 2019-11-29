import FeedTemplate from './feedTemplate.jsx';
import axios from 'axios';

export default class Composition extends React.Component {
    constructor() {
        super();
    }

    state = {
        feeds: []
    }

    loadFeed = () => {
        var rawFeed;
        var formattedFeed = [];
        axios.get('http://localhost:8080/api/feed')
            .then(res => {
                rawFeed = res.data.feed;
                for(var i in rawFeed) {
                    formattedFeed.push(<FeedTemplate key={i} title={rawFeed[i].title} date={rawFeed[i].date} body= {rawFeed[i].body}/>);
                }
                formattedFeed.reverse();
                this.setState({feeds: formattedFeed});
            });
        
    }

    componentDidMount() {
        this.loadFeed();
    }

    addFeed = (_FeedTemplate) => {

    }

    render() {
        var feeds;
        console.log(this.state.feeds);
        if(typeof this.state.feeds != "undefined" && this.state.feeds.length > 0)
            feeds = this.state.feeds.map((feed) => {
                return feed;
            });
        else if(this.state.feeds.length == 1)
            feeds = this.state.feeds[0];
        else
            feeds = (<div>Feed Space</div>);

        console.log(feeds);
        return(
            <div className="Composition">
                <h2>Project Feed</h2>
                {
                    feeds
                }
            </div>
        );
    }
}
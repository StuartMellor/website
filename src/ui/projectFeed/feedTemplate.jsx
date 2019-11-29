

export default class FeedTemplate extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h3 className="feedTitle">{this.props.title}</h3>
                {
                    this.props.body
                }
                <h4>{this.props.date}</h4>
            </div>
        );
    }
}
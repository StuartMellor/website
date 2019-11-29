import About from '../about/about.jsx';
import ProjectFeed from '../projectFeed/projectFeed.jsx';
import Composition from '../composition/composition.jsx';
import Software from '../software/software.jsx';
import Contact from '../contact/contact.jsx';
import { timingSafeEqual } from 'crypto';



export default class Page extends React.Component {
    constructor(props) {
        super();
    }

    state = {
        page: 0
    }

    componentWillMount() {
        this.setState({page: this.props.page});
    }

    componentWillReceiveProps(newProps) {
        this.setState(prevProps => {
            prevProps = newProps;
            return prevProps;
        });
    }

    getPage = (page) => {
        switch(page) {
            case 0:
                return (<About/>);
                break;
            case 1:
                return <Composition/>;
                break;
            case 2:
                return <Software/>;
                break;
            case 3: 
                return <ProjectFeed/>;
                break;
            case 4: 
                return <Contact/>;
                break;
        }
    }

    render() {
        
        console.log("Page: " + this.state.page);
        return(
            <div className="pageContainer">
            {
                this.getPage(this.state.page)            
            }
            </div>
        );
    }
}
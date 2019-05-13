const contentNode = document.getElementById( 'contents' );
import Main from './ui/main.jsx';

class Page extends React.Component {
    render() {
        console.log("Rendering main page!");
        return(
            <div>
                <Main/>
            </div>
        )
    }
}



ReactDOM.render(<Page />, contentNode); 
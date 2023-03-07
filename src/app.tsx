import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IAppProps { }
interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }


    render() {
        return (
          <div>This is react app again again </div>
        );
    };
}

export default App;

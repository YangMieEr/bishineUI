import * as React from 'react';
import Icon from './icon/Icon';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Icon className='3333' name='wechat' onClick={()=> {console.log('click')}} style={{color: 'green'}}/>
      </div>
    );
  }
}

export default App;
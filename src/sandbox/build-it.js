class RenderApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
         <div><p key="1">Bla bla bla</p></div>
        )}
     </div>
    );
  }
}

ReactDOM.render(<RenderApp />, document.getElementById('app'));


// console.log('It is working');

// let visibility = false;

// const toggleDetails = () => {
//   visibility = !visibility;
//   renderApp(); 
// };

// const appRoot = document.getElementById('app');

// // JSX - JS XML 
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div><p key="1">Bla bla bla</p></div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();


console.log('It is working');

const app = {
  title: 'Indecision App',
  subtitle: 'We choose what you do next',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

// JSX - JS XML 
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'Sorry, no options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do next?</button>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li> )
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();


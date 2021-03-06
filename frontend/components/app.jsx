const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');

const Nav = require('./nav.jsx');
const AppSlider = require('./app_slider');

const GatheringsIndex = require('./gatherings/gatherings_index');


const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  render() {
    return (
      <div>

        <div className="header-group">
          <header>
            <Link to="/" className="header-link"><h1>EventRight</h1></Link>
          </header>
          < Nav />
        </div>

        {this.props.children}

      </div>
    );
  }
});

module.exports = App;

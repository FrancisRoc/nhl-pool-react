import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import createStore from './redux/create';
import * as pages from './pages';
import * as i18n from './i18n';
import * as themes from './themes';

const { App, NotFound } = pages;

const initialState = {};
export const store = createStore(initialState);

class Root extends React.Component {
  componentWillMount() {
    //this.props.onMount();
  }

  render() {
    const {
      /*locale, theme*/
    } = this.props; // Locale and theme in account redux state
    const intlData = {
      locale: 'fr',
      messages: i18n['fr'],
    };
    return (
      <IntlProvider key={'fr'} {...intlData}>
        <ThemeProvider theme={themes['light']}>
          <BrowserRouter>
            <div>
              <Route path="/" component={App} />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Root);

import React from 'react';


// Route - компонент принимающий два свойства:
// 1. path - url
// 2. component - компонент который отобразиться по указаному в path url.
// так-же присуствует возможность делать компонент парным, что дает возможность
// вкладывать в него другие теги и компоненты.

// Switch - вспомогательный компонент который позволяет групировать определенные
// Routes и переключаться между ними

// Link - необходим для того чтобы переключатся между "страницами", по факту - аналог
// обычного <a>, но работает с помощью BrowserHistory или hashHistory
// вместо привычного нам href нужно писать to={`/some-url`}

import { Route, Switch, Link } from 'react-router-dom';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                
                <Switch>
                    {/* <Route exact path="/" component={Posts}/>
                    <Route path="/post-:postId" component={PostView}/>
                    <Route path="/add" component={AddPost}/> */}
                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>

            </div>
        ); 
    }
}

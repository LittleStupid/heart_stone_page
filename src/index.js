import './index.html';
import './index.css';
import 'antd/dist/antd.css';
import dva from 'dva';
// import { hashHistory, browserHistory } from 'dva/router';
import { browserHistory } from 'dva/router';


// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/CardDetail'));
app.model(require('./models/CardBack'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

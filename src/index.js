import ReactDOM from 'react-dom/client';
import App from './App';
import "./Index.css"
import { Provider } from 'react-redux';
import store from "./store/Index"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App/>
</Provider>
    );


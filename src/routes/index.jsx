import Fulllayout from '../layouts/fulllayout.jsx';
import Blanklayout from '../layouts/blanklayout.jsx';

var indexRoutes = [
    { path: "/authentication", name: "Athentication", component: Blanklayout },
    { path: '/', name: 'Dashboard', component: Fulllayout }
    
];

export default indexRoutes;

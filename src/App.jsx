import { useEffect, useState } from 'react'
import './index.css'
import Layout from './components/Layout.jsx'
import Sidebar from './components/Sidebar.jsx'
import Panel from './components/Panel.jsx'

import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Service from './sections/Service.jsx'

export default function App() {
  const getInitial = () => (location.hash?.slice(1) || 'about');
  const [active, setActive] = useState(getInitial);

  useEffect(() => {
    const onHash = () => setActive(getInitial());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleChange = (id) => {
    if (location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    setActive(id);
  };

  return (
    <Layout sidebar={<Sidebar />}>
      <Panel active={active} onChange={handleChange}>
        {active === 'about' && (<><About /></>)}
        {active === 'projects' && <Projects />}
        {active === 'service' && <Service/>}
      </Panel>
    </Layout>
  );
}

import { useEffect, useState } from 'react';
import './index.css';

// Componentes y Hooks
import Layout from './components/Layout.jsx';
import SidebarDesktop from './components/SidebarDesktop.jsx';
import SidebarMobile from './components/SidebarMobile.jsx';
import useScreenSize from './hooks/useScreenSize.jsx'; 
import Panel from './components/Panel.jsx';

// Secciones
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Service from './sections/Service.jsx';

export default function App() {
  const getInitial = () => (location.hash?.slice(1) || 'about');
  const [active, setActive] = useState(getInitial);

  // Usamos 900px como breakpoint unificado con el CSS.
  const { isMobile } = useScreenSize(900);

  useEffect(() => {
    const onHash = () => setActive(getInitial());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleChange = (id) => {
    if (location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    setActive(id);
  };

  // Definimos qué sidebar usar en el Layout. En móvil, pasamos 'null' o 'undefined'.
  const sidebarContentForLayout = isMobile ? null : <SidebarDesktop />;

  // Definimos el Layout principal con el Panel
  const LayoutComponent = (
    <Layout sidebar={sidebarContentForLayout}> 
      <Panel active={active} onChange={handleChange}>
        {active === 'about' && (<><About /></>)}
        {active === 'projects' && <Projects />}
        {active === 'service' && <Service />}
      </Panel>
    </Layout>
  );

  return (
    <>
      {/* RENDERIZACIÓN CONDICIONAL DE LA CARD MÓVIL:
        Si es móvil, renderizamos el SidebarMobile FUERA DEL LAYOUT GRID.
      */}
      {isMobile && <SidebarMobile />}

      {/* Renderizamos el Layout (que contendrá el SidebarDesktop en pantallas grandes) */}
      {LayoutComponent}
    </>
  );
}
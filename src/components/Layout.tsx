import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav/HeaderNav';
import HtmlLangUpdater from './HtmlLangUpdater';

export const Layout = () => {
  return (
    <>
      <HtmlLangUpdater />
      <HeaderNav />
      <section>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

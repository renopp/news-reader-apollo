import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const ScrollToTop = ({children, location: {pathname}}) => {
  useEffect(() => {
    window.scrollTo({behavior: 'smooth', top: 0});
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);

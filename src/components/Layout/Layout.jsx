//Internal Lib Import
import Navigaion from "../Navigaion/Navigaion";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigaion />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;

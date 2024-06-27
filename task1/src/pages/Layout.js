import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="grid">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;

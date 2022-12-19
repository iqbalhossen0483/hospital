import { Routes, Route, useLocation } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import NotFoundPage from "./component/Appointment/NotFoundPage/NotFoundPage";
import ContactUs from "./component/ContactUs/ContactUs";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import LogIn from "./component/LogIn/LogIn";
import MyAccount from "./component/MyAccount";
import PrivateRoute from "./component/PrivateRouter/PrivateRoute";
import ServiceDetails from "./component/ServiceDetails/ServiceDetails";
import SignUp from "./component/SignUp/SignUp";
import AddDoctors from "./Deshboard/AddDoctors";
import AddGallery from "./Deshboard/AddGallery";
import AddServices from "./Deshboard/AddServices";
import Desboard from "./Deshboard/Desboard";
import DesboardGallery from "./Deshboard/DesboardGallery";
import DesboardService from "./Deshboard/DesboardService";
import DesbordDoctors from "./Deshboard/DesbordDoctors";
import "./App.css";
import EditDoctors from "./Deshboard/EditDoctor";
import EditServices from "./Deshboard/EditService";

function App() {
  const location = useLocation();

  return (
    <div>
      <AuthProvider>
        {location.pathname !== "/" && <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/service/:id'
            element={<PrivateRoute element={<ServiceDetails />} />}
          />
          <Route
            path='/contact-us'
            element={<PrivateRoute element={<ContactUs />} />}
          />
          <Route
            path='/my-account'
            element={<PrivateRoute element={<MyAccount />} />}
          />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route
            path='/admin'
            element={<PrivateRoute element={<Desboard />} />}
          >
            <Route path='service' element={<DesboardService />} />
            <Route path='doctor' element={<DesbordDoctors />} />
            <Route path='gallery' element={<DesboardGallery />} />
            <Route path='add-service' element={<AddServices />} />
            <Route path='editservice/:id' element={<EditServices />} />
            <Route path='add-doctor' element={<AddDoctors />} />
            <Route path='editdoctor/:id' element={<EditDoctors />} />
            <Route path='add-gallery' element={<AddGallery />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  Container,
  MainPage,
  Dashboard,
  Login,
  PrivateRoute,
  LoaderScreen,
} from "./Components/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "./redux/projectsSlice";
import usePageLoader from "./hooks/usePageLoader";

const App = () => {
  const dispatch = useDispatch();
  const { data: projects, loadingFetch, errorFetch } = useSelector(
    (state) => state.projects
  );
  const [showMain, setShowMain] = useState(false);

  // جلب المشاريع
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // روابط الصور للـ PageLoader
  const images = Array.isArray(projects) ? projects.map((p) => p.image_url) : [];
  const isImagesReady = usePageLoader(images);

  // الصفحة جاهزة إذا البيانات جاهزة والصور جاهزة
  const isPageReady = !loadingFetch && Array.isArray(projects) && isImagesReady;

  // إعادة محاولة
  const handleRetry = () => {
    dispatch(fetchProjects());
  };

  return (
    <Router>
      <Container>
        {!showMain && (
          <LoaderScreen
            isPageReady={isPageReady}
            loadError={!!errorFetch}
            onRetry={handleRetry}
            onFinish={() => setShowMain(true)}
          />
        )}

        {showMain && (
          <Routes>
            <Route path="/" element={<MainPage projects={projects} />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </Container>
    </Router>
  );
};

export default App;
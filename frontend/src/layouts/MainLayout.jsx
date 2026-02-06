import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="mt-8 border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-gray-500">
          We help you understand how ATS systems evaluate resumes. We do not
          guarantee job placement or interviews.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

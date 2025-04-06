
import Navbar from '@/components/Navbar';
import BitmanGallery from '@/components/BitmanGallery';

const BitmanMvpPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <BitmanGallery />
    </div>
  );
};

export default BitmanMvpPage;

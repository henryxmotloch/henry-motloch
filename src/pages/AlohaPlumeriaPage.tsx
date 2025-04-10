
import Navbar from '@/components/Navbar';
import AlohaPlumeriaGallery from '@/components/AlohaPlumeriaGallery';

const AlohaPlumeriaPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <AlohaPlumeriaGallery />
    </div>
  );
};

export default AlohaPlumeriaPage;

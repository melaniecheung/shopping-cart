import Maps from '../components/Maps';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col justify-between h-[90vh]'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-20'>
          <h2 className='text-2xl font-bold'>About Us</h2>
          <h3 className='mt-5 text-xl font-semibold'>Address: 1234 Waterloo St, Disney World, Canada</h3>
          <p>Phone: 604-123-456</p>
          <p>Email: info@fakestore.com</p>
          <h3 className='mt-5 text-xl font-semibold'>Opening Hours:</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 8:00 AM - 11:00 PM</p>
          <p className='mt-5 font-style: italic'>Built with Fake Store API</p>
        </div>
        <div className='flex-1 mx-10 mt-5'>
          <Maps />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

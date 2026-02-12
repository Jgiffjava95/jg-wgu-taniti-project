import React from 'react';
import ReusableList from '../ReusableList';
import PageHeader from '../PageHeader';
import SecondaryNav from '../SecondaryNav';
import airImg from '../../assets/island-air-services.jpg';
import cruiseImg from '../../assets/yellow-leaf-cruise-dock.jpg';
import busImg from '../../assets/public-bus-system.jpg';
import taxiImg from '../../assets/taniti-taxis-and-rentals.jpg';
import bikeImg from '../../assets/bike-rentals.jpg';

const Transportation = () => {
  const arrivalItems = [
    {
      title: 'Island Air Services',
      image: airImg,
      description: 'Taniti is served by a small airport accommodating small jets and propeller planes. Expansion is underway for larger jets!',
      buttonText: 'Flight Info',
      onButtonClick: () => alert('Showing flight information...')
    },
    {
      title: 'Yellow Leaf Cruise Dock',
      image: cruiseImg,
      description: 'A small cruise ship docks in Yellow Leaf Bay one night per week. A beautiful way to arrive or depart.',
      buttonText: 'Cruise Schedule',
      onButtonClick: () => alert('Viewing cruise schedule...')
    }
  ];

  const groundItems = [
    {
      title: 'Public Bus System',
      image: busImg,
      description: 'Buses serve Taniti City from 5 a.m. to 11 p.m. every day. Private buses are available for the rest of the island.',
      buttonText: 'Bus Routes',
      onButtonClick: () => alert('Showing bus routes...')
    },
    {
      title: 'Taniti Taxis & Rentals',
      image: taxiImg,
      description: 'Taxis are available in Taniti City. Rental cars can be booked near the airport for more independence.',
      buttonText: 'Book a Ride',
      onButtonClick: () => alert('Opening rental booking...')
    },
    {
      title: 'Bike Rentals',
      image: bikeImg,
      description: 'Explore flat and walkable Taniti City on two wheels. Helmets are available and required by law.',
      buttonText: 'Rent a Bike',
      onButtonClick: () => alert('Locating bike vendors...')
    }
  ];

  const segments = [
    { title: 'Arriving', id: 'arriving' },
    { title: 'Ground Transport', id: 'ground' }
  ];

  return (
    <div>
      <PageHeader title="Transportation" />
      <SecondaryNav segments={segments} />

      <h2 id="arriving" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>Arriving in Taniti</h2>
      <p style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto 20px auto', textAlign: 'center', lineHeight: '1.6' }}>
        Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. 
        Taniti is served by a small airport that can accommodate small jets and propeller planes.
      </p>
      <ReusableList items={arrivalItems} />

      <h2 id="ground" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '10px' }}>Ground Transportation</h2>
      <p style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto 20px auto', textAlign: 'center', lineHeight: '1.6' }}>
        Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. 
        Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. 
        Taniti City and Merriton Landing are very walkable.
      </p>
      <ReusableList items={groundItems} />
    </div>
  );
};

export default Transportation;

import React from 'react';
import ReusableList from '../ReusableList';
import PageHeader from '../PageHeader';
import SecondaryNav from '../SecondaryNav';
import resortImg from '../../assets/taniti-resort-and-spa.jpg';
import hostelImg from '../../assets/ocean-breeze-hostel.jpg';
import bbImg from '../../assets/yellow-leaf-bed-and-breakfast.jpg';
import hotelImg from '../../assets/merriton-landing-hotel.jpg';
import centralHotelImg from '../../assets/taniti-city-central-hotel.jpg';
import bayviewImg from '../../assets/bayview-suites.jpg';
import gardenBBImg from '../../assets/tropical-garden-b&b.jpg';
import seasideBBImg from '../../assets/the-seaside-inn-b&b.jpg';
import backpackersImg from '../../assets/taniti-backpackers.jpg';

const Lodging = () => {
  const hotelItems = [
    {
      title: 'Taniti Resort & Spa',
      image: resortImg,
      description: 'Our luxurious four-star resort offering premium amenities and breathtaking ocean views.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Taniti Resort...')
    },
    {
      title: 'Merriton Landing Hotel',
      image: hotelImg,
      description: 'A modern hotel located in the rapidly developing Merriton Landing area, close to all the action.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Merriton Landing Hotel...')
    },
    {
      title: 'Taniti City Central Hotel',
      image: centralHotelImg,
      description: 'Conveniently located in the heart of the city, perfect for those who want to be close to native architecture and local shops.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Taniti City Central Hotel...')
    },
    {
      title: 'Bayview Suites',
      image: bayviewImg,
      description: 'Spacious suites overlooking Yellow Leaf Bay, offering some of the best sunset views on the island.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Bayview Suites...')
    }
  ];

  const bbItems = [
    {
      title: 'Yellow Leaf Bed & Breakfast',
      image: bbImg,
      description: 'One of our many charming, family-owned B&Bs offering a personal touch and home-cooked breakfast.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Yellow Leaf B&B...')
    },
    {
      title: 'Tropical Garden B&B',
      image: gardenBBImg,
      description: 'Nestled in a lush garden setting, this B&B offers a peaceful retreat with exotic plants and local charm.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Tropical Garden B&B...')
    },
    {
      title: 'The Seaside Inn B&B',
      image: seasideBBImg,
      description: 'A cozy, family-run inn located just steps away from the white sandy beaches of Yellow Leaf Bay.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at The Seaside Inn B&B...')
    }
  ];

  const hostelItems = [
    {
      title: 'Ocean Breeze Hostel',
      image: hostelImg,
      description: 'An inexpensive and social lodging option, perfect for backpackers and budget travelers.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Ocean Breeze...')
    },
    {
      title: 'Taniti Backpackers',
      image: backpackersImg,
      description: 'A budget-friendly hostel located near the rainforest trails, offering dormitory-style accommodations and a shared kitchen.',
      buttonText: 'Check Availability',
      onButtonClick: () => alert('Checking availability at Taniti Backpackers...')
    }
  ];

  const segments = [
    { title: 'Hotels & Resorts', id: 'hotels' },
    { title: 'Bed & Breakfasts', id: 'bb' },
    { title: 'Hostels', id: 'hostels' }
  ];

  return (
    <div>
      <PageHeader title="Lodging" />
      <SecondaryNav segments={segments} />
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', lineHeight: '1.6' }}>
        <p>
          Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. 
          There are many small, family-owned hotels and a growing number of bed and breakfasts.
        </p>
        <p style={{ fontWeight: 'bold' }}>
          All types of lodging are strictly regulated and regularly inspected by the Tanitian government.
        </p>
      </div>

      <h2 id="hotels" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>Hotels & Resorts</h2>
      <ReusableList items={hotelItems} />

      <h2 id="bb" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '10px' }}>Bed & Breakfasts</h2>
      <ReusableList items={bbItems} />

      <h2 id="hostels" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '10px' }}>Hostels</h2>
      <ReusableList items={hostelItems} />
    </div>
  );
};

export default Lodging;

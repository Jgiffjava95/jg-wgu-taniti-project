import React from 'react';
import ReusableList from '../ReusableList';
import PageHeader from '../PageHeader';
import welcomeImg from '../../assets/welcome-to-taniti.jpg';
import cultureImg from '../../assets/our-culture.jpg';
import cityImg from '../../assets/taniti-city.jpg';

const Home = () => {
  const homeItems = [
    {
      title: 'Welcome to Taniti',
      image: welcomeImg,
      description: 'Taniti is a small, tropical island in the Pacific with varied terrain including sandy and rocky beaches, a lush tropical rainforest, and a mountainous interior with an active volcano.',
      buttonText: 'Learn More',
      onButtonClick: () => alert('Welcome to our island paradise!')
    },
    {
      title: 'Our Culture',
      image: cultureImg,
      description: 'With an indigenous population of about 20,000, Taniti has a rich history dominated by fishing and agriculture, now welcoming visitors from around the world.',
      buttonText: 'Explore History',
      onButtonClick: () => alert('Discover the Tanitian heritage.')
    },
    {
      title: 'Taniti City',
      image: cityImg,
      description: 'Most tourists spend their time in Taniti City, which boasts native architecture and nearby white, sandy beaches encircling Yellow Leaf Bay.',
      buttonText: 'View City Map',
      onButtonClick: () => alert('Showing Taniti City map...')
    }
  ];

  return (
    <div>
      <PageHeader title="Home" />
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', lineHeight: '1.6' }}>
        <p>
          Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, 
          the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, 
          and a mountainous interior that includes a small, active volcano.
        </p>
        <p>
          Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, 
          most the Tanitian economy was dominated by fishing or agriculture.
        </p>
      </div>
      <ReusableList items={homeItems} />
    </div>
  );
};

export default Home;

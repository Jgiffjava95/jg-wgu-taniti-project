import React from 'react';
import ReusableList from '../ReusableList';
import PageHeader from '../PageHeader';
import SecondaryNav from '../SecondaryNav';
import volcanoImg from '../../assets/volcano-tours.jpg';
import rainforestImg from '../../assets/rainforest-exploration.jpg';
import beachImg from '../../assets/beaches-&-snorkeling.jpg';
import entertainmentImg from '../../assets/merriton-landing-entertainment.jpg';
import fishingImg from '../../assets/fishing-&-boat-tours.jpg';

const Activities = () => {
  const sightSeeingItems = [
    {
      title: 'Volcano Tours',
      image: volcanoImg,
      description: 'Visit Taniti’s active volcano for a once-in-a-lifetime experience. Guided hikes and helicopter rides available.',
      buttonText: 'Book Tour',
      onButtonClick: () => alert('Booking volcano tour...')
    },
    {
      title: 'Rainforest Exploration',
      image: rainforestImg,
      description: 'Hike through lush tropical rainforests or go zip-lining for an adrenaline rush.',
      buttonText: 'See Trails',
      onButtonClick: () => alert('Showing rainforest trails...')
    },
    {
      title: 'Beaches & Snorkeling',
      image: beachImg,
      description: 'Enjoy both sandy and rocky beaches encircling Yellow Leaf Bay. Perfect for swimming and snorkeling.',
      buttonText: 'Beach Guide',
      onButtonClick: () => alert('Opening beach guide...')
    }
  ];

  const entertainmentItems = [
    {
      title: 'Merriton Landing Entertainment',
      image: entertainmentImg,
      description: 'Visit the local history museum, pubs, microbreweries, dance clubs, arcades, and art galleries.',
      buttonText: 'Explore Area',
      onButtonClick: () => alert('Exploring Merriton Landing...')
    },
    {
      title: 'Fishing & Boat Tours',
      image: fishingImg,
      description: 'Go on chartered fishing tours or take a scenic boat tour of the island.',
      buttonText: 'Check Charters',
      onButtonClick: () => alert('Viewing fishing charters...')
    }
  ];

  const segments = [
    { title: 'Sightseeing', id: 'sightseeing' },
    { title: 'Entertainment', id: 'entertainment' }
  ];

  return (
    <div>
      <PageHeader title="Activities & Entertainment" />
      <SecondaryNav segments={segments} />

      <h2 id="sightseeing" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>Sightseeing</h2>
      <p style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto 20px auto', textAlign: 'center', lineHeight: '1.6' }}>
        Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. 
        Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.
      </p>
      <ReusableList items={sightSeeingItems} />

      <h2 id="entertainment" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '10px' }}>Entertainment</h2>
      <p style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto 20px auto', textAlign: 'center', lineHeight: '1.6' }}>
        Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. 
        However, there are other things to do, including visiting a local history museum, pubs, microbreweries, dance clubs, seeing a movie, and more. 
        Many of these activities are located in Merriton Landing, a rapidly developing area on the north side of Yellow Leaf Bay.
      </p>
      <ReusableList items={entertainmentItems} />
    </div>
  );
};

export default Activities;

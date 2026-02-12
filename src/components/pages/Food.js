import React from 'react';
import ReusableList from '../ReusableList';
import PageHeader from '../PageHeader';
import SecondaryNav from '../SecondaryNav';

// Restaurant Images
import fishRiceImg from '../../assets/island-fish-&-rice.jpg';
import blueLagoonImg from '../../assets/blue-lagoon-seafood.jpg';
import coralReefImg from '../../assets/coral-reef-kitchen.jpg';
import oceanHarvestImg from '../../assets/ocean-harvest-grill.jpg';
import fishermanImg from '../../assets/fishermans-plate.jpg';
import dinerImg from '../../assets/the-american-diner.jpg';
import burgerImg from '../../assets/main-street-burgers.jpg';
import steakhouseImg from '../../assets/yellow-leaf-steak-house.jpg';
import asianImg from '../../assets/pan-aisian-delights.jpg';
import zenImg from '../../assets/zen-garden-bistro.jpg';

// Grocery Images
import supermarketImg from '../../assets/taniti-supermarket.jpg';
import freshMarketImg from '../../assets/island-fresh-market.jpg';
import cityGroceryImg from '../../assets/city-grocery.jpg';
import suppliesImg from '../../assets/yellow-leaf-supplies.jpg';
import convStoreImg from '../../assets/24-7-convenience-store.jpg';

const Food = () => {
  const restaurantItems = [
    {
      title: 'Island Fish & Rice',
      image: fishRiceImg,
      description: 'Our first local favorite serving the freshest Tanitian fish and rice dishes.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Showing Island Fish & Rice menu...')
    },
    {
      title: 'Blue Lagoon Seafood',
      image: blueLagoonImg,
      description: 'One of our five local gems specializing in traditional fish and rice recipes.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Showing Blue Lagoon Seafood menu...')
    },
    {
      title: 'Coral Reef Kitchen',
      image: coralReefImg,
      description: 'A popular local spot where fish and rice are the stars of every meal.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Showing Coral Reef Kitchen menu...')
    },
    {
      title: 'Ocean Harvest Grill',
      image: oceanHarvestImg,
      description: 'Freshly caught fish served with aromatic Tanitian rice in a family-friendly setting.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Showing Ocean Harvest Grill menu...')
    },
    {
      title: 'Fisherman\'s Plate',
      image: fishermanImg,
      description: 'Simple, authentic, and delicious. The fifth of our local fish and rice staples.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Showing Fisherman\'s Plate menu...')
    },
    {
      title: 'The American Diner',
      image: dinerImg,
      description: 'One of three American-style restaurants on the island, offering classic burgers and fries.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Redirecting to online ordering...')
    },
    {
      title: 'Main Street Burgers',
      image: burgerImg,
      description: 'A classic American burger joint, perfect for a quick and satisfying meal.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Showing Main Street Burgers menu...')
    },
    {
      title: 'Yellow Leaf Steakhouse',
      image: steakhouseImg,
      description: 'The third of our American-style options, specializing in grilled steaks and sides.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Opening reservation system...')
    },
    {
      title: 'Pan-Asian Delights',
      image: asianImg,
      description: 'Experience exotic flavors at one of our two premier Pan-Asian cuisine spots.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Opening reservation system...')
    },
    {
      title: 'Zen Garden Bistro',
      image: zenImg,
      description: 'Our second Pan-Asian destination, offering a serene atmosphere and diverse menu.',
      buttonText: 'See Menu',
      onButtonClick: () => alert('Showing Zen Garden Bistro menu...')
    }
  ];

  const groceryItems = [
    {
      title: 'Taniti Supermarket',
      image: supermarketImg,
      description: 'Our largest grocery store, providing a wide variety of local and imported goods.',
      buttonText: 'Locate Store',
      onButtonClick: () => alert('Open 8 AM - 10 PM daily')
    },
    {
      title: 'Island Fresh Market',
      image: freshMarketImg,
      description: 'Our second large supermarket, featuring a great selection of local produce.',
      buttonText: 'Locate Store',
      onButtonClick: () => alert('Open 7 AM - 9 PM daily')
    },
    {
      title: 'City Grocery',
      image: cityGroceryImg,
      description: 'A smaller, convenient grocery store located in the heart of Taniti City.',
      buttonText: 'Locate Store',
      onButtonClick: () => alert('Located on Main Street, Taniti City.')
    },
    {
      title: 'Yellow Leaf Supplies',
      image: suppliesImg,
      description: 'One of our two smaller grocery shops, perfect for quick pickups near the bay.',
      buttonText: 'Locate Store',
      onButtonClick: () => alert('Located near Merriton Landing.')
    },
    {
      title: '24/7 Convenience Store',
      image: convStoreImg,
      description: 'Open all day and night for your last-minute needs and snacks.',
      buttonText: 'Locate Store',
      onButtonClick: () => alert('Located in the heart of Taniti City.')
    }
  ];

  const segments = [
    { title: 'Restaurants', id: 'restaurants' },
    { title: 'Grocery', id: 'grocery' }
  ];

  return (
    <div>
      <PageHeader title="Food & Dining" />
      <SecondaryNav segments={segments} />
      
      <h2 id="restaurants" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>Restaurants</h2>
      <p style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto 20px auto', textAlign: 'center', lineHeight: '1.6' }}>
        Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.
      </p>
      <ReusableList items={restaurantItems} />

      <h2 id="grocery" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '10px' }}>Grocery</h2>
      <p style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto 20px auto', textAlign: 'center', lineHeight: '1.6' }}>
        Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.
      </p>
      <ReusableList items={groceryItems} />
    </div>
  );
};

export default Food;

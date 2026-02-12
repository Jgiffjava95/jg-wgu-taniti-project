import React from 'react';
import ReusableList from '../ReusableList';
import PageHeader from '../PageHeader';

const FAQ = () => {
  const faqItems = [
    {
      title: 'Power & Electricity',
      description: 'Power outlets are 120 volts, the same as in the United States.',
    },
    {
      title: 'Alcohol Regulations',
      description: 'Alcohol is not allowed to be served or sold between midnight and 9:00 a.m. The drinking age is 18.',
    },
    {
      title: 'Language',
      description: 'English is spoken fluently by many younger Tanitians and at the hospital. Rural areas speak less English.',
    },
    {
      title: 'Currency & Banking',
      description: 'We use the U.S. dollar, but also accept euros and yen. Major credit cards are widely accepted.',
    },
    {
      title: 'Safety & Health',
      description: 'Violent crime is rare, but watch out for pickpocketing. We have one hospital and several clinics.',
    }
  ];

  return (
    <div>
      <PageHeader title="Frequently Asked Questions" />
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', lineHeight: '1.6' }}>
        <p>
          Find answers to common questions about visiting Taniti. From currency to safety, we've got you covered.
        </p>
      </div>
      <ReusableList items={faqItems} />
    </div>
  );
};

export default FAQ;

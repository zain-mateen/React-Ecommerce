import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import CollectionSection from '../../components/CollectionSection/CollectionSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import LimitedEditionSection from '../../components/LimitedEditionSection/LimitedEditionSection';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import LimitedItemSection from '../../components/LimitedItemSection/LimitedItemSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <CollectionSection />
            <ProductSection />
            <LimitedEditionSection />
            <LimitedItemSection />
            <InstagramSection />
        </>
    );
}

export default Home;

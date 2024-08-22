import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection.component';
import CollectionSection from '../../components/CollectionSection/CollectionSection.component';
import ProductSection from '../../components/ProductSection/ProductSection.component';
import LimitedEditionSection from '../../components/LimitedEditionSection/LimitedEditionSection.component';
import LimitedItemSection from '../../components/LimitedItemSection/LimitedItemSection.component';
import InstagramSection from '../../components/InstagramSection/InstagramSection.component';

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

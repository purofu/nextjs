import React from 'react';
import { Button } from './Button';
import { ContainerLink } from './ContainerLink';
import { CtaIconButton } from './CtaIconButton';
import { AnchorLinks } from './AnchorLinks';
import { Pagination } from './Pagination';
import { CarouselIndicator } from './CarouselIndicator';
import { SingleNavLinks } from './SingleNavLinks';
import { DetailedNavLinks } from './DetailedNavLinks';
import { Selector } from './Selector';
import { Filter } from './Filter';

const ShowcasePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Showcase Page</h1>
            <hr />
            <h2>Button</h2>
            <Button />
            <hr />
            <h2>Container Link</h2>
            <ContainerLink />
            <hr />
            <h2>CTA Icon Button</h2>
            <CtaIconButton />
            <hr />
            <h2>Anchor Links</h2>
            <AnchorLinks />
            <hr />
            <h2>Pagination</h2>
            <Pagination />
            <hr />
            <h2>Carousel Indicator</h2>
            <CarouselIndicator />
            <hr />
            <h2>Single Nav Links</h2>
            <SingleNavLinks />
            <hr />
            <h2>Detailed Nav Links</h2>
            <DetailedNavLinks />
            <hr />
            <h2>Selector</h2>
            <Selector />
            <hr />
            <h2>Filter</h2>
            <Filter />
        </div>
    );
};

export default ShowcasePage;

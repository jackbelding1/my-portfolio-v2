import React from 'react';
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Gatsby Theme Portfolio Minimal" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="about" heading="My Story" />
                <InterestsSection sectionId="details" heading="Skills" />
                <ProjectsSection sectionId="features" heading="Projects" />
                <ContactSection sectionId="github" heading="Let's Build The Future" />
            </Page>
        </>
    );
}

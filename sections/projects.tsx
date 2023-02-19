import {Box, Container, Section, SubText, SubTextLight, Title} from "./tools-elements";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Projects = () => {

    // const canUseDOM = typeof window !== 'undefined';
    // const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

        useLayoutEffect(() => {
            let element = ref.current;

            ScrollTrigger.create({
                trigger: element,
                start: 'top top',
                end: 'bottom top',
                pin: true,
                pinSpacing: false,
                scrub: true,
                markers: false,
            });

            return () => {
                ScrollTrigger.killAll();
            };
        }, []);

    return (
        <Section ref={ref} id="projects">
            <Container>
                <Box>
                    <Image src="/projects/foodyshare.png" alt="Foodyshare project image" width={600} height={500}/>
                </Box>
                <Box>
                    <Title>
                        FoodyShare
                    </Title>
                    <SubText>
                        A recipe curation and sharing app for Android.
                    </SubText>
                    <SubTextLight>
                        FoodyShare is an application that enables you to search for recipes, interact
                        with curators, access specific food categories, and save desired recipes to lists, all in one
                        place.
                    </SubTextLight>
                    {/*<Stack direction="row" spacing={2}>*/}
                    {/*    <Chip component="a" color="primary" href="https://flutter.dev/" target="_blank" size="medium"*/}
                    {/*          label="Flutter" avatar={<Avatar src="/flutter.svg"/>} clickable/>*/}
                    {/*    <Chip component="a" color="primary" href="https://dart.dev/" target="_blank" size="medium"*/}
                    {/*          label="Dart" avatar={<Avatar src="/dart.svg"/>} clickable/>*/}
                    {/*    <Chip component="a" color="primary" href="https://firebase.google.com/" target="_blank"*/}
                    {/*          size="medium" label="Firebase" avatar={<Avatar src="/firebase.svg"/>} clickable/>*/}
                    {/*</Stack>*/}
                    <Link
                        href='https://play.google.com/store/apps/details?id=com.samwahome.foodshare.food_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                        target="_blank"><Image
                        alt='Get it on Google Play'
                        src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                        width={200} height={100}/></Link>
                </Box>
            </Container>
        </Section>
    );
}

export default Projects
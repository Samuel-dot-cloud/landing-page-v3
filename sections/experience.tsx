import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {LargeTitle, Section, SubText, SubTextLight, Title} from "./experience-elements";
import {Tabs} from '@mui/material';

interface TabPanelProps {
    details: string[];
    position: string;
    timePeriod: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {position, timePeriod, details, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3, m: 5, width: 500, height: '100%'}}>
                    <Title>
                        {position}
                    </Title>
                    <SubText>
                        {timePeriod}
                    </SubText>
                    {details.map((detail, detailIndex) =>
                        <SubTextLight key={`${index}-${detailIndex}`}>
                            {detail}
                        </SubTextLight>
                    )}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const Experience = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Section id="experience">
            <LargeTitle>
                Experience
            </LargeTitle>
            <Box
                sx={{flexGrow: 1, display: 'flex', mt: 2}}
            >
                <Tabs
                    orientation="vertical"
                    value={value}
                    variant="fullWidth"
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="Vertical tabs example"
                    sx={{borderRight: 1, borderColor: 'divider'}}
                    centered={true}>
                    <Tab label="Kino AI" {...a11yProps(0)} />
                    <Tab label="Senseg" {...a11yProps(1)} />
                </Tabs>
                <TabPanel
                    value={value}
                    index={0}
                    details={['- Write modern and maintainable code for an AI powered video processing web-based platform.',
                        '- Work with a variety of different languages, platforms and frameworks such as NextJS, Typescript and Prisma',
                        '- Communicate with a multi-disciplinary team of engineers and managers on a daily basis']}
                    position="Software Engineer @Kino AI"
                    timePeriod="Jan 2023 - Present"/>
                <TabPanel
                    value={value}
                    index={1}
                    details={['- Built up the Senseg V1 app from the ground up using Flutter with Dart in order to leverage the power of Android and iOS while utilizing only one codebase.',
                        '- Built up the Senseg V2 public-facing website using React and Material UI, which would serve as a point of reference for users looking to learn more about the service.',
                        '- Built RESTful APIs using NodeJS to verify phone numbers during sign-up on mobile, and also power the merchant charge experience on the web.',
                        '- Built internal tools using NodeJS and React to process and approve/deny transaction requests.',
                        'Conducted tests, reviewed, and contributed code for the Senseg V2 app.']}
                    position="Software Engineer @Senseg"
                    timePeriod="Jan 2022 - Dec 2022"/>
            </Box>
        </Section>
    );

}

export default Experience;
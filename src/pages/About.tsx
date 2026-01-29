import HeroBook from '../components/HeroBook';
import Layout from '../components/Layout';

const bioText = "I am a researcher and developer dedicated to the craft of intelligent systems. With a background in Computer Science and Fine Arts, I explore the space where logic meets intuition. My work spans academic research in AI, creative coding experiments (vibecoding), and the development of tools that empower human creativity. I believe that code is the closest thing we have to magic.";

const About = () => (
    <Layout variant="emerald">
        <HeroBook staticText={bioText} disableTyping={true} />
    </Layout>
);

export default About;

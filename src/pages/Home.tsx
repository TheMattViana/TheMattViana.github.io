import HeroBook from '../components/HeroBook';
import TarotFeatured from '../components/TarotFeatured';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout variant="cream">
            <HeroBook />
            <TarotFeatured />
        </Layout>
    );
};

export default Home;


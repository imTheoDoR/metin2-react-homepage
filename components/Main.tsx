import News from "./News";
import RankingContainer from "./ranking/RankingContainer";
import Statistics from "./Statistics";
import Container from "./elements/Container";

const Main = () => {
    return (
        <Container bgColor="bg-dark">
            <Statistics />
            <div className="max-w-[1200px] mx-auto py-10">
                <News />
                <RankingContainer />
            </div>
        </Container>
    );
};

export default Main;

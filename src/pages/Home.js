import GameImage from "../components/GameImage";

const Home = ({ setTimerOn }) => {
  return (
    <div>
      <GameImage setTimerOn={setTimerOn} />
    </div>
  );
};

export default Home;

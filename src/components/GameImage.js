import { useEffect } from "react";
import gameImage from "../assets/game-image.jpeg";
import { doc, getDoc, addDoc, collection } from "../firestore";
import { db } from "../firebase-config";

const GameImage = ({ setTimerOn }) => {
  useEffect(() => {
    const image = document.querySelector("#game-image");
    image.addEventListener("click", checkCoordinates);
    return () => image.removeEventListener("click", checkCoordinates);
  });

  const checkCoordinates = async (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e;

    const x = Math.round((offsetX / width) * 10000) / 100;
    const y = Math.round((offsetY / height) * 10000) / 100;

    console.log(x + " " + y);

    const docRef = doc(db, "coords", "erTsvuY2sUsupdDH9cCg");
    const docSnap = await getDoc(docRef);

    const { lowerBoundX, upperBoundX, lowerBoundY, upperBoundY } =
      docSnap.data();

    if (
      x >= lowerBoundX &&
      x <= upperBoundX &&
      y >= lowerBoundY &&
      y <= upperBoundY
    ) {
      setTimerOn(false);
      try {
        await addDoc(collection(db, "high-scores"), {
          name: "bentesting123",
          score: "TESTING!!",
        });
      } catch (error) {
        console.error("Error writing new message to Firebase Database", error);
      }
    }
  };

  return (
    <img id="game-image" src={gameImage} alt="popular game of where's waldo" />
  );
};

export default GameImage;

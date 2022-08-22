import { db } from "../firebase-config";
import { query, collection, orderBy, onSnapshot } from "../firestore";
import { useEffect, useState } from "react";

const HighScore = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const highScoreQuery = query(
      collection(db, "high-scores"),
      orderBy("score")
    );

    const unsubscribe = onSnapshot(highScoreQuery, function (snapshot) {
      setHighScores(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {highScores.map((entry) => {
        return "name " + entry.name + "score " + entry.score;
      })}
    </div>
  );
};

export default HighScore;

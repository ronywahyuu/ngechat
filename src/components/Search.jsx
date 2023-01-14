import React, { useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    console.log(username);

    if (!username) setUser(null);

    const users = collection(db, "users");

    const q = query(users, where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        console.log(doc.data());
        setUser(doc.data());
      });
    } catch (err) {
      // console.log(err);
      setUser(null);
      setError(err);
    }
  };
  const handleKey = async (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combineId));

      if (!res.exists()) {
        // create a chat in "chats" collection
        await setDoc(doc(db, "chats", combineId), {
          messages: [],
        });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err);
    }

    setUser(null);
    setUsername("");
  };
  return (
    <div className="search">
      <div className="searchWrapper">
        <div className="searchForm">
          <input
            type="text"
            name=""
            id=""
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Add friend by username"
          />
        </div>
        {error && <span>User not found</span>}
        {user && (
          <div className="userChat" onClick={handleSelect}>
            <img src={user?.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{user?.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

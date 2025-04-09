import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./friends-left.css";
import { useDispatch } from "react-redux";
import { openUpMessages } from "../../features/messageSlice";
import { setMessage } from "../../features/notificationSlice";

export default function FriendsLeft() {
  const myFriends = [
    {
      profilePic: "",
      nickname: "John",
    },
    {
      profilePic: "",
      nickname: "John",
    },
    {
      profilePic: "",
      nickname: "John",
    },
    {
      profilePic: "",
      nickname: "John",
    },
    {
      profilePic: "",
      nickname: "John",
    },
    {
      profilePic: "",
      nickname: "John",
    },
    {
      profilePic: "",
      nickname: "John",
    },
    {
      profilePic: "",
      nickname: "John",
    },
  ];
  const dispatch = useDispatch();

  const getMessages = (i: number) => {
    dispatch(openUpMessages(i as any));
    dispatch(setMessage({ error: true, text: "Error UI" }));
  };

  return (
    <div className="contacts-wrapper-main" id="mainDiv">
      <div className="contacts-wrapper">
        {myFriends.map((friend: any, index: number) => (
          <div
            onClick={() => getMessages(index)}
            className="contact-wrapper"
            key={index}
          >
            <div className="contact">
              <div className="img-name-wrap">
                <div className="img-wrap">
                  {/* {friend.connected && <div className="friend-active-alert"></div>} */}
                  <div className="profilePic-wrap">
                    {friend.profilePic != "" && (
                      <img
                        className="profilePic"
                        src={friend.profilePic || ""}
                        alt="Profile Pic"
                      />
                    )}
                    {friend.profilePic == "" && (
                      <div className="no-image">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="no-image-icon"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="name-status-wrap">
                  <h4 className="name-text">{friend.nickname}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}

        {myFriends.length === 0 && (
          <div className="no-friends-wrap">
            <h3>No Contacts Yet</h3>
          </div>
        )}
      </div>
      <div className="border-bottom"></div>
    </div>
  );
}

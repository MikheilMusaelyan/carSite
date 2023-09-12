import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './friends-left.css'

export default function FriendsLeft(props: any) {
  const [myFriends, setMyFriends] = useState([
    {
        profilePic: '',
        nickname: 'Datoie'
    },
    {
        profilePic: '',
        nickname: 'Datoie'
    },
    {
        profilePic: '',
        nickname: 'Datoie'
    },
    {
        profilePic: '',
        nickname: 'Datoie'
    },
    {
        profilePic: '',
        nickname: 'Datoie'
    },{
        profilePic: '',
        nickname: 'Datoie'
    },
    {
        profilePic: '',
        nickname: 'Datoie'
    },
    {
        profilePic: '',
        nickname: 'Datoie'
    }
  ])

  return (
    <div className="contacts-wrapper-main" id="mainDiv">
      <div className="contacts-wrapper">
        {myFriends.map((friend: any, index: number) => (
          <div
            className="contact-wrapper"
            key={index}
          >
            <div className="contact">
              <div className="img-name-wrap">
                <div className="img-wrap">
                  {/* {friend.connected && <div className="friend-active-alert"></div>} */}
                  <div className="profilePic-wrap">
                    {
                        friend.profilePic != '' && 
                        <img
                          className="profilePic"
                          src={friend.profilePic || ''}
                          alt="Profile Pic"
                        />
                    }
                    {
                        friend.profilePic == '' && 
                        <div className="no-image">
                            <FontAwesomeIcon icon={faUser} className="no-image-icon" />
                        </div>
                    }
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
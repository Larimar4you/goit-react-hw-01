import {
  profileContainer,
  profileWrapper,
  profileImage,
  profileUsername,
  profileTag,
  profileLocation,
  profileList,
  profileListItem,
  profileListItemText,
  profileListItemNumber,
} from '../profile/Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div>
        <div>
          <img src={image} alt="User avatar" />
          <p>{name}</p>
          <p>@pmarica</p>
          <p>Salvador, Brasil</p>
        </div>
        <ul>
          <li>
            <span>Followers</span>
            <span>1000</span>
          </li>
          <li>
            <span>Views</span>
            <span>2000</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.followers}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Profile;

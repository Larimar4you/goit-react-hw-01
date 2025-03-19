import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={s.profileContainer}>
        <div className={s.profileWrapper}>
          <img
            src={image}
            alt="User avatar"
            className={s.profileImage}
            width="150"
          />
          <p className={s.profileUsername}>{name}</p>
          <p className={s.profileTag}>@{tag}</p>
          <p className={s.profileLocation}>{location}</p>
        </div>
        <ul className={s.profileList}>
          <li className={s.profileListItem}>
            <span className={s.profileListText}>Followers: </span>
            <span className={s.profileListText}>{stats.followers}</span>
          </li>
          <li className={s.profileListItem}>
            <span className={s.profileListText}>Views: </span>
            <span className={s.profileListText}>{stats.views}</span>
          </li>
          <li className={s.profileListItem}>
            <span className={s.profileListText}>Likes: </span>
            <span className={s.profileListText}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Profile;

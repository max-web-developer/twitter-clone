import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Kavlanov Max"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>
        <h1>Kavlanov Max</h1>
        <h2>@kavlanov_max</h2>

        <p>
          Developer at{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://www.linkedin.com/in/max-kavlanov-1a1788228/" target="_blank">
            @ddd.com
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Tashkent Uzbekistan
          </li>
          <li>
            <CakeIcon />
            Born on Jun 29, 2005
          </li>
        </ul>

        <Followage>
          <span>
            <strong>122 </strong>
            Following
          </span>
          <span>
            <strong>322 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;

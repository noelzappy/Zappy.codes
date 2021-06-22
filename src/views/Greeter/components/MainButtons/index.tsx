/**
 * MainButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ButtonLink from '../../../../components/ButtonLink';
import GHButton, { GHButtonProps } from '../../../../components/GHButton';
import { ContactItem } from '../../../../models';
import { getGHCredentials } from '../../../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  contactData: ContactItem[];
  repoUrl: string;
}

const MainButtons: React.FC<MainButtonsProps> = ({ contactData, repoUrl }) => {
  const classes = useStyles();

  const { repo, username } = getGHCredentials(repoUrl);

  const ghButtons: GHButtonProps[] = [
    // Follow button
    {
      resource: {
        endpoint: `https://api.github.com/users/${username}`,
        attr: 'followers',
      },
      href: `https://github.com/${username}`,
      title: `Follow @${username} on GitHub`,
      icon: ['fab', 'github'],
      size: 'lg',
      text: `Follow @${username}`,
    },
    // Stargazers button
    {
      resource: {
        endpoint: `https://api.github.com/repos/noelzappy/blog-p`,
        attr: 'stargazers_count',
      },
      href: `https://github.com/noelzappy/iReport-Ghana`,
      title: `Star noelzappy/iReport-Ghana on GitHub`,
      icon: 'star',
      size: 'sm',
      text: 'Star',
    },
  ];

  const mainContact = contactData.find((c) => c.isMain) as ContactItem;

  return (
    <div>
      <div>
        <div className={classes.root}>
          <div>
            {ghButtons.map((btn) => (
              <GHButton key={`gh-btn-${btn.resource.attr}`} {...btn} />
            ))}
          </div>
          <div>
            <ButtonLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=noelzappy@gmail.com&su=Contacting you from your website"
              title={`Send me an Email`}
              icon={mainContact.icon as IconProp}
              size="lg"
              text="Contact Me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainButtons;

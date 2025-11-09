import { Link } from 'react-router-dom';
import cn from 'classnames';

type TabItemProps = {
  tab: {
    id: string;
    title: string;
  };
  tabId?: string;
};

export const TabItem = ({ tab, tabId }: TabItemProps) => {
  return (
    <li data-cy="Tab" className={cn({ 'is-active': tabId === tab.id })}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};

import React from 'react';

export type TabType = {
  id: string;
  title: React.ReactNode;
};

type Props = {
  tabs: TabType[];
  activeTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === activeTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

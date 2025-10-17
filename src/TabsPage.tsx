import { Link, useParams } from 'react-router-dom';
import { Tabs } from 'mate-academy/react_tabs-js';
import { Tab } from './types/Tab';
import React from 'react';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <Tabs
        tabs={tabs.map(tab => ({
          id: tab.id,
          title: (
            <Link
              data-cy="Tab"
              to={`/tabs/${tab.id}`}
              className={tab.id === tabId ? 'is-active' : undefined }
            >
              {tab.title}
            </Link>
          ),
        }))}
        activeTabId={tabId || ''}
      />

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};

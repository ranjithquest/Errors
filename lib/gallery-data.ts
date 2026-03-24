export type ConnectorCatalogItem = {
  id: string;
  name: string;
  publisher: string;
  description: string;
  category: string;
  recommended?: boolean;
  logoColor: string;
  logoInitials: string;
  logoUrl?: string;
  logoBg?: string;
};

export const CATEGORIES = [
  'Created by your org',
  'Collaboration & communication',
  'Content management systems',
  'Customer relationship management',
  'Data visualisation',
  'Databases',
  'Enterprise resource planning',
  'File systems',
  'IT service management tools',
  'Sales & support',
  'Others',
] as const;

export const CONNECTOR_CATALOG: ConnectorCatalogItem[] = [
  // Recommended
  { id: 'azure-devops-work-items', name: 'Azure DevOps work items', publisher: 'Microsoft', description: 'Seamless issue tracking.', category: 'IT service management tools', recommended: true, logoColor: '#0078D4', logoInitials: 'AZ', logoUrl: 'https://logo.clearbit.com/dev.azure.com', logoBg: '#ffffff' },
  { id: 'confluence-cloud', name: 'Confluence cloud', publisher: 'Microsoft', description: 'Collaborative documentation and knowledge base platform.', category: 'Content management systems', recommended: true, logoColor: '#0052CC', logoInitials: 'CF', logoUrl: 'https://logo.clearbit.com/atlassian.com', logoBg: '#ffffff' },
  { id: 'enterprise-websites', name: 'Enterprise websites', publisher: 'Microsoft', description: 'Internal websites and intranets owned by your organization.', category: 'Content management systems', recommended: true, logoColor: '#107C10', logoInitials: 'EW', logoUrl: 'https://logo.clearbit.com/microsoft.com', logoBg: '#ffffff' },
  { id: 'file-share', name: 'File share', publisher: 'Microsoft', description: 'Traditional network file shares for accessing organizational files.', category: 'File systems', recommended: true, logoColor: '#FFB900', logoInitials: 'FS', logoUrl: 'https://logo.clearbit.com/microsoft.com', logoBg: '#ffffff' },
  { id: 'github-cloud-knowledge', name: 'Github cloud knowledge', publisher: 'Microsoft', description: 'Collaborate on code reviews with GitHub Pull Requests and issues.', category: 'Collaboration & communication', recommended: true, logoColor: '#24292E', logoInitials: 'GH', logoUrl: 'https://logo.clearbit.com/github.com', logoBg: '#ffffff' },
  { id: 'gong', name: 'Gong', publisher: 'Microsoft', description: 'Sales call transcripts to uncover actionable insights.', category: 'Sales & support', recommended: true, logoColor: '#A259FF', logoInitials: 'GO', logoUrl: 'https://logo.clearbit.com/gong.io', logoBg: '#ffffff' },
  { id: 'google-drive', name: 'Google drive', publisher: 'Microsoft', description: 'File storage and synchronization.', category: 'File systems', recommended: true, logoColor: '#4285F4', logoInitials: 'GD', logoUrl: 'https://logo.clearbit.com/google.com', logoBg: '#ffffff' },
  { id: 'jira-cloud', name: 'Jira cloud', publisher: 'Microsoft', description: 'Project management and issue tracking.', category: 'IT service management tools', recommended: true, logoColor: '#0052CC', logoInitials: 'JC', logoUrl: 'https://logo.clearbit.com/atlassian.com', logoBg: '#ffffff' },
  { id: 'servicenow-catalog', name: 'ServiceNow catalog', publisher: 'Microsoft', description: 'IT service request management.', category: 'IT service management tools', recommended: true, logoColor: '#62D84E', logoInitials: 'SN', logoUrl: 'https://logo.clearbit.com/servicenow.com', logoBg: '#ffffff' },
  { id: 'servicenow-knowledge', name: 'ServiceNow knowledge', publisher: 'Microsoft', description: 'ServiceNow knowledge articles.', category: 'IT service management tools', recommended: true, logoColor: '#62D84E', logoInitials: 'SK', logoUrl: 'https://logo.clearbit.com/servicenow.com', logoBg: '#ffffff' },
  { id: 'servicenow-tickets', name: 'ServiceNow tickets', publisher: 'Microsoft', description: 'Customer service ticketing system.', category: 'IT service management tools', recommended: true, logoColor: '#62D84E', logoInitials: 'ST', logoUrl: 'https://logo.clearbit.com/servicenow.com', logoBg: '#ffffff' },
  { id: 'slack', name: 'Slack', publisher: 'Microsoft', description: 'Messaging platform that enhances team collaboration.', category: 'Collaboration & communication', recommended: true, logoColor: '#E01E5A', logoInitials: 'SL', logoUrl: 'https://logo.clearbit.com/slack.com', logoBg: '#ffffff' },

  // Collaboration & communication
  { id: 'asana', name: 'Asana', publisher: 'Microsoft', description: 'Project and task management tool.', category: 'Collaboration & communication', logoColor: '#F06A6A', logoInitials: 'AS', logoUrl: 'https://logo.clearbit.com/asana.com', logoBg: '#ffffff' },
  { id: 'miro', name: 'Miro', publisher: 'Microsoft', description: 'Online collaborative whiteboard platform.', category: 'Collaboration & communication', logoColor: '#FFD02F', logoInitials: 'MI', logoUrl: 'https://logo.clearbit.com/miro.com', logoBg: '#ffffff' },
  { id: 'monday-com', name: 'Monday.com', publisher: 'Microsoft', description: 'Work operating system for teams.', category: 'Collaboration & communication', logoColor: '#F62B54', logoInitials: 'MO', logoUrl: 'https://logo.clearbit.com/monday.com', logoBg: '#ffffff' },
  { id: 'trello', name: 'Trello', publisher: 'Microsoft', description: 'Visual project management boards.', category: 'Collaboration & communication', logoColor: '#0052CC', logoInitials: 'TR', logoUrl: 'https://logo.clearbit.com/trello.com', logoBg: '#ffffff' },
  { id: 'zoom', name: 'Zoom', publisher: 'Microsoft', description: 'Video conferencing and meeting platform.', category: 'Collaboration & communication', logoColor: '#2D8CFF', logoInitials: 'ZM', logoUrl: 'https://logo.clearbit.com/zoom.us', logoBg: '#ffffff' },

  // Content management systems
  { id: 'confluence-on-premises', name: 'Confluence on-premises', publisher: 'Microsoft', description: 'Self-hosted Confluence knowledge base.', category: 'Content management systems', logoColor: '#0052CC', logoInitials: 'CO', logoUrl: 'https://logo.clearbit.com/atlassian.com', logoBg: '#ffffff' },
  { id: 'guru', name: 'Guru', publisher: 'Microsoft', description: 'Company wiki and knowledge management.', category: 'Content management systems', logoColor: '#7B68EE', logoInitials: 'GU', logoUrl: 'https://logo.clearbit.com/getguru.com', logoBg: '#ffffff' },
  { id: 'media-wiki', name: 'MediaWiki', publisher: 'Microsoft', description: 'Open-source wiki software platform.', category: 'Content management systems', logoColor: '#2C5F8A', logoInitials: 'MW', logoUrl: 'https://logo.clearbit.com/mediawiki.org', logoBg: '#ffffff' },
  { id: 'seismic', name: 'Seismic', publisher: 'Microsoft', description: 'Sales enablement and content management.', category: 'Content management systems', logoColor: '#00A1E0', logoInitials: 'SE', logoUrl: 'https://logo.clearbit.com/seismic.com', logoBg: '#ffffff' },
  { id: 'sharepoint-on-premises', name: 'SharePoint on-premises', publisher: 'Microsoft', description: 'Self-hosted SharePoint collaboration platform.', category: 'Content management systems', logoColor: '#036C70', logoInitials: 'SP', logoUrl: 'https://logo.clearbit.com/microsoft.com', logoBg: '#ffffff' },
  { id: 'stack-overflow', name: 'Stack Overflow', publisher: 'Microsoft', description: 'Q&A platform for developers.', category: 'Content management systems', logoColor: '#F48024', logoInitials: 'SO', logoUrl: 'https://logo.clearbit.com/stackoverflow.com', logoBg: '#ffffff' },
  { id: 'unily', name: 'Unily', publisher: 'Microsoft', description: 'Employee experience platform.', category: 'Content management systems', logoColor: '#4B2082', logoInitials: 'UN', logoUrl: 'https://logo.clearbit.com/unily.com', logoBg: '#ffffff' },
  { id: 'wordpress', name: 'WordPress', publisher: 'Microsoft', description: 'Open-source content management system.', category: 'Content management systems', logoColor: '#21759B', logoInitials: 'WP', logoUrl: 'https://logo.clearbit.com/wordpress.com', logoBg: '#ffffff' },

  // Customer relationship management
  { id: 'salesforce', name: 'Salesforce', publisher: 'Microsoft', description: 'Customer relationship management platform.', category: 'Customer relationship management', logoColor: '#00A1E0', logoInitials: 'SF', logoUrl: 'https://logo.clearbit.com/salesforce.com', logoBg: '#ffffff' },

  // Data visualisation
  { id: 'tableau-cloud', name: 'Tableau cloud', publisher: 'Microsoft', description: 'Cloud-based data visualization and analytics.', category: 'Data visualisation', logoColor: '#E97627', logoInitials: 'TC', logoUrl: 'https://logo.clearbit.com/tableau.com', logoBg: '#ffffff' },

  // Databases
  { id: 'azure-data-lake', name: 'Azure Data Lake Storage Gen2', publisher: 'Microsoft', description: 'Scalable data lake for big data analytics.', category: 'Databases', logoColor: '#0078D4', logoInitials: 'DL', logoUrl: 'https://logo.clearbit.com/azure.microsoft.com', logoBg: '#ffffff' },
  { id: 'azure-sql', name: 'Azure SQL', publisher: 'Microsoft', description: 'Managed relational database in the cloud.', category: 'Databases', logoColor: '#0078D4', logoInitials: 'SQ', logoUrl: 'https://logo.clearbit.com/azure.microsoft.com', logoBg: '#ffffff' },
  { id: 'microsoft-sql-server', name: 'Microsoft SQL Server', publisher: 'Microsoft', description: 'Enterprise relational database management system.', category: 'Databases', logoColor: '#CC2927', logoInitials: 'MS', logoUrl: 'https://logo.clearbit.com/microsoft.com', logoBg: '#ffffff' },
  { id: 'oracle-sql', name: 'Oracle SQL', publisher: 'Microsoft', description: 'Enterprise database management by Oracle.', category: 'Databases', logoColor: '#F80000', logoInitials: 'OR', logoUrl: 'https://logo.clearbit.com/oracle.com', logoBg: '#ffffff' },
  { id: 'postgresql', name: 'PostgreSQL', publisher: 'Microsoft', description: 'Open-source object-relational database system.', category: 'Databases', logoColor: '#336791', logoInitials: 'PG', logoUrl: 'https://logo.clearbit.com/postgresql.org', logoBg: '#ffffff' },

  // Enterprise resource planning
  { id: 'sap', name: 'SAP', publisher: 'Microsoft', description: 'Enterprise resource planning software.', category: 'Enterprise resource planning', logoColor: '#007DB8', logoInitials: 'SA', logoUrl: 'https://logo.clearbit.com/sap.com', logoBg: '#ffffff' },

  // File systems
  { id: 'box', name: 'Box', publisher: 'Microsoft', description: 'Cloud content management and file sharing.', category: 'File systems', logoColor: '#0061D5', logoInitials: 'BX', logoUrl: 'https://logo.clearbit.com/box.com', logoBg: '#ffffff' },
  { id: 'dropbox', name: 'Dropbox', publisher: 'Microsoft', description: 'Cloud storage and file synchronization.', category: 'File systems', logoColor: '#0061FF', logoInitials: 'DB', logoUrl: 'https://logo.clearbit.com/dropbox.com', logoBg: '#ffffff' },
  { id: 'egnyte', name: 'Egnyte', publisher: 'Microsoft', description: 'Hybrid cloud file management platform.', category: 'File systems', logoColor: '#00B2A9', logoInitials: 'EG', logoUrl: 'https://logo.clearbit.com/egnyte.com', logoBg: '#ffffff' },

  // IT service management tools
  { id: 'azure-devops-wiki', name: 'Azure DevOps wiki', publisher: 'Microsoft', description: 'Team documentation and wiki in Azure DevOps.', category: 'IT service management tools', logoColor: '#0078D4', logoInitials: 'AW', logoUrl: 'https://logo.clearbit.com/dev.azure.com', logoBg: '#ffffff' },
  { id: 'freshservice', name: 'FreshService', publisher: 'Microsoft', description: 'IT service management and helpdesk.', category: 'IT service management tools', logoColor: '#19A974', logoInitials: 'FR', logoUrl: 'https://logo.clearbit.com/freshservice.com', logoBg: '#ffffff' },
  { id: 'gitlab-issues', name: 'GitLab issues', publisher: 'Microsoft', description: 'Issue tracking in GitLab projects.', category: 'IT service management tools', logoColor: '#FC6D26', logoInitials: 'GI', logoUrl: 'https://logo.clearbit.com/gitlab.com', logoBg: '#ffffff' },
  { id: 'jira-data-center', name: 'Jira Data Center', publisher: 'Microsoft', description: 'Self-managed Jira for large enterprises.', category: 'IT service management tools', logoColor: '#0052CC', logoInitials: 'JD', logoUrl: 'https://logo.clearbit.com/atlassian.com', logoBg: '#ffffff' },
  { id: 'pagerduty-schedules', name: 'PagerDuty schedules', publisher: 'Microsoft', description: 'On-call scheduling and incident management.', category: 'IT service management tools', logoColor: '#06AC38', logoInitials: 'PD', logoUrl: 'https://logo.clearbit.com/pagerduty.com', logoBg: '#ffffff' },
  { id: 'zendesk-tickets', name: 'Zendesk tickets', publisher: 'Microsoft', description: 'Customer support ticketing system.', category: 'IT service management tools', logoColor: '#00363D', logoInitials: 'ZD', logoUrl: 'https://logo.clearbit.com/zendesk.com', logoBg: '#ffffff' },
  { id: 'zendesk-help', name: 'Zendesk help center', publisher: 'Microsoft', description: 'Customer-facing knowledge base articles.', category: 'IT service management tools', logoColor: '#00363D', logoInitials: 'ZH', logoUrl: 'https://logo.clearbit.com/zendesk.com', logoBg: '#ffffff' },

  // Sales & support
  { id: 'workday', name: 'Workday', publisher: 'Microsoft', description: 'Human capital and financial management.', category: 'Sales & support', logoColor: '#F5821F', logoInitials: 'WD', logoUrl: 'https://logo.clearbit.com/workday.com', logoBg: '#ffffff' },

  // Others
  { id: 'csv', name: 'CSV', publisher: 'Microsoft', description: 'Import data from comma-separated value files.', category: 'Others', logoColor: '#107C10', logoInitials: 'CS' },
  { id: 'custom-connector', name: 'Custom connector', publisher: 'Microsoft', description: 'Build a connector for any data source.', category: 'Others', logoColor: '#6264A7', logoInitials: 'CC' },
  { id: 'smartsheet', name: 'Smartsheet', publisher: 'Microsoft', description: 'Collaborative work management platform.', category: 'Others', logoColor: '#00A2E0', logoInitials: 'SS', logoUrl: 'https://logo.clearbit.com/smartsheet.com', logoBg: '#ffffff' },
];

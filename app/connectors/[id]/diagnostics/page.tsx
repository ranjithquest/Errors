// Add imports above

export function generateStaticParams() { return CONNECTORS.map((connector) => ({ id: connector.id })); }

// existing component or other code here...
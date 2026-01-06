import { useState } from "react";
import { createContext } from "react";

export const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  const [features, setFeatures] = useState(() => {
    return [
      {
        id: 'f1', name: 'Export Reports', enabled: true
      },
      {
        id: 'f2', name: 'Beta Tools', enabled: false
      },
      {
        id: 'f3', name: 'Edit Settings', enabled: true
      },
      {
        id: 'f4', name: 'Deactivate Users', enabled: false
      },
      {
        id: 'f5', name: 'Remove Users', enabled: true
      },
      {
        id: 'f6', name: 'Add Users', enabled: true
      },
    ]
  });

  const toggleFeatures = (id) => { 
    setFeatures(prev => 
      prev.map(feature => feature.id === id ? { ...feature, enabled: !feature.enabled} : feature)
    );
  };

  return (
    <FeatureContext.Provider value={{features, toggleFeatures}}>
      {children}
    </FeatureContext.Provider>
  )
}

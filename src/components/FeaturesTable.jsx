import { useContext } from "react";
import { FeatureContext } from "../context/FeatureContext";

export const FeaturesTable = () => {
  const { features, toggleFeature } = useContext(FeatureContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Enabled</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {features.map(f => (
          <tr key={f.id}>
            <td>{f.name}</td>
            <td>{f.enabled ? "Yes" : "No"}</td>
            <td>
              <button onClick={() => toggleFeature(f.id)}>Toggle</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

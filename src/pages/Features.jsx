import { FeaturesTable } from "../components/FeaturesTable";
export default function FeaturesPage() {
  return (
    <div>
      <h1>Features Management</h1>
      <p>Toggle which features are enabled in the system.</p>
      <FeaturesTable></FeaturesTable>
    </div>
  )
}

import SettingsScreen from "./SettingsScreen";

export default function AccountScreen({ onSetRenderScreen }) {
  return (
    <div className="HomeScreen">
      <div>Account</div>
      <button onClick={() => onSetRenderScreen(<SettingsScreen />)}>
        Settings
      </button>
    </div>
  );
}

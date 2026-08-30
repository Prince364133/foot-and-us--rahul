import WatermarkOverlay from '../../components/WatermarkOverlay/WatermarkOverlay';
import ScamPopup from '../../components/ScamPopup/ScamPopup';
import './AlertDemo.css';

export default function AlertDemo() {
  return (
    <div className="alert-demo-page">
      <div className="alert-demo-placeholder">
        <h2>System Simulation View</h2>
        <p>This isolated route hosts the watermark overlay and security alert popups.</p>
      </div>
      <WatermarkOverlay delay={1500} />
      <ScamPopup delay={2000} />
    </div>
  );
}

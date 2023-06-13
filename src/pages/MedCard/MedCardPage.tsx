import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function MedCardPage() {
  const user = useSelector((state: any) => state.medcard.user);

  if (user.id.length === 0) {
    return <Navigate to={`/adi-ved-react-/login`} />;
  }

  return (
    <div className="mt-64 flex h-full w-full items-center justify-center">
      <div className="stats bg-[#37daffae] text-primary-content">
        <div className="stat">
          <div className="stat-value">Скоро будет</div>
        </div>
      </div>
    </div>
  );
}

export default MedCardPage;

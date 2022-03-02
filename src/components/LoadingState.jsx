import spinner from "./assets/spinner.gif";

const LoadingState = () => {
  return (
    <div className="loading-state">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default LoadingState;

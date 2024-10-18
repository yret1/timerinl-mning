interface TogglesProps {
  text: string;
  onClick: (type: boolean) => void;
  active: boolean;
}

const Toggles: React.FC<TogglesProps> = ({ active, onClick, text }) => {
  return (
    <section className="w-full flex justify-start items-center gap-2">
      <div
        onClick={() => onClick(!active)}
        className="w-6 h-6 border-2 rounded-md border-primary"
      >
        {active && (
          <div className="w-full h-full bg-primary flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0104 0.489595C12.6199 0.0990703 11.9867 0.0990702 11.5962 0.489595L7 5.08579L2.40381 0.489594C2.01328 0.0990696 1.38012 0.0990696 0.989593 0.489594C0.599069 0.880118 0.599069 1.51328 0.989593 1.90381L5.58579 6.5L0.989592 11.0962C0.599069 11.4867 0.599068 12.1199 0.989592 12.5104C1.38012 12.9009 2.01328 12.9009 2.40381 12.5104L7 7.91422L11.5962 12.5104C11.9867 12.9009 12.6199 12.9009 13.0104 12.5104C13.4009 12.1199 13.4009 11.4867 13.0104 11.0962L8.41421 6.5L13.0104 1.90381C13.4009 1.51328 13.4009 0.880119 13.0104 0.489595Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      <p className="text-primary text-xl font-sans">{text}</p>
    </section>
  );
};

export default Toggles;

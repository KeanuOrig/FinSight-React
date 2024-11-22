import { AtomButtonProps } from "@tstypes/index";

  
const AtomButton: React.FC<AtomButtonProps> = ({
    text,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
    color = 'blue',
}) => {
    let buttonColor = '';   
    switch (color) {
      case 'blue':
        buttonColor = 'bg-blue-500 hover:bg-blue-600';
        break;
      case 'red':
        buttonColor = 'bg-red-500 hover:bg-red-600';
        break;
      case 'green':
        buttonColor = 'bg-green-500 hover:bg-green-600';
        break;
      default:
        buttonColor = 'bg-blue-500 hover:bg-blue-600';
    }
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`p-2 py-2 px-4 rounded text-white disabled:bg-gray-300 focus:outline-none transition duration-300 transform hover:scale-105 ${buttonColor} ${className}`}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };

export default AtomButton;
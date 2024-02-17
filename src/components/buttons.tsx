import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
import Loading from './loading';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gray: string; // ? 333, 555
  text: string;
  mt?: boolean;
  mb?: boolean;
  google?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const space_grotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

function GoogleIcon() {
  return (
    <Image
      width="24"
      height="24"
      src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Google-logos-and-brands-those-icons-lineal-those-icons.png"
      alt="external-Google-logos-and-brands-those-icons-lineal-those-icons"
    />
  );
}

export const Button = ({
  gray,
  text,
  mt,
  mb,
  google,
  disabled,
  loading = false,
  ...props
}: ButtonProps) => {
  const btnClasses = `btn ${
    google ? 'flex justify-between items-center' : 'flex justify-center'
  } gray-${gray}`;
  const mClasses = `${mt && 'my-4'} ${mb && 'mb-4'}`;
  const textClasses = `${space_grotesk.className} text-sm lg:text-base`;

  return (
    <button
      type="button"
      {...props}
      className={`${btnClasses} ${mClasses} ${textClasses} w-full`}
      disabled={disabled}
    >
      {google && <GoogleIcon />}
      {text}
      {loading && (
        <div className="ml-2">
          <Loading size={18} withLabel={false} />
        </div>
      )}
      {google && !loading && <div />}
    </button>
  );
};

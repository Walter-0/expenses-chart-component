import logo from "../logo.svg";

interface HeaderProps {
  balance: number; // denoted in cents for simplicity
}

const Header: React.FC<HeaderProps> = ({ balance }) => {
  return (
    <div className="flex h-24 w-full max-w-[343px] items-center justify-between rounded-xl bg-soft-red px-4 lg:h-[125px] lg:max-w-[540px] lg:px-8">
      <div>
        <p className="text-cream">My balance</p>
        <p className="text-2xl font-bold tracking-wide text-white lg:text-3xl">
          ${balance / 100}
        </p>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;

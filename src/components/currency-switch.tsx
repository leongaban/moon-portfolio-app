// ? Default choices listed, in future allow user to edit list

interface CurrencySwitchProps {}

export default function CurrencySwitch({}: CurrencySwitchProps) {
  return (
    <div className="currency-switch-container">
      <div className="currency-btn active">USD</div> <span>|</span>
      <div className="currency-btn">BTC</div> <span>|</span>
      <div className="currency-btn">ETH</div> <span>|</span>
      <div className="currency-btn">SOL</div>
    </div>
  );
}

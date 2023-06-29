import CreditCard from './components/CreditCard' 
const App = () => {

  const handleSubmit = () => {
    console.log("submitted!")
  }

  return (
    <div className="form-container">
      <form onSubmit ={handleSubmit}>
        <div className="input-container">
          <label>Name on card
            <input
            placeholder="Name"
            required
            />
          </label>
        </div>
        <div className="input-container">
          <label>Card number
            <input
            placeholder="0000 0000 0000 0000"
            min-length={16}
            max-length={16}
            required
            />
          </label>
        </div>
        <div className="supporting-inputs-container">
          <label>
            Expiry date
            <input type="month"
            required
            />
          </label>
          <label>
            CVV
            <input 
            id="cvv"
            placeholder="123"
            min-length={3}
            max-length={3}
            />
          </label>
        </div>
        <div className="input-container">
            <input type="submit"/>
        </div>
        <p className="info-message">ddd</p>
      </form>
    </div>
  )
}

export default App;

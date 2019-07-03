import React from 'react';

export default class MyForm extends React.Component {
  state = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    areRulesAccepted: false,
    isEditing: true,
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  acceptRules = () => {
    const { areRulesAccepted } = this.state;
    this.setState({ areRulesAccepted: !areRulesAccepted });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  }

  toggleEditing = (e) => {
    e.preventDefault();
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  editForm = () => {
    const {
      email,
      password,
      address,
      city,
      country,
      areRulesAccepted,
    } = this.state;

    return (
      <form onSubmit={this.toggleEditing}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input onChange={this.handleChange} value={email} type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input onChange={this.handleChange} value={password} type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea onChange={this.handleChange} value={address} type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input onChange={this.handleChange} value={city} type="text" className="form-control" name="city" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select onChange={this.handleChange} value={country} id="inputCountry" name="country" className="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input onChange={this.acceptRules} checked={areRulesAccepted} id="rules" type="checkbox" name="acceptRules" className="form-check-input" />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  showResult = () => {
    const {
      email,
      password,
      address,
      city,
      country,
      areRulesAccepted,
    } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleEditing}>Back</button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{`${areRulesAccepted}`}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { isEditing } = this.state;
    return isEditing ? this.editForm() : this.showResult();
  }
}

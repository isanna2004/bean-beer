import React from "react";
import Header from "../Header/Header";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import "./App.css";
import Favourites from "../Favourites/Favourites";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      value: "",
      filter: [],
      isToggleOn: false,
      favourites: [],
    };
  }
  //получаем данные с api
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          data: data,
          items: data,
        });
      });
  }
  //подтверждаем введенный запрос
  handleSubmit = (event) => {
    const { filter } = this.state;
    event.preventDefault();
    // передаем в state найденные элементы
    this.setState({
      items: filter,
    });
  };
  //получаем значение при вводе запроса в поле ввода
  dataSearch = (e) => {
    const { items, data } = this.state;
    let value = e.target.value.toLowerCase();
    this.setState({
      value: value,
    });
    value.length === 0
      ? this.setState({
          items: data,
        })
      : (value = e.target.value.toLowerCase());
    // отфильтровываем данные,содержащие значение из поля ввода
    let filter = items.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    this.setState({ filter: filter });
  };
  addFavourite = (id) => {
    const { favourites, isToggleOn } = this.state;
    favourites.push(id);
    this.setState({
      favourites: favourites,
      isToggleOn: true,
    });

    console.log(this.state.favourites);
  };
  removeFavourite = (id) => {
    const { favourites } = this.state;
    if (favourites.includes(id)) {
      favourites.splice(favourites.indexOf(id), 1);
      this.setState({
        isToggleOn: false,
      });
    }
  };
  render() {
    const { favourites, items } = this.state;
    
    return (
      <div>
        <Header />
        <Favourites items={items} favourites={favourites} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search">
                <form onSubmit={this.handleSubmit}>
                  <input
                    value={this.state.value}
                    className="search-input"
                    type="text"
                    placeholder="Search for beer..."
                    onChange={this.dataSearch}
                  />
                  <input
                    type="submit"
                    value="Search"
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "10px 20px",
                    }}
                  />
                </form>
              </div>
            </div>
            {this.state.items.map((item) => (
              <div className="col-md-4 my-3" key={item.id}>
                <div className="wrapper">
                  <div className="row">
                    {favourites.indexOf(item.id) === -1 ? (
                      <StarOutlinedIcon
                        onClick={() => this.addFavourite(item.id)}
                        style={{
                          stroke: "aquamarine",
                          strokeWidth: "2",
                          fill: "white",
                        }}
                      />
                    ) : (
                      <StarOutlinedIcon
                        onClick={() => this.removeFavourite(item.id)}
                        style={{
                          stroke: "aquamarine",
                          strokeWidth: "2",
                          fill: "yellow",
                        }}
                      />
                    )}
                    <div className="col-3">
                      <img
                        className="beer-img"
                        src={item.image_url}
                        alt="beer bottle"
                      ></img>
                    </div>
                    <div className="col-7">
                      <h5>{item.name}</h5>{" "}
                      <p className="description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    );
  }
}
export default App;

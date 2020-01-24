import React, { Component } from "react";
import Axios from "axios";

import Intro from "../../components/Intro/intro";
import Loader from "../../components/Loader/Loader";
import InputSearch from "../../components/InputSearch/InputSearch";
import ListRepositories from "../../components/list-repositories/ListRepositories";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      message: "",
      inputUser: "",
      dataRepos: []
    };
    this.getData = this.getData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async getData() {
    if (this.state.inputUser !== "") {
      this.setState({
        loading: true
      });
      try {
        const url = "/users/" + this.state.inputUser + "/repos";
        const res = await Axios.get(url);
        const { data } = await res;
        this.setState({
          error: false,
          dataRepos: data,
          loading: false
        });
      } catch (err) {
        console.log(err.data);
        this.setState({
          dataRepos: [],
          error: true,
          message: err.message,
          loading: false
        });
      }
    } else {
      this.setState({
        loading: false
      });
    }
  }

  async handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    await this.setState({
      [name]: value
    });
    await this.getData();
  }

  render() {
    let { loading, error, dataRepos, inputUser, message } = this.state;
    return (
      <div>
        <Intro />
        <InputSearch
          input={inputUser}
          name={"inputUser"}
          handleInputChange={this.handleInputChange}
          //handleSubmit={this.getData}
        />
        {dataRepos.length !== 0 && inputUser !== "" && (
          <ListRepositories repositories={dataRepos} />
        )}
        {loading && <Loader />}
        {error && inputUser !== "" && <p>{message}</p>}
      </div>
    );
  }
}

export default Main;

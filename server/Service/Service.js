import axios from 'axios';

class Service {

  constructor(url, headers = {}, payload = {}) {
    this.url = url;
    this.headers = headers;
    this.payload = payload;
  }

  async get() {

    var data = {
      method: 'GET',
      mode: 'cors',
      url: this.url
    }

    if (Object.keys(this.headers).length !== 0) {
      data.headers = this.headers
    }

    if (Object.keys(this.payload).length !== 0) {
      data.data = this.payload
    }

    const response = await axios(data)
      .catch(error => {
        return { error: error }
      })

    return response
  }

  async post() {

    var data = {
      method: 'post',
      url: this.url
    }

    if (Object.keys(this.headers).length !== 0) {
      data.headers = this.headers
    }

    if (Object.keys(this.payload).length !== 0) {
      data.data = this.payload
    }

    const response = await axios(data)
      .catch(error => {
        return { error: error }
      })

    return response
  }

  async delete() {

    this.headerPayloadChecker()

    try {
      const response = await axios({
        method: 'DELETE',
        url: this.url,
        data: this.payload,
        headers: this.headers,
      })
      return response.data

    } catch (error) {

      return error;
    }
  }

  async patch() {

    this.headerPayloadChecker()

    try {
      const response = await axios({
        method: 'PATCH',
        url: this.url,
        data: this.payload,
        headers: this.headers,
      })
      return response.data

    } catch (error) {

      return error;
    }
  }


  headerPayloadChecker() {

    if (Object.keys(this.headers).length === 0 || typeof this.headers == 'undefined') {

      this.headers = '';
    }
    else {
      this.headers = JSON.stringify(this.headers)
    }

    if (Object.keys(this.payload).length === 0 || typeof this.payload == 'undefined') {

      this.payload = '';
    }
    else {
      this.payload = JSON.stringify(this.payload)
    }

  }

}

export default Service

import React, { Component } from "react";

class CityList extends Component {
  render() {
    return (
      <div>
        <table className="fixed_header">
          <tbody>
            <tr>
              <td>Antwerpen</td>
            </tr>
            <tr>
              <td>Brussel</td>
            </tr>
            <tr>
              <td>Mechelen</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default CityList;

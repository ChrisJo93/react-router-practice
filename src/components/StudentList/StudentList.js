import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    const theList = this.props.students.map(function (item) {
      return (
        <tr className="tbRow" key={item.id}>
          <td>{item.github_name}</td>
        </tr>
      );
    });

    return (
      <div className="tableContainer">
        <h2>Saved GitHub Tricksters</h2>
        <table>
          <thead>
            <tr className="thRow">
              <th>Username</th>
            </tr>
          </thead>
          <tbody>{theList}</tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;

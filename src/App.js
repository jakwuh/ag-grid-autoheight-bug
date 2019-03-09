import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const columnDefs = [
  {
    headerName: "Name",
    cellRendererFramework: ({ data }) => data.name,
    width: 120,
    autoHeight: true,
    cellStyle: { 'white-space': 'normal !important' }
  },
];

let i = 0;

class GridExample extends React.Component {
  constructor(props) {
    super(props)

    document.querySelector('#add').onclick = () => {
      this.setState((state) => ({
        rowData: [
          ...state.rowData,
          { id: ++i, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus reiciendis dicta voluptatem ea culpa cum quisquam aspernatur. Officia eveniet obcaecati tempora doloremque, voluptas accusantium, id quia odio quidem, doloribus veniam.' },
          { id: ++i, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus reiciendis dicta voluptatem ea culpa cum quisquam aspernatur. Officia eveniet obcaecati tempora doloremque, volupta accusantium, id quia odio quidem, doloribus veniam.' },
          { id: ++i, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus reiciendis dicta voluptatem ea culpa cum quisquam aspernatur. Officia eveniet obcaecati tempora doloremque, voluptas accusantium, id quia odio quidem, doloribus veniam.' },
        ]
      }))
    }

    this.state = {
      rowData: [],
    };
  }

  onGridReady({ api }) {
    this.gridApi = api;
    api.resetRowHeights();
  }

  render() {
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <div
          id="myGrid"
          style={{
            boxSizing: "border-box",
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            columnDefs={columnDefs}
            debug={false}
            rowData={this.state.rowData}
            getRowNodeId={item => item.id}
            deltaRowDataMode
            rowHeight={15}
          />
        </div>
      </div>
    );
  }
}

export default GridExample;
